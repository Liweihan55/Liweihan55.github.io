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
			var userDl = document.createElement('dl');
			userDl.className = "userDl";
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
			var userNameText = document.createTextNode(userNameInp.value);
			var userName = document.createElement('a');
			userName.className = "userName";
			userName.appendChild(userNameText);
			userName.href = "###";
			userDd.appendChild(userName);

			var userPtext = document.createTextNode(textarea.value);
			var userP = document.createElement('p');
			userP.className = "userP";
			userP.appendChild(userPtext);
			userDd.appendChild(userP);

			textarea.value = "";	
			userNameInp.value = "";

			if(context.childNodes.length>0){
				context.insertBefore(userDl,context.childNodes[0]);
			}else{
				context.appendChild(userDl);
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

