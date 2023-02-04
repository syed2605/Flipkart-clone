var cartArr = JSON.parse(localStorage.getItem('cartArray'))||[];
// console.log(cartArr);
// var cartArr=[
//     {
//         image: "https://rukminim1.flixcart.com/image/224/224/kuwzssw0/computer/x/l/a/redmibook-15-pro-thin-and-light-laptop-redmi-original-imag7xhnakyazyma.jpeg?q=90",
//         title: "Redmi pro i5 11th gen- sdchcbkck  idci  sdci chsdu cho sdddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
//         spec: "15.6 inch, Charcoal Gray, 1.8 kg, With MS Office",
//         strickedPrice: "50,000",
//         price: "30,000",
//         discount:"33%",
//     },
//     {
//         image: "https://rukminim1.flixcart.com/image/224/224/kuwzssw0/computer/x/l/a/redmibook-15-pro-thin-and-light-laptop-redmi-original-imag7xhnakyazyma.jpeg?q=90",
//         title: "Redmi pro i5 11th gen- sdchcbkck  idci  sdci chsdu cho sdddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
//         spec: "15.6 inch, Charcoal Gray, 1.8 kg, With MS Office",
//         strickedPrice: "15,000",
//         price: "10,000",
//         discount:"33%",
//     },
//     {
//         image: "https://rukminim1.flixcart.com/image/224/224/kuwzssw0/computer/x/l/a/redmibook-15-pro-thin-and-light-laptop-redmi-original-imag7xhnakyazyma.jpeg?q=90",
//         title: "Redmi pro i5 11th gen- sdchcbkck  idci  sdci chsdu cho sdddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
//         spec: "15.6 inch, Charcoal Gray, 1.8 kg, With MS Office",
//         strickedPrice: "5,000",
//         price: "3,000",
//         discount:"33%",
//     },
// ]
// var saveArr=[
//     {
//         image: "https://rukminim1.flixcart.com/image/224/224/kuwzssw0/computer/x/l/a/redmibook-15-pro-thin-and-light-laptop-redmi-original-imag7xhnakyazyma.jpeg?q=90",
//         title: "Redmi pro i5 11th gen- sdchcbkck  idci  sdci chsdu cho sdddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
//         spec: "15.6 inch, Charcoal Gray, 1.8 kg, With MS Office",
//         strickedPrice: "50,000",
//         price: "30,000",
//         discount:"33%",
//     },
//     {
//         image: "https://rukminim1.flixcart.com/image/224/224/kuwzssw0/computer/x/l/a/redmibook-15-pro-thin-and-light-laptop-redmi-original-imag7xhnakyazyma.jpeg?q=90",
//         title: "Redmi pro i5 11th gen- sdchcbkck  idci  sdci chsdu cho sdddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
//         spec: "15.6 inch, Charcoal Gray, 1.8 kg, With MS Office",
//         strickedPrice: "15,000",
//         price: "10,000",
//         discount:"33%",
//     },
// ]



checkCartArr(cartArr);

function emptydata(){
    let ade=document.getElementById("cart-block");
    ade.innerHTML="";
    var cartBlock1 = document.createElement('div');
    cartBlock1.id="cart-block1";
    let x=`<div id="cart-b1-a">
                <div id="cart-b1-a1" >
                    <div id="c-flip">
                        <p>Flipkart (<span id="cart-p-items">0</span>)</p>
                    </div>
                </div>
                <div id="cart-b1-a2" >
                    <p id="c-grocery">Grocery</p>
                </div>
            </div>`;
    cartBlock1.innerHTML+=x;
    ade.appendChild(cartBlock1);
    cartBlock1.style.width="95%";
    cartBlock1.style.height="fit-content";
    ade.style.display="block";
    let y=`<div id="ce-p">
                <div id="ce-p-img" >
                    <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="">
                </div>
                <div id="ce-p-child" >
                        <p>Your cart is empty!</p>
                        <p>Add items to it now.</p>
                        <button>Shop Now</button>
                </div>
            </div>`;
    ade.innerHTML+=y;
    let redirect=document.querySelector('#ce-p-child button');
    redirect.addEventListener('click',function(){
        location.href = "home.html";
    });
}

