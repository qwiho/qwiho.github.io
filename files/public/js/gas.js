
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
function writeConsole(content) {







if (document.getElementById)







top.consoleRef=window.open('about:blank','_self','')







else 







top.consoleRef.document.open("text/html","replace");







//use "replace" to prevent back/forward history







//top.consoleRef.document.open("text/html","replace");







top.consoleRef.document.writeln(







'<html><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /><title>Kipo - Playing</title><meta http-equiv="content-language" content="Spanish"/></head>'







+'<body bgcolor=#FFFFFF onLoad="self.focus()">'







+'<span style="font-family:Arial;font-size:13px;color:#000000">'







+'<b><a style="color:#0000FF" target="_self" href="http://kipo.com.nu/@?newgame=01487">&lt;Jugar m&#225;s Juegos | Play more Games</a>'







+'</b><br>www.kipo.com.nu'







+'<table width="100%" height="90%" border="0" cellSpacing="0" cellPadding="15" style="text-align: center; z-index:2;">'







+'<tbody>'







+'<tr>'







+'<td class="g1" width="100%" height="100%">'







+'<object width="100%" height="100%">'







+'<param name="menu" value="false">'







+'<param name="allowNetworking" value="internal">'







+'<param name="allowScriptAccess" value="never">'







+'<embed src="'







+content







+'" width="75%" height="100%" quality="high" wmode="window" play="true" menu="false" allownetworking="internal" allowscriptaccess="never" scale="exactfit" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" name="Game">'







+'</object>'







+'</td>'







+'</tr>'







+'</tbody>'







+'</table>'







+'<font style="font-size:13px" color="#000000" face="Arial">&#169; KipoPlay, LLC. All rights reserved for each of the parties.'







+'</font></html>'







)







top.consoleRef.document.close()







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

var pageTracker = _gat._getTracker("UA-9575317-2");

pageTracker._setDomainName("none");

pageTracker._setAllowLinker(true);

pageTracker._initData();

pageTracker._trackPageview();

}



addLoadEvent(callGA);
