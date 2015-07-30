window.onload=function(){
	var admin=document.getElementById('admin');
	var adminmenu=document.getElementById('adminmenu');
	admin.onmouseover=function(){
		adminmenu.style.display='block';
	}
	admin.onmouseout=function(){
		adminmenu.style.display='none';
	}
}