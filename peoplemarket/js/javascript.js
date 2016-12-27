function xiaLa1(x){
	var y=document.getElementById("cd1");
	if(y.style.display=="none"){
		y.style.display="block";
	}else{
		y.style.display="none";
	}
}
function huoQu1(x){
	var a=document.getElementById("cd2");
	var b=document.getElementById("cd1");
	var c=a.innerHTML;  //商品
	var d=b.innerHTML;  //商铺
	a.innerHTML=d;
	b.innerHTML=c;
}
//搜索框的下拉菜单。
function xiaLa2(x){
	var a=document.getElementById("cd3");
	a.style.display="block";
}
function xiaoShi1(x){
	var a=document.getElementById("cd3");
	a.style.display="none";
}
function xiaLa3(x){
	var a=document.getElementById("cd4");
	a.style.display="block";
}
function xiaoShi2(x){
	var a=document.getElementById("cd4");
	a.style.display="none";
}
//hot大图的轮播效果。
var gd1=document.getElementById("gd1");
var gdnr1=document.getElementById("gdnr1");
var pics=gdnr1.getElementsByTagName("li");
var prov=document.getElementById("prov");
var next=document.getElementById("next");
var cons=document.getElementById("con").getElementsByTagName("span");
var index=3;
var gunDong;
setOpacity(pics[0],0);
setOpacity(pics[1],0);
setOpacity(pics[2],0);
prov.onclick=function(){
	if(index==0){
		fadeOut(pics[index]);
		index=3;
		fadeIn(pics[index]);
	}else{
		fadeOut(pics[index]);
		fadeIn(pics[index-1]);
		index--;
	}
	conSy();
}
next.onclick=function(){
	if(index==3){
		fadeOut(pics[index]);
		index=0;
		fadeIn(pics[index]);
	}else{
		fadeOut(pics[index]);
		fadeIn(pics[index+1]);
		index++;
	}
	conSy();
}
gunDong=setInterval("next.onclick()",3000);
gd1.onmouseover=function(){
	prov.style.display="block";
	next.style.display="block";
	clearInterval(gunDong);
}
gd1.onmouseout=function(){
	prov.style.display="none";
	next.style.display="none";
	gunDong=setInterval("next.onclick()",3000);
}
function conSy(){
	for(var i=0;i<cons.length;i++){
		cons[i].style.backgroundColor="rgba(255,255,255,0.5)";
	}
	cons[index].style.backgroundColor="#CC0000";
}
for(var j=0;j<cons.length;j++){
	cons[j].onclick=function(){
		if(this.style.backgroundColor=="#cc0000"){
			return;
		}else{
			var newIndex=this.getAttribute("index");
			fadeIn(pics[newIndex]);
			fadeOut(pics[index]);
			index=newIndex;
			conSy();
			return index;
		}
	}
}
function fadeIn(elem){  //淡入封装函数。
	for(var i=0;i<=100;i++){
		(function(){
			var po=i;
			setTimeout(function(){
				setOpacity(elem,po);
			},po*20);
		})();
	}
}
function fadeOut(elem){  //淡出封装函数。
	for(var i=0;i<=100;i++){
		(function(){
			var po=i;
			setTimeout(function(){
				setOpacity(elem,po);
			},(100-po)*20);
		})();
	}
}
function setOpacity(elem,level){  //透明度兼容封装函数。
	if(elem.filters){
		elem.style.filter="alpha(opacity="+level+")";
		elem.style.zoom=1;
	}else{
		elem.style.opacity=level/100;
	}
}
//li标签鼠标放上去边框变化。
var borchang=document.getElementById("borchang");
//	console.log(borchang);
var borchli=borchang.getElementsByTagName("li");
//	console.log(borchli);
for(var i=0;i<borchli.length;i++){
//	console.log(borchli[i]);
	borchli[i].onmouseover=function(){
		this.style.border="1px solid #cc0000";
	}
	borchli[i].onmouseout=function(){
		this.style.border="1px solid #ddd";
	}
}
//小图中的无缝滚动。
//第一个。
var mini=document.getElementsByName("miwuf");
	var times,timers;
	mini[0].innerHTML+=mini[0].innerHTML;
	function miwfgd(){
		if(mini[0].parentNode.scrollLeft%580==0){
			clearInterval(times);
			timers=setTimeout("gundong2()",1000);
		}
		if(mini[0].parentNode.scrollLeft>=mini[0].scrollWidth/2){
			mini[0].parentNode.scrollLeft=0;
		}else{
			mini[0].parentNode.scrollLeft++;
		}
	}
	function gundong2(){
	mini[0].parentNode.scrollLeft++;
	times=setInterval("miwfgd()",5);
	}
	gundong2();
	mini[0].parentNode.onmouseover=function(){
	clearInterval(times);
	clearInterval(timers);
	}
	mini[0].parentNode.onmouseout=function(){
	times=setInterval("miwfgd()",5);
	}
