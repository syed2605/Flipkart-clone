let ele = JSON.parse(localStorage.getItem("item"));
    function showImagesOnCart(el) {
      let smallImgContainer = document
        .querySelector(".small-img-container div:nth-child(1)>img")
        .setAttribute("src", ele.image1);
      let selectedImgContainer = document
        .querySelector(".small-img-container div:nth-child(1)>img")
        .classList.add("selected-img");
      document
        .querySelector(".small-img-container div:nth-child(2)>img")
        .setAttribute("src", ele.image);
      document.querySelectorAll(".small-img-container div img").forEach((el) => {
        el.addEventListener("mouseover", function (el) {
          document
            .querySelectorAll(".small-img-container div img")
            .forEach((el) => {
              el.classList.remove("selected-img");
              // console.log(document.querySelectorAll(".small-img-container div>img"));
            });
          el.target.classList.add("selected-img");
          //  console.log(document.querySelector(".target-img-container>img"));
          document
            .querySelector(".target-img-container>img")
            .setAttribute("src", el.target.src);
        });
      });
      // console.log(el.Image_URL);
      document.querySelector(".target-img-container").style.display = "block";
      document
        .querySelector(".target-img-container>img")
        .setAttribute("src", ele.image);
    }
    showImagesOnCart(ele);

// description
let div = document.getElementById("brief_info");

function displayBriefInfo() {
  // let div2 = document.createElement('div');
  //         div2.setAttribute('class','pro_detail');

  let brand = document.createElement("p");
  brand.textContent = ele.brand;
  brand.setAttribute("class", "brand");

  let title = document.createElement("p");
  title.textContent = ele.title;
  title.setAttribute("class", "title");

  let offer = document.createElement("p");
  offer.textContent = "Special Price";
  offer.setAttribute("class", "offer");

  let div3 = document.createElement("div");
  div3.setAttribute("class", "price_box");

  let price = document.createElement("p");
  price.textContent = "₹"+ele.strickedPrice;
  price.setAttribute("class", "price");

  let st_price = document.createElement("p");
  st_price.textContent = "₹"+ele.price;
  st_price.setAttribute("class", "st_price");

  let discount = document.createElement("p");
  discount.textContent = ele.discount;
  discount.setAttribute("class", "discount");

  let ii=document.createElement("i");
  ii.setAttribute("class","fa-solid fa-circle-info");
  ii.style.color="#cccccc";
  div3.append(price, st_price, discount,ii);

  let div4 = document.createElement("div");
    div4.className="ratingg";

    let x1=`<div class="starr">
    3.9
    <i class="fa-solid fa-star fa-xs"  ></i>
</div>`;
div4.innerHTML+=x1;

let dii = document.createElement("p");
dii.textContent = "3,422 ratings and 296 reviews";
dii.setAttribute("class", "dii");
div4.appendChild(dii);
  let img2 = document.createElement("img");
  img2.src =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
  img2.setAttribute("class", "logo");
  div4.appendChild(img2);

  div.append(brand, title, offer, div3,div4);
}
displayBriefInfo();

let details = document.getElementById("product-detail");
console.log(details);
function productDetails() {
  let div = document.createElement("div");
  div.innerHTML += `<div><h3>Style Code</h3><p>${ele.StyleCode}</p></div>
    <div><h3>Pattern</h3><p>${ele.Pattern}</p></div>
    <div><h3>Pack of</h3><p>${ele.Packof}</p></div>
    <div><h3>Occasion</h3><p>${ele.Occasion}</p></div>
    <div><h3>Fabric Care</h3><p>${ele.FabricCare}</p></div>
    <div><h3>Fabric </h3><p>${ele.TypeofEmbroidery}</p></div>
    <div><h3>Blouse Piece </h3><p>${ele.BlousePiece}</p></div>
    <div><h3>Color</h3><p>${ele.color}</p></div>
    
    `;
  let desc = document.createElement("p");
  desc.id = "desc";
  desc.textContent =
    "This is our most beautiful saree for the most beautiful women. Wearing saree is a time consuming process, so here we are presenting ready pleated saree for you. Save you time with our ready pleated saree and enjoy our classical- contemporary twist. It is no longer subjected to wear as a traditional occasion but also for evenings for both millennials and older generations. Wander like a gypsy soul in this enchanting saree with solid and soft - smooth material that will let you breathe in your garden of glam. Get a minimal yet gorgeous look with these flowy drapes, elegantly dropping from the waist to make you all time perfect";

  details.append(div, desc);
  return details;
}

