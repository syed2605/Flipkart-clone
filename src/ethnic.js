let duplicate = [];
async function fetchData() {
  let res = await fetch("../json/Ethnics.json");

  let data = await res.json();
  duplicate = [...data];
  // console.log(data);
  displayData(data);
}
fetchData();

let container = document.querySelector("#collection");
function displayData(data) {
  container.innerHTML = null;
  data.forEach((ele) => {
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

        let img = document.createElement("img");
        img.src = imageArray[i];

        div1.append(img);
        i++;
      }, 1500);

      img1.addEventListener("mouseout", function () {
        console.log(id);
        clearInterval(id);
      });
    });

    img1.addEventListener("click", function () {
      localStorage.setItem("item", JSON.stringify(ele));
      location.href = "../pd.html";
      console.log(ele);
    });

    div1.append(img1);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "pro_detail");

    let brand = document.createElement("h3");
    brand.textContent = ele.brand;
    brand.setAttribute("class", "brand");

    let title = document.createElement("h3");
    title.textContent = ele.title;
    title.setAttribute("class", "title");

    let img2 = document.createElement("img");
    img2.src =
      "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
    img2.setAttribute("class", "logo");

    let div3 = document.createElement("div");
    div3.setAttribute("class", "price_box");

    let price = document.createElement("h2");
    price.textContent = "₹ " + ele.strickedPrice;
    price.setAttribute("class", "price");

    let st_price = document.createElement("p");
    st_price.textContent = "₹ " + ele.price;
    st_price.setAttribute("class", "st_price");

    let discount = document.createElement("h2");
    discount.textContent = ele.discount;
    discount.setAttribute("class", "discount");

    div3.append(price, st_price, discount);

    let delivery = document.createElement("h2");
    delivery.textContent = "Free Delivery";
    delivery.setAttribute("class", "delivery");

    div2.append(brand, title, img2, div3);

    div.append(div1, div2, delivery);
    container.append(div);
    
  });
}

let ascending = document.getElementById("LtH");

ascending.addEventListener("click", function () {
  let sorted = duplicate.sort(function (a, b) {
    return a.strickedPrice - b.strickedPrice;
  });
  displayData(sorted);
  console.log(sorted);
});

let descending = document.getElementById("HtL");

descending.addEventListener("click", function () {
  let sorted = duplicate.sort(function (a, b) {
    return b.strickedPrice - a.strickedPrice;
  });
  displayData(sorted);
  console.log(sorted);
});


let brand_filter = document.getElementsByClassName('brand-filter');
// console.log(brand_filter);
for(let i=0; i<brand_filter.length; i++){
    brand_filter[i].addEventListener('click', function(){
        container.innerHTML= null;
        duplicate.forEach(ele=>{
            if(brand_filter[i].innerText.toUpperCase()==ele.brand.toUpperCase()){
                let div = document.createElement('div');
                div.setAttribute('class','card');
    
                let div1 = document.createElement('div');
                div1.setAttribute('class','img_div');
    
                let img1 = document.createElement('img');
                img1.src = ele.image;
                img1.setAttribute('class','image');
    
                let imageArray=[];
                imageArray.push(ele.image);
                imageArray.push(ele.image1)
                
                img1.addEventListener('mouseover', function(){
                    // console.log(ele);
                    var i=0;
                    let id = setInterval(function(){
                        if(i==imageArray.length){
                            i=0;
                        }
                        div1.innerHTML = null;
    
                        let img = document.createElement('img');
                        img.src = imageArray[i];
    
                        div1.append(img);
                            i++;
                    }, 1500)
    
                    img1.addEventListener('mouseout', function(){
                    console.log(id);
                    clearInterval(id);
                    })
                })
                
                   
                img1.addEventListener('click', function(){
                    localStorage.setItem('item',JSON.stringify(ele));
                    location.href = "../pd.html";
                    console.log(ele);
                })
    
                div1.append(img1);
    
                let div2 = document.createElement('div');
                div2.setAttribute('class','pro_detail');
    
               let brand = document.createElement('h3');
               brand.textContent=ele.brand;
               brand.setAttribute('class','brand');
    
               let title = document.createElement('h3');
               title.textContent=ele.title;
               title.setAttribute('class','title');
    
               let img2 = document.createElement('img');
                img2.src = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
                img2.setAttribute('class','logo');
    
                let div3 = document.createElement('div');
                div3.setAttribute('class','price_box');
    
                let price = document.createElement('h2');
               price.textContent= "₹ "+ele.strickedPrice;
               price.setAttribute('class','price');
    
               let st_price = document.createElement('p');
               st_price.textContent="₹ "+ele.price;
               st_price.setAttribute('class','st_price');
    
               let discount = document.createElement('h2');
               discount.textContent=ele.discount;
               discount.setAttribute('class','discount');
    
               div3.append(price,st_price,discount);
    
               let delivery = document.createElement('h2');
               delivery.textContent='Free Delivery';
               delivery.setAttribute('class','delivery');
    
               div2.append(brand,title,img2,div3)
    
               div.append(div1,div2,delivery);
               container.append(div);
            
            }

        })
    })
}


