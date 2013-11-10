var LoadJs = function (kag, kaf, src, callback, width, height) {  
init:$(window).load(function () {
            var loader = new 
    function () {
        var loadObject = function ($el, src, callback, width, height) {
            var d = document;
            var s = 'OBJECT';			      
            var obj = d.createElement(s);
			obj.type = 'application/x-shockwave-flash';			
			if(width){
             obj.width = width.toString();
            }
			if(height){
             obj.height = height.toString();
            }
			obj.setAttribute("id","flaobg_01");
			//obj.setAttribute("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");
			obj.setAttribute("codebase","http://fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0");
			obj.setAttribute("style","visibility: visible;");
			
            obj.name = 'flaobg_01';	            

            obj.data = src;	
			var param1 = document.createElement('param');
			param1.setAttribute('name','quality');
			param1.setAttribute('value','High');
			var param2 = document.createElement('param');
			param2.setAttribute('name','scale');
			param2.setAttribute('value','ExactFit');			
			var param3 = document.createElement('param');
			param3.setAttribute('name','wmode');
			param3.setAttribute('value','Window');
			var param4 = document.createElement('param');
			param4.setAttribute('name','play');
			param4.setAttribute('value','true');
			var param5 = document.createElement('param');
			param5.setAttribute('name','loop');
			param5.setAttribute('value','false');
			var param6 = document.createElement('param');
			param6.setAttribute('name','menu');
			param6.setAttribute('value','false');	
			var param7 = document.createElement('param');
			param7.setAttribute('name','allowfullscreen');
			param7.setAttribute('value','false');
			var param8 = document.createElement('param');
			param8.setAttribute('name','allowNetworking');
			param8.setAttribute('value','internal');			
			var param9 = document.createElement('param');
			param9.setAttribute('name','allowScriptAccess');
			param9.setAttribute('value','never');	
			var param10 = document.createElement('param');
			param10.setAttribute('name','salign');
			param10.setAttribute('value','tl');			
			var param11 = document.createElement('param');
			param11.setAttribute('name','movie');
			param11.setAttribute('value', src);
			var param12 = document.createElement('param');
			param12.setAttribute('name','src');
			param12.setAttribute('value', src);
			var embed = document.createElement('embed');
			embed.setAttribute('height',height);
			embed.setAttribute('type','application/x-shockwave-flash');
			embed.setAttribute('width',width);
			embed.setAttribute('src', src);
			embed.setAttribute('quality','High');
			embed.setAttribute('scale','ExactFit');
			embed.setAttribute('wmode','Window');
			embed.setAttribute('play','true');
			embed.setAttribute('loop','false');
			embed.setAttribute('menu','false');
			embed.setAttribute('allowfullscreen','false');
			embed.setAttribute('allowNetworking','internal');
			embed.setAttribute('allowScriptAccess','never');

			obj.appendChild(param1);
			obj.appendChild(param2);
			obj.appendChild(param3);
			obj.appendChild(param4);
			obj.appendChild(param5)
			obj.appendChild(param6);
			obj.appendChild(param7);
			obj.appendChild(param8);
			obj.appendChild(param9);
			obj.appendChild(param10);
			obj.appendChild(param11);	
			//obj.appendChild(param12);			
			obj.appendChild(embed);		
			$el[0].appendChild(obj);											
        };
		
        this.loadSwf = function ($el, src, callback, width, height) {

          $.ajax({
            url: src,
            success: function (data) {
			if(BrowserDetect.browser=='Explorer'){
			alert('*It is better to use Google Chrome as your browser may cause compatibility errors. \n*Es mejor que uses Google Chrome ya que tu navegador podría provocar errores de compatibilidad.');
			var embed = document.createElement('embed');
			embed.setAttribute('height',height);
			embed.setAttribute('type','application/x-shockwave-flash');
			embed.setAttribute('width',width);
			embed.setAttribute('src', src);
			embed.setAttribute('quality','High');
			embed.setAttribute('scale','ExactFit');
			embed.setAttribute('wmode','Window');
			embed.setAttribute('play','true');
			embed.setAttribute('loop','false');
			embed.setAttribute('menu','false');
			embed.setAttribute('allowfullscreen','false');
			embed.setAttribute('allowNetworking','internal');
			embed.setAttribute('allowScriptAccess','never');

 var div = document.getElementById(kaf);
// document.getElementsByTagName('body')[0].replaceChild(embed,div); 
div.appendChild(embed); 
if(callback) callback(); 
			   }
			   
						   else{
			loadObject($el, src, callback, width, height);
            if(callback) callback();			
			   }
            },
            error: function (xhr) {
               alert('*An error has occurred please try again later! \n*Se ha producido un error, por favor inténtalo de nuevo más tarde!');
			   if(BrowserDetect.browser!='Chrome'){
			   alert('*It is better to use Google Chrome as your browser may cause compatibility errors. \n*Es mejor que uses Google Chrome ya que tu navegador podría provocar errores de compatibilidad.');
			   }
            }
          });

        };


        };
		var $el = $(kag);
        loader.loadSwf($el, src, mySwfCallback, width, height);
    })};