function checkCartArr(cartArr){
    if (cartArr.length!=0) displaydata(cartArr);
    else emptydata();
}


function displaydata(cartArr) {
    let ade=document.getElementById("cart-block");
    ade.innerHTML="";
    ade.style.display="flex";
    let az=`<div id="cart-block1">
    <div id="cart-b1-a">
        <div id="cart-b1-a1" >
            <div id="c-flip">
                <p>Flipkart (<span id="cart-p-items"></span>)</p>
            </div>
        </div>
        <div id="cart-b1-a2" >
            <p id="c-grocery">Grocery</p>
        </div>
    </div>
    <div id="cart-b1-b">
        <!-- //appending addresses to -->
    </div>
    <div id="cart-parent-container"  >
    <!-- //appending cart to -->
    </div>
    <div id="c-order-div">
        <button id="c-order-button">PLACE ORDER</button>
    </div>
</div>
<div id="cart-block2">
    <div>
        <p>PRICE DETAILS</p>
    </div>
    <div>
        <p>Price (<span id="c2-price-no">0</span> items)</p>
        <p id="c2-price"></p>
    </div>
    <div>
        <p>Discount</p>
        <p id="c2-dis-price"></p>
    </div>
    <div>
        <p>Buy more & save more <i class="fa-solid fa-circle-exclamation" style="color: #878787"></i></p>
        <p>-₹100</p>
    </div>
    <div>
        <p>Delivery Charges</p>
        <p>FREE</p>
    </div>
    <div>
        <p>Total Amount</p>
        <p id="c2-tot-price"></p>
    </div>
    <div>
        <p>You will save <span id="c2-save"></span> on this order</p>
    </div>
</div>`;

    ade.innerHTML +=az;
    addressDisplay();
    var parentConatiner =document.getElementById('cart-parent-container');
    parentConatiner.innerHTML = "";
    var c2Price=0;
    var c2DisPrice=0;
    document.getElementById("cart-p-items").textContent=cartArr.length;
     document.getElementById("c2-price-no").textContent=cartArr.length;
    cartArr.forEach(function(element,index) {
        let {image,title,spec,strickedPrice,price,discount} = element;
        var cParent = document.createElement('div');
        cParent.id = "c-parent";
        var cChild1 = document.createElement('div');
        cChild1.id = "c-child-1";
        let a1=`<div id="c-image-div">
                <img id="c-image" src="${image}" 
                alt="">
                </div>`;
        cChild1.innerHTML+=a1;
        var cTitlesDiv = document.createElement('div');
        cTitlesDiv.id = "c-titles-div";
        let b1=`<p id="c-title">${title}</p>
        <p id="c-spec">${spec}</p>
        <div id="c-seller-img">
            <p>Seller:RetailNet </p>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="">
        </div>`;
        cTitlesDiv.innerHTML+=b1;
        var cPricesDiv = document.createElement('div');
        cPricesDiv.id = "c-prices-div";
        var cStrikePrice = document.createElement('p');
        cStrikePrice.id = "c-strike-price";
        cStrikePrice.textContent = "₹"+strickedPrice;
        let c2Dp = parseInt(strickedPrice.replace(/[^0-9]/g, ''));
        // console.log(c2Dp+"seeeeeee");
        c2DisPrice+=c2Dp;
        // console.log(c2DisPrice+"dd");
        var cActprice = document.createElement('p');
        cActprice.id = "c-act-price";
        cActprice.textContent = "₹"+price;
        let c2Pp = parseInt(price.replace(/[^0-9]/g, ''));
        c2Price+=c2Pp;
        var cOffer = document.createElement('p');
        cOffer.id = "c-offer";
        cOffer.textContent = "₹"+discount;
        cPricesDiv.append(cStrikePrice,cActprice,cOffer);
        let c1=`<p id="c-no-offers">5 offers applied 
                <i class="fa-solid fa-circle-exclamation" style="color: #388e3c"></i>
                </p>`;
        cPricesDiv.innerHTML+=c1;
        cTitlesDiv.appendChild(cPricesDiv);
        cChild1.appendChild(cTitlesDiv);
        let d1=`<div id="c-delivary">
                <p id="c-delivary-date"> Delivery by 2 PM, Tomorrow <span>| Free</span></p>
                <p id="c-delivary-cost">&#8377 70</p>
                </div>`;
        cChild1.innerHTML+=d1;
        cParent.appendChild(cChild1);
        var cChild2 = document.createElement('div');
        cChild2.id = "c-child-2";
        var cQtyChange = document.createElement('div');
        cQtyChange.id = "c-qty-change";
        var cBtnMinus = document.createElement('button');
        cBtnMinus.id = "c-btn-minus";
        cBtnMinus.textContent="-";
        cQtyChange.appendChild(cBtnMinus);
        var qtyDiv = document.createElement('div');
        var cQty = document.createElement('p');
        cQty.id = "c-qty";
        cQty.textContent = "1";
        qtyDiv.append(cQty);
        cQtyChange.appendChild(qtyDiv);
        var cBtnPlus = document.createElement('button');
        cBtnPlus.id = "c-btn-plus";
        cBtnPlus.textContent="+";
        cQtyChange.appendChild(cBtnPlus);
        cChild2.appendChild(cQtyChange);
        cBtnMinus.addEventListener("click", function(e){
            var stp=cChild1.querySelector("#c-strike-price").textContent;
            var ap=cChild1.querySelector("#c-act-price").textContent;
            var qt=cChild2.querySelector("#c-qty").textContent;
            let numStp = parseInt(stp.replace(/[^0-9]/g, ''));
            let numAp = parseInt(ap.replace(/[^0-9]/g, ''));
            if (+qt>1){
                var changes=numStp;
                var changep=numAp;
                numStp=((+numStp)/(+qt))*(+qt-1);
                numAp=((+numAp)/(+qt))*(+qt-1);
                changes=numStp-changes;
                changep=numAp-changep;
                cChild2.querySelector("#c-qty").textContent=+qt-1;
                cChild1.querySelector("#c-strike-price").textContent="₹"+numStp.toLocaleString();
                cChild1.querySelector("#c-act-price").textContent="₹"+numAp.toLocaleString();
                let a1=document.getElementById("c2-price").textContent;
                a1=parseInt(a1.replace(/[^0-9]/g, ''));
                document.getElementById("c2-price").textContent = "₹"+(a1+changes).toLocaleString();
                let a2=document.getElementById("c2-tot-price").textContent;
                a2=parseInt(a2.replace(/[^0-9]/g, ''));
                document.getElementById("c2-tot-price").textContent = "₹"+(a2+changep).toLocaleString();
                let b1=document.getElementById("c2-dis-price").textContent;
                b1=parseInt(b1.replace(/[^0-9]/g, ''));
                document.getElementById("c2-dis-price").textContent = "-₹"+(b1+(changes-changep)).toLocaleString();
                document.getElementById("c2-save").textContent = "₹"+((b1+(changes-changep)+100).toLocaleString());
            }
            else{
                cBtnMinus.disabled = true;
                cBtnMinus.style.cursor="default";
                cBtnMinus.style.color="#c2c2c2";
            }
        });
        cBtnPlus.addEventListener("click", function(e){
            var stp=cChild1.querySelector("#c-strike-price").textContent;
            var ap=cChild1.querySelector("#c-act-price").textContent;
            var qt=cChild2.querySelector("#c-qty").textContent;
            let numStp = parseInt(stp.replace(/[^0-9]/g, ''));
            let numAp = parseInt(ap.replace(/[^0-9]/g, ''));
            if (+qt>=1){
                var changes=numStp;
                var changep=numAp;
                numStp=((+numStp)/(+qt))*(+qt+1);
                numAp=((+numAp)/(+qt))*(+qt+1);
                changes=numStp-changes;
                changep=numAp-changep;
                cChild2.querySelector("#c-qty").textContent=+qt+1;
                cChild1.querySelector("#c-strike-price").textContent="₹"+numStp.toLocaleString();
                cChild1.querySelector("#c-act-price").textContent="₹"+numAp.toLocaleString();
                let a1=document.getElementById("c2-price").textContent;
                a1=parseInt(a1.replace(/[^0-9]/g, ''));
                document.getElementById("c2-price").textContent = "₹"+(a1+changes).toLocaleString();
                let a2=document.getElementById("c2-tot-price").textContent;
                a2=parseInt(a2.replace(/[^0-9]/g, ''));
                document.getElementById("c2-tot-price").textContent = "₹"+(a2+changep).toLocaleString();
                let b1=document.getElementById("c2-dis-price").textContent;
                b1=parseInt(b1.replace(/[^0-9]/g, ''));
                document.getElementById("c2-dis-price").textContent = "-₹"+(b1+(changes-changep)).toLocaleString();
                document.getElementById("c2-save").textContent = "₹"+((b1+(changes-changep)+100).toLocaleString());
            }
        });
        var cSaveRemove = document.createElement('div');
        cSaveRemove.id = "c-save-remove";
        var cSaving = document.createElement('p');
        cSaving.id = "c-saving";
        cSaving.textContent = "Save for Later";
        var cRemoving = document.createElement('p');
        cRemoving.id = "c-removing";
        cRemoving.textContent = "Remove";
        cSaveRemove.append(cSaving,cRemoving);
        cChild2.appendChild(cSaveRemove);
        cParent.appendChild(cChild2);
        parentConatiner.append(cParent);
        cRemoving.addEventListener("click", function(){
            cartArr.splice(index,1);
            localStorage.setItem("cartArray",JSON.stringify(cartArr));
            checkCartArr(cartArr);
            // displaydata(cartArr);
        });
        cSaving.addEventListener("click", function(){
            var saveObj=cartArr.splice(index,1);
            console.log(saveObj);
            localStorage.setItem("cartArray",JSON.stringify(cartArr));
            var saveArr = JSON.parse(localStorage.getItem('saveItemArray'))||[];
            saveArr.push(saveObj[0]);
            localStorage.setItem("saveItemArray",JSON.stringify(saveArr));
            updatingSaveItems(saveArr);
            checkCartArr(cartArr);
            // displaydata(cartArr);
        });
        let redirect1=document.querySelector('#c-order-button');
    redirect1.addEventListener('click',function(){
        let itemsNo= document.getElementById("c2-price-no").textContent;
        let itemsPrice= document.getElementById("c2-price").textContent;
        let itemsDisPrice= document.getElementById("c2-dis-price").textContent;
        let itemsPayPrice= document.getElementById("c2-tot-price").textContent;
        let itemsSavePrice= document.getElementById("c2-save").textContent;
        
        console.log(itemsNo,itemsPrice,itemsDisPrice,itemsPayPrice,itemsSavePrice);
        let xx=[];
        let x={
            itemsNo:itemsNo,
            itemsPrice:itemsPrice,
            itemsDisPrice:itemsDisPrice,
            itemsPayPrice:itemsPayPrice,
            itemsSavePrice:itemsSavePrice
        };
        xx.push(x);
        localStorage.setItem("orderPrice",JSON.stringify(xx));
        location.href = "../Address/Address.html";
    });
    });
    document.getElementById("c2-price").textContent = "₹"+c2DisPrice.toLocaleString();
    document.getElementById("c2-dis-price").textContent = "-₹"+(+c2DisPrice-c2Price).toLocaleString();
    document.getElementById("c2-tot-price").textContent = "₹"+(c2Price-100).toLocaleString();
    document.getElementById("c2-save").textContent = "₹"+(+c2DisPrice-c2Price+100).toLocaleString();
}

    //     const cHead = document.querySelector('#cart-block');
    //     const cHead1 = document.querySelector('#cart-navbar');
    //     const cFoot = document.querySelector('#c-order-div');
    //     console.log(cHead);
    //     window.addEventListener('scroll', function() {
    //         console.log(cHead.getBoundingClientRect().height);
    //         console.log(window.innerHeight);
    //   if ((cHead.innerHeight + cHead1.innerHeight) > window.innerHeight) {
    //     cFoot .style.position = "fixed";
    //     cFoot .style.bottom = "0"; 
    //     console.log("yes");
    //   } else {
    //     cFoot .style.position = "relative";
    //     cFoot .style.bottom = "auto";
    //     console.log('no');
    //   }
    // });
    
