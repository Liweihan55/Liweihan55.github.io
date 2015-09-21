window.onload = function () {

	var textarea = document.getElementById('textarea');
	var inp = document.getElementById('inp');
	var context = document.getElementById('context');
	var userNameInp = document.getElementById('userNameInp')

	inp.onclick = function () {
		if (textarea.value != "" && userNameInp.value != "") {
			if(userNameInp.value.length>=8){
				alert("姓名最多为八位数！");
				return;
			}
			// 创建留言框
			var userDiv = document.createElement('div');
			userDiv.className = "userDiv";

			var userDl = document.createElement('dl');
			userDl.className = "userDl";
			userDiv.appendChild(userDl);
			// 创建头像
			var userDt = document.createElement('dt');
			userDl.appendChild(userDt);
			userDt.className = "userDt";
			var userImg = document.createElement('img');
			userImg.src = "img/1.jpg"
			userImg.className = "userImg";
			userDt.appendChild(userImg);
			// 创建内容
			var userDd = document.createElement('dd');
			userDl.appendChild(userDd);
			userDd.className = "userDd";
			//用户
			var userNameText = document.createTextNode(userNameInp.value);
			var userName = document.createElement('a');
			userName.className = "userName";
			userName.appendChild(userNameText);
			userName.href = "###";
			userDd.appendChild(userName);
			//内容
			var userPtext = document.createTextNode(textarea.value);
			var userP = document.createElement('p');
			userP.className = "userP";
			userP.appendChild(userPtext);
			userDd.appendChild(userP);
			//时间
			var time = new Date();
			var str_T = "";
			str_T += time.getFullYear() + "年";
			str_T += time.getMonth()+1 + "月";
			str_T += time.getDay() + "日 ";
			str_T += time.getHours() + ":";
			str_T += time.getMinutes();
			var userTtext = document.createTextNode(str_T);
			var userT = document.createElement('p');
			userT.className = "userT"
			userT.appendChild(userTtext);
			//删除按钮
			var remove = document.createElement('a');
			remove.className = "remove";
			remove.href = "###";
			remove.innerHTML = "删除";
			remove.onclick = function () {
				var mymessage =confirm("确定删除？");
				if(mymessage == true){
					tweenOut(userDiv,userDiv.offsetHeight);
					setTimeout(function(){
						context.removeChild(userDiv);
					}, 800);
				
				}
			}

			userT.appendChild(remove);
			userDd.appendChild(userT);


			textarea.value = "";	
			userNameInp.value = "";



			if(context.childNodes.length>0){
				context.insertBefore(userDiv,context.childNodes[0]);
				
			}else{
				context.appendChild(userDiv);
			}

			var uHeight = userDiv.offsetHeight;
			userDiv.style.height = 0 + 'px';

			//添加加入效果
			tweenIn(userDiv,uHeight);
			
			function tweenIn (obj,uHeight) {
				var start = 0;
				var change = uHeight;
				var t = 0;
				var endT = 60;
				var timer = setInterval(function () {
					t++;
					if(t>endT){
					   clearInterval(timer);
					   return;
					}
					var n = Tween.Bounce.easeOut(t,start,change,endT);
					obj.style.height = n + "px";
				},15)
			}
			function tweenOut (obj,uHeight) {
				var start = uHeight;
				var change = -uHeight;
				var t = 0;
				var endT = 60;
				var timer = setInterval(function () {
					t++;
					if(t>endT){
					   clearInterval(timer);
					   return;
					}
					var n = Tween.Bounce.easeOut(t,start,change,endT);
					obj.style.height = n + "px";
				},15)
			}


		}
	}

	setInterval(obj,100);
	function obj () {
		if(textarea.value == "" || userNameInp.value == "" ){
			inp.className = "inputNoFont";
		}else{
			inp.className = "inputFont";
		}
	}

}

