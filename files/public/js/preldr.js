$(document).ready(function () {
    "use strict"
    //indexOf support for IE8 and below. 
    if (!Array.prototype.indexOf){
      Array.prototype.indexOf = function(elt /*, from*/){
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
             ? Math.ceil(from)
             : Math.floor(from);
        if (from < 0)
          from += len;

        for (; from < len; from++){
          if (from in this &&
              this[from] === elt)
            return from;
        }
        return -1;
      };
    }

    //bgImg for holding background images in the page & img array for images present in the document(<img src="">).
    var bgImg = [], img = [], count=0, percentage = 0;

    //Creating loader holder. 
    $('<div id="loaderMask"><span style="font-size: 33px;">0%</span><div id="qLbar" style="height: 30px; margin-top: -15px; background-color: #3C6787; width: 0%; position: absolute; top: 50%; min-width: 0%; overflow: hidden;"></div></div>').css({
        position:"fixed",
        top:0,
        bottom:0,
        left:0,
        right:0,
        background:'#fff',
		zIndex:6000,
    }).appendTo('body');

    //Using jQuery filter method we parse all elemnts in the page and adds background image url & images src into respective arrays.
    $('*').filter(function() {

        var val = $(this).css('background-image').replace(/url\(/g,'').replace(/\)/,'').replace(/"/g,'');
        var imgVal = $(this).not('script').attr('src');

        //Getting urls of background images.
        if(val !== 'none' && !/linear-gradient/g.test(val) && bgImg.indexOf(val) === -1){
            bgImg.push(val)
        }

        //Getting src of images in the document.
        if(imgVal !== undefined && img.indexOf(imgVal) === -1){
            img.push(imgVal)
        }

    });

    //Merging both bg image array & img src array
    var imgArray = bgImg.concat(img); 

    //Adding events for all the images in the array.
    $.each(imgArray, function(i,val){ 
        //Attaching load event 
        $("<img />").attr("src", val).bind("load", function () {
            completeImageLoading();
        });

        //Attaching error event
        $("<img />").attr("src", val).bind("error", function () {
            imgError(this);
        });
    })

    //After each successful image load we will create percentage.
    function completeImageLoading(){
        count++;
        percentage = Math.floor(count / imgArray.length * 100);
        $('#loaderMask').html('<span style="font-size: 33px;">'+percentage + '%'+'</span><div id="qLbar" style="height: 30px; margin-top: -15px; background-color: #3C6787; width: '+percentage + '%; position: absolute; top: 50%; min-width: 0%; overflow: hidden;"></div>');

        //When percentage is 100 we will remove loader and display page.
        if(percentage === 100){
            $('#loaderMask').html('<span style="font-size: 33px;">100%</span><div id="qLbar" style="height: 100%; background-color: #3C6787; width: 100%; position: absolute; min-width: 0%; overflow: hidden;"></div>')
            $('#loaderMask').fadeOut(function(){
                $('#loaderMask').remove()
            })
        }
    }

    //Error handling - When image fails to load we will remove the mask & shows the page. 
    function imgError (arg) {
        $('#loaderMask').html("<span style='font-size: 11px;'>A element failed to load...</span><div id='qLbar' style='height: 30px; margin-top: -15px; background-color: #3C6787; width: "+percentage + "%; position: absolute; top: 50%; min-width: 0%; overflow: hidden;'></div>").delay(510).fadeOut(100, function(){
            $('#loaderMask').remove();
        })
    }

});