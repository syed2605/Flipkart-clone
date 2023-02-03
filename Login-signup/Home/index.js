displaylogin();
var modal = document.getElementById("myModal");
var btn = document.getElementById("login");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  console.log("g");
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.querySelector("form").addEventListener("submit", check);
function check() {
  console.log("gg");
  event.preventDefault();
  var emailornum = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var arr = JSON.parse(localStorage.getItem("logininfo")) || [];
  arr.map(function (elem) {
    if (
      (elem.email == emailornum || elem.number == emailornum) &&
      elem.pass == pass
    ) {
      alert("Login Successfull");
      window.location.href = "index.html";
    } else {
      alert("wrong credentials");
    }
  });
}
function displaylogin()
{
    var y=document.getElementById("col2-5")
    y.innerHTML=null
    y.innerHTML=` <span class="log">Login</span>
    <p class="logtext">Get access to your Orders, Wishlist and Recommendations</p>`
  var x = document.getElementById("col3-5");
  x.innerHTML = null;
  x.innerHTML = `<div id="from">
    <form>
        <span class="close">&times;</span>
        <label for="">Email or Number</label>
              <input type="text" name="" id="emailornumber">
              <label for="">Password</label>
              <input type="password" name="" id="password">
        <div id="legal">
            By continuing, you agree to Flipkart's
            <a href="https://www.flipkart.com/pages/terms">Terms of Use</a>
            and
            <a href="https://www.flipkart.com/pages/privacypolicy">Privacy Policy</a>
            .
        </div>
        <input type="submit" value="Submit" onClick="check()">
        <p>Not a Member?</p><span o onClick="displaysignup()">Sign-up</span>
    </form>
</div>`
}
function displaysignup()
{
    var y=document.getElementById("col2-5")
    y.innerHTML=null
    y.innerHTML=` <span class="log">Looks like you're new here!</span>
    <p class="logtext">Sign up with your email to get started</p>`
    var x = document.getElementById("col3-5");
  x.innerHTML = null;
  x.innerHTML = x.innerHTML = `<div id="from">
  <form>
      <span class="close">&times;</span>
                <label for="">Name</label>
                <input type="text" name="" id="name" required>
                <label for="">Mobile No.</label>
                <input type="number" name="" id="number" required>
                <label for="">Email ID</label>
                <input type="email" name="" id="email" required>
                <label for="">Password</label>
                <input type="password" name="" id="password" required>
      <div id="legal">
          By continuing, you agree to Flipkart's
          <a href="https://www.flipkart.com/pages/terms">Terms of Use</a>
          and
          <a href="https://www.flipkart.com/pages/privacypolicy">Privacy Policy</a>
          .
      </div>
      <input type="submit" value="Submit" onClick="addto()">
      <p>Already a Member?</p><span onClick="displaylogin()">Login</span>
  </form>
</div>`
}


function addto()
{
    event.preventDefault()
    var name= document.getElementById("name").value
    var number=document.getElementById("number").value
    var email=document.getElementById("email").value
    var pass=document.getElementById("password").value
    var obj=new logininfo(name,number,email,pass)
    console.log(obj)
    var arr=JSON.parse(localStorage.getItem("logininfo"))||[]
    arr.push(obj)
    localStorage.setItem("logininfo", JSON.stringify(arr))
    displaylogin()
}
function logininfo(name,number,email,pass)
{
    this.name=name;
    this.number=number;
    this.email=email;
    this.pass=pass;
}


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