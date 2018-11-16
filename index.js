var modal = document.getElementById('box');
 

var username = document.getElementById('username');
var password = document.getElementById('password');
// 当用户点击该模态框外任意区域，关闭此模块
window.onclick = function(event) {
    if (event.target == modal) {

        modal.style.display = "none";
        username.value = "";
        password.value = "";
    }
}

function fal(){
    getInputContent();
    return false;
}
//获取三个输入框内容
function getInputContent(){
    
    console.log("getInputContent");
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var code = document.getElementById("code").value;
    judgeEmpty(username,password,code);
    
}
//判断是否为空
function judgeEmpty(username,password,code){
    console.log("judgeEmpty");
    //如果账号为空...
    if(username == "")
    {
        return false;
    }
    //如果密码为空...
    if(password == "")
    {
        return false;
    }
    //如果验证码为空....
    if(code == "")
    {
        return false;
    }

    dataSend(username,password,code);
}
function dataSend(username,password,code){
   console.log("dataSend")
    $.ajax({
       url:'http://tech.sky31.top/login.php',
        method:'POST',
        dataType:'json',
        data:{
            username:username,
            password:password,
            code:code,
        },
        success:function(data)
        {
            console.log(data);
            if(data.code == 0)
                alert(data.msg);
            if(data.code == 1)
                alert(data.msg);
            if(data.code == 2)
                alert(data.msg);
            if(data.code == 3)
                alert(data.msg);
        },
        error:function(){
            console.log("error");
        }
    })
}
function imgchange() {
    let Randomcode = Math.random();
    var code = document.getElementById("imgcode");
    code.src="http://tech.sky31.top/code.php?a=" + Randomcode;
}

