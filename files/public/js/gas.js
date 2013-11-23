/*
 * 
 *
 *
 *
*/
function OnGoMenuFormLink(GoList)
{
   var url = GoList.options[GoList.selectedIndex].value;
   var target = GoList.options[GoList.selectedIndex].className;
   GoList.selectedIndex=0;
   GoList.blur();
   if (url)
   {
      NewWin=window.open(url,target);
      window['NewWin'].focus()
   }
}

function ShowObject(id, flag)
{
   var elem=document.getElementById(id);
   if(elem)
      elem.style.visibility=flag?'visible':'hidden';
}

function show(obj,msg,jup){
qTip.style.top= 0 + "%";
qTip.innerHTML=msg+jup
qTip.style.display="block"
}

function mov(obj,msg,jup){
qTip.style.top= 0 + "%";
qTip.innerHTML=msg+jup
qTip.style.display="block"
}

function addLoadEvent(func,arg){
if (!arg){
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
}
}else{
if (arg){
  oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func(arg);
	}
     window.onload = function() {
      oldonload();
      func(arg);
    }
  }
}
}

function loadGAScript(){
if (!document.getElementsByTagName) return false;
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
var gaScript = document.createElement("script");
gaScript.setAttribute("src",gaJsHost +"google-analytics.com/ga.js");
gaScript.setAttribute("type","text/javascript");
var domHead = document.getElementsByTagName("head")[0]
domHead.appendChild(gaScript);
	}

loadGAScript();

function callGA(){
var pageTracker = _gat._getTracker("UA-XXXXXXX-X");
pageTracker._setDomainName("none");
pageTracker._setAllowLinker(true);
pageTracker._initData();
pageTracker._trackPageview();
}

addLoadEvent(callGA);
