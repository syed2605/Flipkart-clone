
document.getElementById("login").addEventListener("click", login);
function login()
{
    window.location.href="login.html"
}
document.getElementById("signup").addEventListener("click", signup);
function signup()
{
    window.location.href="signup.html"
}
document.querySelector("form").addEventListener("submit",addto)

function addto()
{
    event.preventDefault()
    var name= document.getElementById("name").value
    var number=document.getElementById("number").value
    var email=document.getElementById("email").value
    var pass=document.getElementById("password").value
    var obj=new logininfo(name,number,email,pass)
    var arr=JSON.parse(localStorage.getItem("logininfo"))||[]
    arr.push(obj)
    localStorage.setItem("logininfo", JSON.stringify(arr))
}
function logininfo(name,number,email,pass)
{
    this.name=name;
    this.number=number;
    this.email=email;
    this.pass=pass;
}