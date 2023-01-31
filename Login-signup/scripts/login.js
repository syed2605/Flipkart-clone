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
document.querySelector("form").addEventListener("submit",check)
function check()
{
    console.log("gg")
    event.preventDefault();
    var emailornum=document.getElementById("emailornumber").value;
    var pass=document.getElementById("password").value;
    var arr=JSON.parse(localStorage.getItem("logininfo"))||[];
    arr.map(function(elem)
    {
        if((elem.email==emailornum || elem.number==emailornum) && elem.pass==pass)
        {
            alert("Login Successfull");
            window.location.href = "index.html";
        }
        else
        {
            alert("wrong credentials")
        }
    })

}