//第二个。
	var times1,timers1;
	mini[1].innerHTML+=mini[1].innerHTML;
	function miwfgd1(){
		if(mini[1].parentNode.scrollTop%360==0){
			clearInterval(times1);
			timers1=setTimeout("gundong3()",1000);
		}
		if(mini[1].parentNode.scrollTop>=mini[1].scrollHeight/2){
			mini[1].parentNode.scrollTop=0;
		}else{
			mini[1].parentNode.scrollTop++;
		}
	}
	function gundong3(){
	mini[1].parentNode.scrollTop++;
	times1=setInterval("miwfgd1()",5);
	}
	gundong3();
	mini[1].parentNode.onmouseover=function(){
	clearInterval(times1);
	clearInterval(timers1);
	}
	mini[1].parentNode.onmouseout=function(){
	times1=setInterval("miwfgd1()",5);
	}
//第三个。
	var times2,timers2;
	mini[2].innerHTML+=mini[2].innerHTML;
	function miwfgd2(){
		if(mini[2].parentNode.scrollLeft%580==0){
			clearInterval(times2);
			timers2=setTimeout("gundong4()",1000);
		}
		if(mini[2].parentNode.scrollLeft>=mini[2].scrollWidth/2){
			mini[2].parentNode.scrollLeft=0;
		}else{
			mini[2].parentNode.scrollLeft++;
		}
	}
	function gundong4(){
	mini[2].parentNode.scrollLeft++;
	times2=setInterval("miwfgd2()",5);
	}
	gundong4();
	mini[2].parentNode.onmouseover=function(){
	clearInterval(times2);
	clearInterval(timers2);
	}
	mini[2].parentNode.onmouseout=function(){
	times2=setInterval("miwfgd2()",5);
	}
//第四个。
	var times3,timers3;
	mini[3].innerHTML+=mini[3].innerHTML;
	function miwfgd3(){
		if(mini[3].parentNode.scrollTop%360==0){
			clearInterval(times3);
			timers3=setTimeout("gundong5()",1000);
		}
		if(mini[3].parentNode.scrollTop>=mini[3].scrollHeight/2){
			mini[3].parentNode.scrollTop=0;
		}else{
			mini[3].parentNode.scrollTop++;
		}
	}
	function gundong5(){
	mini[3].parentNode.scrollTop++;
	times3=setInterval("miwfgd3()",5);
	}
	gundong5();
	mini[3].parentNode.onmouseover=function(){
	clearInterval(times3);
	clearInterval(timers3);
	}
	mini[3].parentNode.onmouseout=function(){
	times3=setInterval("miwfgd3()",5);
	}
//第五个。
	var times4,timers4;
	mini[4].innerHTML+=mini[4].innerHTML;
	function miwfgd4(){
		if(mini[4].parentNode.scrollLeft%580==0){
			clearInterval(times4);
			timers4=setTimeout("gundong6()",1000);
		}
		if(mini[4].parentNode.scrollLeft>=mini[4].scrollWidth/2){
			mini[4].parentNode.scrollLeft=0;
		}else{
			mini[4].parentNode.scrollLeft++;
		}
	}
	function gundong6(){
	mini[4].parentNode.scrollLeft++;
	times4=setInterval("miwfgd4()",5);
	}
	gundong6();
	mini[4].parentNode.onmouseover=function(){
	clearInterval(times4);
	clearInterval(timers4);
	}
	mini[4].parentNode.onmouseout=function(){
	times4=setInterval("miwfgd4()",5);
	}