// addressDisplay();
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
        let {userName,userAddress,userPin,userSpecialAdd} = useraddressArr[0];
        let x=`<div id="cart-b1-b1">
                    <div id="c-ad-input">
                        <p>Deliver to:</p>
                        <p id="c-user-name">${userName} ,<span id="c-user-pin">${userPin}</span></p>
                        <p id="c-user-add-spec">${userSpecialAdd}</p>
                    </div>
                    <div id="c-user-adress-door">
                        <p>${userAddress}</p>
                    </div>
                </div>
                <div id="cart-b1-b2">
                    <button id="c-address-change-btn">Change</button>
                </div>`;
        addressDiv.innerHTML +=x;
    }
    else{
        let addressDiv=document.getElementById("cart-b1-b");
        addressDiv.innerHTML=``;
            let x=`<div id="cart-b1-b1">
                        <div id="c-ad-input">
                             <p style="font-size: 15px">Please add your delivery details:</p>
                        </div>
                        <div id="c-user-adress-door"></div>
                        <div id="cart-b1-b2">
                            <button id="c-address-change-btn" style="position: relative; top: -50%; right: -300%;">Add Address</button>
                        </div>
                    </div>`;
        addressDiv.innerHTML +=x;

    }

}

var saveArr = JSON.parse(localStorage.getItem('saveItemArray'))||[];
updatingSaveItems(saveArr);
function updatingSaveItems(saveArr){
    console.log("innnnsaveeeeeee");
    let ade=document.getElementById("c-save-container");
    ade.innerHTML="";
    var cartBlock1 = document.createElement('div');
    cartBlock1.id="cart-block1";
    let x=`<div id="cart-b1-a">
                <div id="cart-b1-a1" >
                    <div id="s-flip">
                        <p id="saved-head"> Saved For Later (<span id="save-p-items">0</span>)</p>
                    </div>
                </div>
            </div>`;
    cartBlock1.innerHTML+=x;
    ade.appendChild(cartBlock1);
    var ss= document.getElementById('save-p-items');
    ss.textContent=saveArr.length;
    var parentConatiner =document.getElementById('c-save-parent');
    parentConatiner.innerHTML = "";
    saveArr.forEach(function(element,index) {
        let {image,title,spec,strickedPrice,price,discount} = element;
        var cParent = document.createElement('div');
        cParent.id = "c-parent";
        var cChild1 = document.createElement('div');
        cChild1.id = "c-child-1";
        let a1=`<div id="c-image-div">
                <img id="c-image" src="${image}" 
                alt="">
                </div>`;
        cChild1.innerHTML+=a1;
        var cTitlesDiv = document.createElement('div');
        cTitlesDiv.id = "c-titles-div";
        let b1=`<p id="c-title">${title}</p>
        <p id="c-spec">${spec}</p>
        <div id="c-seller-img">
            <p>Seller:RetailNet </p>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="">
        </div>`;
        cTitlesDiv.innerHTML+=b1;
        var cPricesDiv = document.createElement('div');
        cPricesDiv.id = "c-prices-div";
        var cStrikePrice = document.createElement('p');
        cStrikePrice.id = "c-strike-price";
        cStrikePrice.textContent = "₹"+strickedPrice;
        var cActprice = document.createElement('p');
        cActprice.id = "c-act-price";
        cActprice.textContent = "₹"+price;
        var cOffer = document.createElement('p');
        cOffer.id = "c-offer";
        cOffer.textContent = "₹"+discount;
        cPricesDiv.append(cStrikePrice,cActprice,cOffer);
        let c1=`<p id="c-no-offers">5 offers applied 
                <i class="fa-solid fa-circle-exclamation" style="color: #388e3c"></i>
                </p>`;
        cPricesDiv.innerHTML+=c1;
        cTitlesDiv.appendChild(cPricesDiv);
        cChild1.appendChild(cTitlesDiv);
        cParent.appendChild(cChild1);
        var cChild2 = document.createElement('div');
        cChild2.id = "c-child-2";
        var cQtyChange = document.createElement('div');
        cQtyChange.id = "c-qty-change";
        var cBtnMinus = document.createElement('button');
        cBtnMinus.id = "c-btn-minus";
        cBtnMinus.textContent="-";
        cBtnMinus.disabled = true;
        cBtnMinus.style.cursor="default";
        cBtnMinus.style.color="#c2c2c2";
        cQtyChange.appendChild(cBtnMinus);
        var qtyDiv = document.createElement('div');
        var cQty = document.createElement('p');
        cQty.id = "c-qty";
        cQty.textContent = "1";
        qtyDiv.append(cQty);
        cQtyChange.appendChild(qtyDiv);
        var cBtnPlus = document.createElement('button');
        cBtnPlus.id = "c-btn-plus";
        cBtnPlus.textContent="+";
        cBtnPlus.disabled = true;
        cBtnPlus.style.cursor="default";
        cBtnPlus.style.color="#c2c2c2";
        cQtyChange.appendChild(cBtnPlus);
        cChild2.appendChild(cQtyChange);
        var cSaveRemove = document.createElement('div');
        cSaveRemove.id = "c-save-remove";
        var cSaving = document.createElement('p');
        cSaving.id = "c-saving";
        cSaving.textContent = "MOVE TO CART";
        var cRemoving = document.createElement('p');
        cRemoving.id = "c-removing";
        cRemoving.textContent = "Remove";
        cSaveRemove.append(cSaving,cRemoving);
        cChild2.appendChild(cSaveRemove);
        cParent.appendChild(cChild2);
        parentConatiner.append(cParent);
        cRemoving.addEventListener("click", function(){
            var x=saveArr.splice(index,1);
            localStorage.setItem("saveItemArray",JSON.stringify(saveArr));;
            updatingSaveItems(saveArr);
        });
        cSaving.addEventListener("click", function(){
            var x=saveArr.splice(index,1);
            localStorage.setItem("saveItemArray",JSON.stringify(saveArr));
            cartArr.push(x[0]);
            localStorage.setItem("cartArray",JSON.stringify(cartArr));
            displaydata(cartArr);
            updatingSaveItems(saveArr);

        });

    });
}