let cartArray = JSON.parse(localStorage.getItem('cartArray')) || [];
    let addToCart = document.getElementById("addToCart");
    addToCart.addEventListener("click", function () {
      cartArray.push(ele);
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
      // location.href = "./cartPage.html";
    });

    let wishListArray = JSON.parse(localStorage.getItem('saveItemArray')) || [];
    let addToWishList = document.getElementById("byNow");
    addToWishList.addEventListener("click", function () {
      wishListArray.push(ele);
      localStorage.setItem("saveItemArray", JSON.stringify(wishListArray));
      // location.href = "./cartPage.html";
    });

    countDown();
    function countDown() {
      let hour = document.getElementById("hours").textContent;
      let minute = document.getElementById("minutes").textContent;
      let second = document.getElementById("seconds").textContent;

      // console.log(hour, typeof(minute), typeof(second));

      let id = setInterval(function () {
        if (second == 0) {
          second = 60;
          minutes = Number(document.getElementById("minutes").textContent);
          minutes--;
          document.getElementById("minutes").textContent = null;
          document.getElementById("minutes").textContent = minutes;
        }
        if (Number(document.getElementById("minutes").textContent == 0)) {
          document.getElementById("minutes").textContent = 60;
          hours = Number(document.getElementById("hours").textContent);
          hours--;
          document.getElementById("hours").textContent = null;
          document.getElementById("hours").textContent = hours;
        }
        document.getElementById("seconds").textContent = null;
        document.getElementById("seconds").textContent = second;
        second--;
      }, 1000);
    }
    countDown();

    async function fetchData() {
      let res = await fetch("../json/sarees1.json");
      let data = await res.json();
      console.log(data);
      displaySlider(data);
    }
    fetchData();

    let slider = document.getElementById("collection");

    function displaySlider(data) {
      slider.innerHTML = null;
      data.forEach((ele, ind) => {
        if (ind < 5) {
          let div = document.createElement("div");
          div.setAttribute("class", "card");

          let div1 = document.createElement("div");
          div1.setAttribute("class", "img_div");

          let img1 = document.createElement("img");
          img1.src = ele.image;
          img1.setAttribute("class", "image");

          let imageArray = [];
          imageArray.push(ele.image);
          imageArray.push(ele.image1);

          img1.addEventListener("mouseover", function () {
            // console.log(ele);
            var i = 0;
            let id = setInterval(function () {
              if (i == imageArray.length) {
                i = 0;
              }
              div1.innerHTML = null;

               img1 = document.createElement("img");
              img1.src = imageArray[i];
              img1.style.height="200px";
            //   img1.setAttribute("class", "image");
              div1.append(img1);
              i++;
            }, 1500);
          });
          img1.addEventListener("mouseout", function () {
            console.log(id);
            clearInterval(id);
          });

          img1.addEventListener("click", function () {
            localStorage.setItem("item", JSON.stringify(ele));
            location.href = "./pd.html";
            console.log(ele);
          });

          div1.append(img1);

          let div2 = document.createElement("div");
          div2.setAttribute("class", "pro_detail");

          let brand = document.createElement("h3");
          brand.textContent = ele.brand;
          brand.setAttribute("class", "brand");


          let div22 = document.createElement("div");
          div22.setAttribute("class", "ttimg");


          let title = document.createElement("p");
          title.textContent = ele.title;
          title.setAttribute("class", "title1");

          let img2 = document.createElement("img");
          img2.src =
            "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
          img2.setAttribute("class", "logo");

          let div3 = document.createElement("div");
          div3.setAttribute("class", "price_box");

        //   console.log(ele);
        //   console.log(ele.strickedPrice);
          let price = document.createElement("p");
          price.textContent = "₹" + ele.strickedPrice;
          price.setAttribute("class", "price1");

          let st_price = document.createElement("p");
          st_price.textContent = "₹" + ele.price;
          st_price.setAttribute("class", "st_price1");

          let discount = document.createElement("p");
          discount.textContent = ele.discount;
          discount.setAttribute("class", "discount1");

          div3.append(price, st_price, discount);

          let delivery = document.createElement("h2");
          delivery.textContent = "Free Delivery";
          delivery.setAttribute("class", "delivery");
          div22.append(brand,img2)
          div2.append( div22,title, div3);

          div.append(div1, div2, delivery);
          slider.append(div);
        }
      });
    }

    

    async function fetchData2() {
      let res = await fetch("./json/Kids.json");
      let data = await res.json();
      console.log(data);
      displaySlider2(data);
    }
    fetchData2();

    let slider2 = document.getElementById("collection2");

    function displaySlider2(data) {
      slider2.innerHTML = null;
      data.forEach((ele, ind) => {
        if (ind < 5) {
          let div = document.createElement("div");
          div.setAttribute("class", "card");

          let div1 = document.createElement("div");
          div1.setAttribute("class", "img_div");

          let img1 = document.createElement("img");
          img1.src = ele.image;
          img1.setAttribute("class", "image");

          let imageArray = [];
          imageArray.push(ele.image);
          imageArray.push(ele.image1);

          img1.addEventListener("mouseover", function () {
            // console.log(ele);
            var i = 0;
            let id = setInterval(function () {
              if (i == imageArray.length) {
                i = 0;
              }
              div1.innerHTML = null;

               img1 = document.createElement("img");
              img1.src = imageArray[i];
              img1.style.height="200px";
            //   img1.setAttribute("class", "image");
              div1.append(img1);
              i++;
            }, 1500);
          });
          img1.addEventListener("mouseout", function () {
            console.log(id);
            clearInterval(id);
          });

          img1.addEventListener("click", function () {
            localStorage.setItem("item", JSON.stringify(ele));
            location.href = "./pd.html";
            console.log(ele);
          });

          div1.append(img1);

          let div2 = document.createElement("div");
          div2.setAttribute("class", "pro_detail");

          let brand = document.createElement("h3");
          brand.textContent = ele.brand;
          brand.setAttribute("class", "brand");


          let div22 = document.createElement("div");
          div22.setAttribute("class", "ttimg");


          let title = document.createElement("p");
          title.textContent = ele.title;
          title.setAttribute("class", "title1");

          let img2 = document.createElement("img");
          img2.src =
            "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
          img2.setAttribute("class", "logo");

          let div3 = document.createElement("div");
          div3.setAttribute("class", "price_box");

        //   console.log(ele);
        //   console.log(ele.strickedPrice);
          let price = document.createElement("p");
          price.textContent = "₹" + ele.strickedPrice;
          price.setAttribute("class", "price1");

          let st_price = document.createElement("p");
          st_price.textContent = "₹" + ele.price;
          st_price.setAttribute("class", "st_price1");

          let discount = document.createElement("p");
          discount.textContent = ele.discount;
          discount.setAttribute("class", "discount1");

          div3.append(price, st_price, discount);

          let delivery = document.createElement("h2");
          delivery.textContent = "Free Delivery";
          delivery.setAttribute("class", "delivery");
          div22.append(brand,img2)
          div2.append( div22,title, div3);

          div.append(div1, div2, delivery);
          slider2.append(div);
        }
      });
    }

    // // let product_details = document.getElementById("product_details");
    // // console.log(product_details);

    // function myFunction() {
    //     let first_div = document.getElementById('first-div');
    //     let info_section = document.getElementById('info_section');
    //   var w = window.outerWidth;
    //   var h = window.outerHeight;
    //   console.log(h);
    //   if (h>1600) first_div.style.position="absolute";
    //   var txt = "Window size: width=" + w + ", height=" + h;
    //   document.getElementById("product_details").append(first_div,info_section)
    // }
    // myFunction();




    async function fetchData1() {
      let res = await fetch("./json/Ethnics.json");
      let data = await res.json();
      console.log(data);
      displaySlider1(data);
    }
    fetchData1();

    let slider1 = document.getElementById("collection1");

    function displaySlider1(data) {
      slider1.innerHTML = null;
      data.forEach((ele, ind) => {
        if (ind < 5) {
          let div = document.createElement("div");
          div.setAttribute("class", "card");

          let div1 = document.createElement("div");
          div1.setAttribute("class", "img_div");

          let img1 = document.createElement("img");
          img1.src = ele.image;
          img1.setAttribute("class", "image");

          let imageArray = [];
          imageArray.push(ele.image);
          imageArray.push(ele.image1);

          img1.addEventListener("mouseover", function () {
            // console.log(ele);
            var i = 0;
            let id = setInterval(function () {
              if (i == imageArray.length) {
                i = 0;
              }
              div1.innerHTML = null;

               img1 = document.createElement("img");
              img1.src = imageArray[i];
              img1.style.height="200px";
            //   img1.setAttribute("class", "image");
              div1.append(img1);
              i++;
            }, 1500);
          });
          img1.addEventListener("mouseout", function () {
            console.log(id);
            clearInterval(id);
          });

          img1.addEventListener("click", function () {
            localStorage.setItem("item", JSON.stringify(ele));
            location.href = "./pd.html";
            console.log(ele);
          });

          div1.append(img1);

          let div2 = document.createElement("div");
          div2.setAttribute("class", "pro_detail");

          let brand = document.createElement("h3");
          brand.textContent = ele.brand;
          brand.setAttribute("class", "brand");


          let div22 = document.createElement("div");
          div22.setAttribute("class", "ttimg");


          let title = document.createElement("p");
          title.textContent = ele.title;
          title.setAttribute("class", "title1");

          let img2 = document.createElement("img");
          img2.src =
            "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
          img2.setAttribute("class", "logo");

          let div3 = document.createElement("div");
          div3.setAttribute("class", "price_box");

        //   console.log(ele);
        //   console.log(ele.strickedPrice);
          let price = document.createElement("p");
          price.textContent = "₹" + ele.strickedPrice;
          price.setAttribute("class", "price1");

          let st_price = document.createElement("p");
          st_price.textContent = "₹" + ele.price;
          st_price.setAttribute("class", "st_price1");

          let discount = document.createElement("p");
          discount.textContent = ele.discount;
          discount.setAttribute("class", "discount1");

          div3.append(price, st_price, discount);

          let delivery = document.createElement("h2");
          delivery.textContent = "Free Delivery";
          delivery.setAttribute("class", "delivery");
          div22.append(brand,img2)
          div2.append( div22,title, div3);

          div.append(div1, div2, delivery);
          slider1.append(div);
        }
      });
    }


    const loggedIn= JSON.parse(localStorage.getItem("loggedIn"))||true;
var arr=JSON.parse(localStorage.getItem("logininfo"))||[];
var xxl=arr[0].name;
logging(xxl)
    function logging(name){
        if (loggedIn==true)
    {
        var logInBox = document.getElementById("Login-box");
        logInBox.innerHTML = "";
        let x=`<div id="login" style="background-color: #2874f0;color:#fff;padding: 6px 10px;">
                <a id="n-userName" href="#"  style="color:#fff";>${name}
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
                moreShow.style.zIndex="10";
            }
        }
    }
    }


   