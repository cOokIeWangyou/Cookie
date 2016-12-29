$(function(){
	wow=new WOW();
    wow.init();
	$('#dowebok').fullpage({
	sectionsColor: [],
	anchors: ['page1'],
	menu:"#menu",
//	scrollBar:true
	});
//	$("html").css("overflow","hidden");
//	$(".fad").fad();
//	$(".six1").slideDown();
	var imageRotater = null;
	function InitScripts(){
		imageRotater = ImageRotatorJS('Ellipse','RotatingIcon',5,110,3000, 0, 90, 0, null);
	}
	InitScripts();
	$("#uers").on("click",function(){
		$("#moTai").css("display","block");
		$("#beiJing").css("display","block");
	});
	$(".guanBi").on("click",function(x){
		event.preventDefault();
		$("#moTai").css("display","none");
		$("#beiJing").css("display","none");
	});
	$("#user").on("blur",function(){
		var t=$("#user").val();
		var reg=/^[a-z0-9_-]{3,16}$/;
		if(reg.test(t)==false){
			alert("用户名有误");
		}else{
			alert("用户名正确");
		}
//		alert(t);
	});
	$("#passw").on("blur",function(){
		var t=$("#passw").val();
		var reg=/^[a-z0-9_-]{6,18}$/;
		if(reg.test(t)==false){
			alert("密码有误");
		}else{
			alert("密码正确");
		}
//		alert(t);
	});
	$("#nuers").on("click",function(){
		$("#moTai2").css("display","block");
		$("#beiJing").css("display","block");
	});
	$(".nguanBi").on("click",function(x){
		event.preventDefault();
		$("#moTai2").css("display","none");
		$("#beiJing").css("display","none");
	});
	$("#nuser").on("blur",function(){
		var t=$("#nuser").val();
		var reg=/^[a-z0-9_-]{3,16}$/;
		if(reg.test(t)==false){
			alert("用户名有误");
		}else{
			alert("用户名正确");
		}
//		alert(t);
	});
	$("#npassw").on("blur",function(){
		var t=$("#npassw").val();
		var reg=/^[a-z0-9_-]{6,18}$/;
		if(reg.test(t)==false){
			alert("密码有误");
		}else{
			alert("密码正确");
		}
//		alert(t);
	});
	$("#npasswt").on("blur",function(){
		var h=$("#npassw").val();
		var t=$("#npasswt").val();
		if(t==h){
			alert("密码正确");
		}else{
			alert("密码有误");
		}
//		alert(t);
	});
	$("#nemail").on("blur",function(){
		var t=$("#nemail").val();
		var reg=/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
		if(reg.test(t)==false){
			alert("邮箱有误");
		}else{
			alert("邮箱正确");
		}
//		alert(t);
	});
	$("#nId").on("blur",function(){
		var t=$("#nId").val();
		var reg=/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
		if(reg.test(t)==false){
			alert("身份证输入有误");
		}else{
			alert("身份证输入正确");
		}
//		alert(t);
	});
});