// testing nav

var happend=document.getElementById("cart-navbar");
var aaaa=`<div id="logo">
<a href="#home.html" id="logo-attribute">
    <img id="logo-Flip" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flip-Logo">
</a>
<div id="logo-explore">
    <p>Explore</p>
    <p id="plus-logo">Plus</p>
    <img id="flip-plus" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="Flip-plus">
</div>
</div>
<div class="search-input">
<input type="text" class="search-holder" placeholder="Search for products, brands, and more" />
<button id="srch" class="btn_srch">
<i class="fa-solid fa-magnifying-glass fa-lg" style="color: #2874f0"></i
><span class="glasss"></span>
</button>
</div>
<div id="Login-box">
<div id="login">
    <a href="#Login.html">Login</a>
</div>
</div>
<div id="seller-box">
<div id="seller">
    <a href="#seller.html">Become a seller</a>
</div>
</div>
<div id="more-box">
<div id="more">
    <a href="#">More 
        <i id="down" class="fa-solid fa-chevron-down fa-2xs"></i>
        <i id="up" class="fa-sharp fa-solid fa-chevron-up fa-2xs" style="display: none;"></i>
        
        <i class="fa-solid fa-caret-up fa-2xl" id="more-arrow" style="display: none;"></i>
        <div id="more-show" style="display: none;">
            <div><p><i id="more-i"class="fa-solid fa-bell" style="color: #2874f0"></i> Notification Prefrences</p></div>
            <div><p ><i id="more-i" class="fa-solid fa-clipboard-question" style="color: #2874f0"></i> 24*7 Customer Care</p></div>
            <div><p ><i id="more-i" class="fa-solid fa-chart-line" style="color: #2874f0"></i> Advertise</p></div>
            <div><p ><i id="more-i" class="fa-solid fa-download" style="color: #2874f0"></i> Download App</p></div>
        </div>
    </a>
</div>
</div>
<div id="cart-box">
<div id="cart" >
    <a href="#cart.html"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
</div>
</div>
</div>`;
happend.innerHTML+=aaaa;

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
                moreShow.style.zIndex="10";
            }
        }
    }




    



