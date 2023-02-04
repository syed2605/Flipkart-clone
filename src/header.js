function toggle() {
    const down = document.getElementById("down");
    const up = document.getElementById("up");
    const moreShow=document.getElementById("more-show");
    const moreArrow=document.getElementById("more-arrow");
    if (down.style.display === "none") {
      down.style.display = "inline";
      up.style.display = "none";
      moreShow.style.display = "none";
      moreArrow.style.display = "none";
    } else {
      down.style.display = "none";
      up.style.display = "inline";
      moreShow.style.display = "block";
      moreArrow.style.display = "inline";
    }

  }
  
  const more = document.getElementById("more");
  more.addEventListener("mouseenter", toggle);
  more.addEventListener("mouseleave", toggle);


  const loggedIn= JSON.parse(localStorage.getItem("loggedIn"))||true;
  if (loggedIn==true)
  {
      var logInBox = document.getElementById("Login-box");
      logInBox.innerHTML = "";
      let x=`<div id="login" style="background-color: #2874f0;color:#fff;padding: 6px 10px;">
              <a id="n-userName" href="#"  style="color:#fff";>Mohammad
                  <i id="down1" class="fa-solid fa-chevron-down fa-2xs"></i>
                  <i id="up1" class="fa-sharp fa-solid fa-chevron-up fa-2xs" style="display: none;"></i>
                  
                  <i class="fa-solid fa-caret-up fa-2xl" id="more-arrow1" style="display: none;"></i>
                  <div id="more-show1" style="display: none;">
                      <div><p><i id="more-i" class="fa-solid fa-user" style="color: #2874f0"></i> My Profile</p></div>
                      <div><p><i id="more-i" class="fa-solid fa-coins" style="color: #2874f0"></i> SuperCoin Zone</p></div>
                      <div><p><i id="more-i" class="fa-solid fa-plus fa-xl" style="color: #2874f0"></i> FlipkartPlus Zone</p></div>
                      <div><p><i id="more-i" class="fa-solid fa-book-bookmark" style="color: #2874f0"></i> Orders</p></div>
                      <div><p><i id="more-i" class="fa-solid fa-heart" style="color: #2874f0"></i> Wishlist</p></div>
                      <div><p><i id="more-i" class="fa-solid fa-receipt" style="color: #2874f0"></i> Coupons</p></div>
                      <div><p><i id="more-i" class="fa-solid fa-gift" style="color: #2874f0"></i> Gift Cards</p></div>
                      <div><p><i id="more-i" class="fa-solid fa-bell" style="color: #2874f0"></i> Notifications</p></div>
                      <div><p><i id="more-i" class="fa-solid fa-right-from-bracket" style="color: #2874f0"></i> Logout</p></div>
                  </div>
              </a>
          </div>`;
      logInBox.innerHTML +=x;
      const nLogIn = document.getElementById("login");
      nLogIn.addEventListener("mouseenter", userToggle);
      nLogIn.addEventListener("mouseleave", userToggle);
      function userToggle(){
          const down = document.getElementById("down1");
          const up = document.getElementById("up1");
          const moreShow = document.getElementById("more-show1");
          const moreArrow = document.getElementById("more-arrow1");
          if (down.style.display === "none") {
              down.style.display = "inline";
              up.style.display = "none";
              moreShow.style.display = "none";
              moreArrow.style.display = "none";
          } else {
              down.style.display = "none";
              up.style.display = "inline";
              moreShow.style.display = "block";
              moreArrow.style.display = "inline";
          }
      }
  }

  

  