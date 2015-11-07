
// var change = document.getElementById("change");
// var change_con = change.querySelector('.con');
// var change_index=0;
// var change_a = document.querySelectorAll(".change_a");


var mainbody = document.getElementById("mainbody");
var mainbody_con = mainbody.children[0];
var conHeight = new Array();
var topbutton = mainbody.querySelector(".bottom");

init();
// addChangeAnimation();
function index_onresize(){

	conHeight = [0,0,0,0];
	// change_con.style.left = -change_index*change.offsetWidth + "px";
	mainbody_con.style.width =  parseInt(mainbody.offsetWidth/4 )*4 + "px";
	for(var i = 0 ; i < mainbody_con.children.length; i++){
		paiban(mainbody_con.children[i]);
	}

}


window.onscroll = function () {
	//瀑布流添加
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var a = scrollTop+clientHeight;
	var b = mainbody.offsetTop+mainbody.offsetHeight+150;
	if(a>b&&b<5000){
		for(var i = 0 ; i < 8 ; i ++){
			var str = "img/Drawing/("+(i+1)+").jpg";
			addImg(str);
		}

	}
}

//添加轮播图部分的功能
// function addChangeAnimation () {
// 	var start;
// 	var changes;
// 	var t;
// 	var endT;
// 	var timer;
// 	var update;

// 	//添加按钮事件Ss
// 	for(var i = 0 ; i< change_a.length ; i ++){
// 		change_a[i].index = i;
// 		change_a[i].onclick = function () {

// 			clearInterval(timer);
// 			clearInterval(update);
// 			update = setInterval(autoChange,2000);
// 			start = parseInt(change_con.style.left);
// 			changes = (-this.index-1)*change.offsetWidth-start;
// 			tweenFn();
// 			change_index = this.index;
// 		}
// 	}

	// function tweenFn () {
	// 	t = 0;
	// 	endT = 60;
	// 	timer = setInterval(function () {
	// 		t++;
	// 		if(t>endT){
	// 			clearInterval(timer);
	// 			return;
	// 		}
	// 		var n = Tween.Quad.easeOut(t,start,changes,endT);
	// 		change_con.style.left = n + "px";
	// 	},15)
	// }

	// update = setInterval(autoChange,2000);
	// function autoChange () {
	// 	console.log("开启定时器");
	// 	change_index = change_index+1>4?1:change_index+1;
	// 	if(change_index == 1)
	// 		change_con.style.left = 0 + "px";
	// 	start = parseInt(change_con.style.left);
	// 	changes = -change_index*change.offsetWidth-start;
	// 	tweenFn();
	// }


// }



//初始化
function init () {

	conHeight = [0,0,0,0];
	change_index=1;
	// change_con.style.left = -change_index*change.offsetWidth + "px";


	mainbody_con.style.width =  parseInt(mainbody.offsetWidth/4 )*4 + "px";
	//内容瀑布流
	for(var i = 0 ; i < 17 ; i ++){
		var str = "img/Drawing/("+(i+1)+").jpg";
		addImg(str);
	}

	topbutton.onclick = function () {
		if(!+[1,]){
			document.documentElement.scrollTop = 0;
		}else{
			goTop();
		}
	}

	function goTop () {
		var start = document.body.scrollTop||document.documentElement.scrollTop;
		var change = -start;
		var t = 0;
		var endT = 60;
		var timer = setInterval(function () {
			t++;
			if(t>endT){
				clearInterval(timer);
				return;
			}
			var n = Tween.Quad.easeIn(t,start,change,endT);
			document.body.scrollTop = n ;
	},15)
	}

	
}


//为瀑布流部分添加图片
function addImg (str) {
	var pin = document.createElement('div');
	pin.className = "pin";
	var box = document.createElement('div');
	box.className = "box";
	pin.appendChild(box);

	var img = document.createElement('img');
	box.appendChild(img);
	mainbody_con.appendChild(pin);

	img.onload = function () {
		paiban(pin);
	}
	img.src = str;
	
}
//排版
function paiban (obj) {
	// var k = obj.offsetHeight/obj.offsetWidth;
	var width = (mainbody_con.offsetWidth/4-(mainbody_con.children[0].offsetWidth-mainbody_con.children[0].children[0].offsetWidth));
	// var height = width*k;
	obj.style.width = width +"px";
	// obj.style.height = height + "px";
	if(conHeight[minHeight()]==0){
		obj.style.left = minHeight()*obj.offsetWidth + "px";
		obj.style.top = 0 + "px";

		var width = (mainbody_con.offsetWidth/2-(mainbody_con.children[0].offsetWidth-mainbody_con.children[0].children[0].offsetWidth));
		// var height = width*k;
		obj.style.width = width +"px";
		// obj.style.height = height + "px";

		conHeight[minHeight()] += obj.offsetHeight;
		conHeight[minHeight()] += obj.offsetHeight;
	}else{
		obj.style.left = minHeight()*obj.offsetWidth + "px";
		obj.style.top = conHeight[minHeight()] + "px";
		conHeight[minHeight()] += obj.offsetHeight;
	}
	mainbody_con.style.height = conHeight[maxHeight()] + "px";
	obj.style.opacity = 1;
}
function minHeight () {
	var k = 0 ;
	for(var i = 1 ; i < 4 ; i++){
		if(conHeight[k]>conHeight[i]){
			k = i;
		}
	}
	return k;
}
function maxHeight () {
	var k = 0 ;
	for(var i = 1 ; i < 4 ; i++){
		if(conHeight[k]<conHeight[i]){
			k = i;
		}
	}
	return k;
}