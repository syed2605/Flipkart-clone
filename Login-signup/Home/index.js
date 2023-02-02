var modal=document.getElementById("myModal");
var btn=document.getElementById("login");
var span=document.getElementsByClassName("close")[0];
btn.onclick=function()
{
    console.log("g")
    modal.style.display="block"
}
span.onclick=function()
{
    modal.style.display="none";
}
window.onclick=function(event)
{
    if(event.target==modal)
    {
        modal.style.display="none"
    }
}
document.querySelector("form").addEventListener("submit",check)
function check()
{
    console.log("gg")
    event.preventDefault();
    var emailornum=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
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