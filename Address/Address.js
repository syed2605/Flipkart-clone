addressDisplay()
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
var info=JSON.parse(localStorage.getItem("logininfo"))||[]
function addressDisplay(){

  var useraddressArr= JSON.parse(localStorage.getItem('useraddArr'))||[];
  // useraddressArr=[
  //     {
    
  //         userName: "John Abraham",
  //         userAddress: "Madhurangar,Kobbarithota,Vijayawada",
  //         userPin: "520011",
  //         userSpecialAdd: "HOME",
  //     },
  //     {
  //         userName: "John Abraham",
  //         userAddress: "Madhurangar,Kobbarithota,Vijayawada",
  //         userPin: "565821",
  //         userSpecialAdd: "OFFICE",
  //     }
  // ];
  if (useraddressArr.length > 0)
  {
      let addressDiv=document.getElementById("cart-b1-b");
      addressDiv.innerHTML=``;
      let {username,mobile,pin,local,adress,town,state,userSpecialAdd} = useraddressArr[0];
      let x=`<div id="cart-b1-b1">
                  <div id="c-ad-input">
                      <p>Deliver to:</p>
                      <p id="c-user-name">${username} ,<span id="c-user-mobile"> ${mobile}</span></p>
                      <p id="c-user-add-spec">${userSpecialAdd}</p>
                  </div>
                  <div id="c-user-adress-door">
                      <p>${adress},${local},${town},${state}-${pin}</p>
                  </div>
              </div>
              <div id="cart-b1-b2">
                  <button id="Deliver_btn" onClick="displaypay()">Deliver Here</button>
              </div>`;
      addressDiv.innerHTML +=x;
      
      
  }
  else{
      let addressDiv=document.getElementById("cart-b1-b");
      // addressDiv.innerHTML=``;
          let x=`<div id="cart-b1-b1">
          <div id="c-ad-input">
            <p style="font-size: 15px">Please add your delivery details:</p>
          </div>
          <div id="c-user-adress-door">
            <div class="in-two">
              <input type="text" placeholder="Name" id="usern" />
              <input type="text" placeholder="Mobile Number" id="mobilen" />
            </div>
            <div class="in-two">
              <input type="text" placeholder="Pincode" id="pin" />
              <input type="text" placeholder="Locality" id="local" />
            </div>
            <div class="in-one">
              <textarea
                name="addressLine1"
                rows="4"
                cols="10"
                tabindex="5"
                id="adress"
              ></textarea>
            </div>
            <div class="in-two">
              <input
                type="text"
                placeholder="City/District/Town"
                id="town"
              />
              <input type="text" placeholder="State" id="state" />
            </div>
            <div class="rad">
              <input
                type="radio"
                id="Work"
                name="notaswitch-one"
                value="yes"
                checked
              />
              <label for="radio-six">Work (Delivery between 10 AM - 5 PM)</label>
              <input
                type="radio"
                id="Home"
                name="notaswitch-one"
                value="maybe"
              />
              <label for="radio-seven">Home (All day delivery)</label>
            </div>
          </div>
          <div id="cart-b1-b2">
            <button id="addadr" onClick="addadr()">Add Address</button>
          </div>
        </div>`;
      addressDiv.innerHTML +=x;
  }

}
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  } // Show the current tab, and add an "active" class to the link that opened the tab

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("firsttab").click();




// payment page form validation 
var cardnumberInput = document.querySelector("#cardnumber");
var cvvInput = document.querySelector(".cvv-input");
var monthInput = document.querySelector(".month-input");

// var monthCvv = document.querySelector("#expdate").value;
// var cvv = document.querySelector("#input-cvv").value;

cardnumberInput.addEventListener("keyup", function (){
  let cardnumber = cardnumberInput.value;
  let cardWarning = document.querySelector(".cardnumber-warning");
  
  
  if (!cardnumber || cardnumber.length != 12){
    cardWarning.classList.remove("hide");
  }
  
  if (cardnumber && cardnumber.length == 12){
    cardWarning.classList.add("hide");
  }
})
monthInput.addEventListener("keyup", function (){
  let month = monthInput.value;
  let monthWarning = document.querySelector("#month-warning");
  console.log(month);
  console.log(monthWarning);
  if (!month || month.length != 5){
    monthWarning.classList.remove("hide1");
    // console.log(month);
  }else{
    monthWarning.classList.add("hide1");
  }


})

cvvInput.addEventListener("keyup", function (){
  let cvv = cvvInput.value;
  let cvvWarn = document.querySelector("#cvv-warning");
  console.log(cvv);
  if (!cvv || cvv.length != 3){
    cvvWarn.classList.remove("hide2");
    // console.log(month);
  }else{
    cvvWarn.classList.add("hide2");
  }


})

function addadr()
{
    console.log("gg")
    var username=document.getElementById("usern").value
    var mobile=document.getElementById("mobilen").value
    var pin=document.getElementById("pin").value
    var local=document.getElementById("local").value
    var adress=document.getElementById("adress").value
    var town=document.getElementById("town").value
    var state=document.getElementById("state").value
    var userSpecialAdd="work";
    var obj={username:username,
    mobile:mobile,
    pin:pin,
    local:local,
    adress:adress,
    town:town,
    state:state,
    userSpecialAdd:userSpecialAdd}
    var rasta=JSON.parse(localStorage.getItem("useraddArr"))||[]
    rasta.push(obj)
    localStorage.setItem("useraddArr",JSON.stringify(rasta));
    cdx=true;
    addressDisplay()
  
  }


  function displaypay()
  {
    var k=document.querySelectorAll(".hidd")
    for (var i = 0; i < k.length; i++) {
      k[i].style.display = "block";
    }
  }


  var cartArr = JSON.parse(localStorage.getItem('cartArray'))||[];
  var orderPriceObj=JSON.parse(localStorage.getItem('orderPrice'))||[];
  // orderPriceObj=[{itemsDisPrice:"-₹27,000",
  //   itemsNo
  //   : 
  //   "3",
  //   itemsPayPrice
  //   : 
  //   "₹42,900",
  //   itemsPrice
  //   : 
  //   "₹70,000",
  //   itemsSavePrice
  //   : 
  //   "₹27,100"}];
  console.log((orderPriceObj)+" orderPricevbsihdvbsidvb");
  let {itemsNo,itemsPrice,itemsDisPrice,itemsPayPrice,itemsSavePrice} = orderPriceObj[0];



   document.getElementById("c2-price-no").textContent=itemsNo;
  document.getElementById("c2-price").textContent=itemsPrice;
 document.getElementById("c2-dis-price").textContent=itemsDisPrice;
    document.getElementById("c2-tot-price").textContent=itemsPayPrice;
  document.getElementById("c2-save").textContent =  itemsSavePrice;

  function redirect()
  {
    alert("Order Successfully Placed")
    location.href="/index.html"
  }