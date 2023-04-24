
// 要操作的元素
const container=document.querySelector('.container');
const btn_login=document.querySelector('.btn-login');
const btn_reg=document.querySelector('.btn-reg');
const reg=document.querySelector('.reg');
reg.addEventListener('click',function(){
    const form=document.querySelector('.form')
    form.style.display='none'
    const regwin=document.querySelector('.regwin')
    regwin.style.display='flex'
})

btn_login.addEventListener('click',function(){
    // container.classList.add('success');
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(!username||!password){
        Toast("用户名和密码均不能为空",2000)
        return;
    }
    if(password.length<6||password.length>10){
        Toast("请输入6到10位的密码",2000)
        return;
    }
    login(username,password);
})
btn_reg.addEventListener('click',function(){
    console.log(111);
    //空值判断
    var username=document.getElementById('reg_user').value;
    var password=document.getElementById('reg_password').value;
    var school=document.getElementById('reg_school').value;
    var major=document.getElementById('reg_major').value;
     if(!username||!password||!school||!major){
         Toast("信息不能为空")
         return;
    }
    if(password.length<6||password.length>10){
        Toast("请输入6到10位的密码",2000)
        return;
    }
    reguser(username,password,school,major);
})
function reguser(name,pwd,sc,mj) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://127.0.0.1:80/api/reguser", true);
    // xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.onreadystatechange = function() {
        if(this.readyState==4&&this.status == 200){
            const res=JSON.parse(this.response) 
            if(res.status==0){
                Toast("注册成功")
                //注册成功后返回登录界面
                const form=document.querySelector('.form')
                form.style.display='flex'
                const regwin=document.querySelector('.regwin')
                regwin.style.display='none'
            }
            else if(res.status==1){
                if(res.message="用户名被占用，请更换其它用户名"){
                    Toast("用户名已存在")
                }
                else if(res.message="注册失败"){
                    Toast("注册失败，请稍后再试")
                }
            }
         }
    };
    const params={
        username:name,
        password:pwd,
        school:sc,
        major:mj
    }
    xhttp.send(JSON.stringify(params));
}

function login(name,pwd) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://127.0.0.1/api/login", true);
    // xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.onreadystatechange = function() {
    if(this.readyState==4&&this.status == 200){
        const res=JSON.parse(this.response) 
        if(res.status==0){
            Toast("登录成功，即将跳转页面")
            localStorage.setItem("token", res.token);
            window.location = "demo.html"
        }
        else if(res.status==1){
            if(res.message="用户密码错误"){
                Toast("密码错误，请重新确认")
            }
            else if(res.message="该用户不存在"){
                Toast("用户不存在，请确认您已注册")
            }
        }
     }
    };
    const params={
        username:name,
        password:pwd
    }
    xhttp.send(JSON.stringify(params));
  }
//弹窗功能
  function Toast(msg,duration){
    duration=isNaN(duration)?3000:duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText="max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 9999999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
    document.body.appendChild(m);
    setTimeout(function() {
      var d = 0.5;
      m.style.opacity = '0';
      setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, duration);
  }