

var wrap = document.getElementById("wrap");
var logo = document.querySelector("#header .logo");
var daohang = document.querySelector("#header .a").children[0];
var more = daohang.querySelector(".more");

moreNumber();


window.onresize = function () {

	moreNumber();

	typeof index_onresize === "function" && index_onresize && index_onresize();

	
}

	logo.onclick = function () {
		window.location.href="index.html"; 
	}

//控制导航栏
function moreNumber () {
	var i = daohang.children.length-2;
	var k = logo.offsetWidth + daohang.offsetWidth;
	

	if(k>wrap.offsetWidth){
		for(var j = 1 ; j < more.children.length ; j ++ ){
			more.children[j].style.display = "none";
		}
		while(k>wrap.offsetWidth) {
			daohang.children[i].style.display = "none";
			more.children[i+1].style.display = "block";
			if(daohang.children[daohang.children.length-2].style.display == 'none'){
				more.style.display = "block";
			}else{
				more.style.display = "none";
			}

			i--;
			if( i==-1 )
				break;
			k = logo.offsetWidth + daohang.offsetWidth;

		}

	}
	if(wrap.offsetWidth>k+100){
		var i = 0;
		for(var j = 1 ; j < more.children.length ; j ++ ){
			more.children[j].style.display = "block";
		}
		while(wrap.offsetWidth>k+100) {
			daohang.children[i].style.display = "block";
			more.children[i+1].style.display = "none";
			if(daohang.children[daohang.children.length-2].style.display == 'none'){
				more.style.display = "block";
			}else{
				more.style.display = "none";
			}
			i++;
			if( i== daohang.children.length-1)
				break;
			k = logo.offsetWidth + daohang.offsetWidth;

		}

	}


}