//tab切换。
	var tabHead=document.getElementById("tabQ").getElementsByTagName("a");
	var tabContent1=document.getElementById("tabQ1");
	var tabContent2=document.getElementById("tabQ2");
	var tabContent3=document.getElementById("tabQ3");
	var tabContent4=document.getElementById("tabQ4");
	tabHead[0].onclick=function(){
		for(var i=0;i<tabHead.length;i++){
			tabHead[i].className="";
		}
		tabContent1.style.display="block";
		tabContent2.style.display="none";
		tabContent3.style.display="block";
		tabContent4.style.display="none";
		this.className="tabYS";
	}
	tabHead[1].onclick=function(){
		for(var i=0;i<tabHead.length;i++){
			tabHead[i].className="";
		}
		tabContent1.style.display="none";
		tabContent2.style.display="block";
		tabContent3.style.display="none";
		tabContent4.style.display="block";
		this.className="tabYS";
	}
	tabHead[2].onclick=function(){
		for(var i=0;i<tabHead.length;i++){
			tabHead[i].className="";
		}
		tabContent1.style.display="block";
		tabContent2.style.display="none";
		tabContent3.style.display="block";
		tabContent4.style.display="none";
		this.className="tabYS";
	}
	tabHead[3].onclick=function(){
		for(var i=0;i<tabHead.length;i++){
			tabHead[i].className="";
		}
		tabContent1.style.display="none";
		tabContent2.style.display="block";
		tabContent3.style.display="none";
		tabContent4.style.display="block";
		this.className="tabYS";
	}
	tabHead[4].onclick=function(){
		for(var i=0;i<tabHead.length;i++){
			tabHead[i].className="";
		}
		tabContent1.style.display="block";
		tabContent2.style.display="none";
		tabContent3.style.display="block";
		tabContent4.style.display="none";
		this.className="tabYS";
	}
	tabHead[5].onclick=function(){
		for(var i=0;i<tabHead.length;i++){
			tabHead[i].className="";
		}
		tabContent1.style.display="none";
		tabContent2.style.display="block";
		tabContent3.style.display="none";
		tabContent4.style.display="block";
		this.className="tabYS";
	}
	tabHead[6].onclick=function(){
		for(var i=0;i<tabHead.length;i++){
			tabHead[i].className="";
		}
		tabContent1.style.display="block";
		tabContent2.style.display="none";
		tabContent3.style.display="block";
		tabContent4.style.display="none";
		this.className="tabYS";
	}
	tabHead[7].onclick=function(){
		for(var i=0;i<tabHead.length;i++){
			tabHead[i].className="";
		}
		tabContent1.style.display="none";
		tabContent2.style.display="block";
		tabContent3.style.display="none";
		tabContent4.style.display="block";
		this.className="tabYS";
	}
//图片动作效果。
var dongTs=document.getElementsByName("dongTU");
for(var i=0;i<dongTs.length;i++){
	dongTs[i].onmouseover=function(){
		dongT1(this);
	}
	dongTs[i].onmouseout=function(){
		dongT2(this);
	}
}
function dongT1(x){
	for(var i=0;i<dongTs.length;i++){
		if(dongTs[i]==x){
			dongTs[i].className="dongTudt";
		}else{
			dongTs[i].className="";
		}
	}
}
function dongT2(x){
	for(var i=0;i<dongTs.length;i++){
		if(dongTs[i]==x){
			dongTs[i].className="";
		}
	}
}
//网页顶部搜索框出现与隐藏。
var souHead=document.getElementById("souHead");
window.addEventListener("scroll",function(){
	var wh=document.documentElement.scrollTop||document.body.scrollTop;
	if(wh>=170){
		souHead.style.display="block";
	}else{
		souHead.style.display="none";
	}
})
//侧边栏广告。
var navAll=document.getElementById("navAll");
window.addEventListener("scroll",function(){
	var sT=document.body.scrollTop||document.documentElement.scrollTop;
    if(sT<=300){
    	navAll.style.top=600+"px";
    }else if(sT>=5621){
    	navAll.style.top=5900+"px";
    }else{
    	navAll.style.top=260+sT+"px";
    }  
})