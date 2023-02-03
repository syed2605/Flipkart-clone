let duplicate =[];
    async function fetchData(){
        let res = await fetch('../json/sarees1.json');

        let data = await res.json();
        duplicate=[...data];
        displayData(data);
    }
    fetchData();


    let searchInput = document.querySelector(".search-holder");

    let button = document.querySelector(".btn_srch");
    button.addEventListener('click', function(){
        if(searchInput.value.toUpperCase() == 'SAREE'){
            localStorage.href="../sarees.html"
        }
        else if(searchInput.value.toUpperCase() == 'FOOTWEARS'){
            console.log('hii')
                location.href='../footwear.html';
        }
        else if(searchInput.value.toUpperCase() == 'KIDS'){
            console.log('hii')
                location.href='../girls.html';
        }
        else if(searchInput.value.toUpperCase() == 'ETHIC'){
            console.log('hii')
                location.href='../ethnic.html';
        }
        else if(searchInput.value.toUpperCase() == "RHEY" || searchInput.value.toUpperCase() == "KSEVENCREATION"  || searchInput.value.toUpperCase() == "SAMAH" || searchInput.value.toUpperCase() == "ANAND SAREES" ){
            filterByBrand(searchInput.value.toUpperCase());
        }
        
        
        console.log(searchInput.value.toUpperCase());
    })
    // searchInput.addEventListener('oninput',displaySearchedData)
    // function displaySearchedData(){
    //     console.log(searchInput.input);
    // }
    var limit=12;
    var index=0;
let container = document.querySelector('#collection')
    function displayData(data){
        container.innerHTML= null;
        
        for( let ind=index; ind<data.length; ind++) {
            // console.log(data[ind].image)
            
            if(ind <limit){
                // console.log(ind,limit)
                let div = document.createElement('div');
            div.setAttribute('class','card');

            let div1 = document.createElement('div');
            div1.setAttribute('class','img_div');

            let img1 = document.createElement('img');
            img1.src = data[ind].image;
            img1.setAttribute('class','image');

            let imageArray=[];
            imageArray.push(data[ind].image);
            imageArray.push(data[ind].image1)
            let id;
            
            img1.addEventListener('mouseover', function(){
                // console.log(ele);
                var i=0;
                 id = setInterval(function(){
                    if(i==imageArray.length){
                        i=0;
                    }
                    div1.innerHTML = null;

                    let img = document.createElement('img');
                    img.src = imageArray[i];

                    div1.append(img);
                        i++;
                }, 1500)

               
            })
            img1.addEventListener('mouseout', function(){
                    console.log(id);
                    clearInterval(id);
                })
               
            img1.addEventListener('click', function(){
                localStorage.setItem('item',JSON.stringify(data[ind]));
                location.href = '../pd.html'
                console.log(data[ind]);
            })

            

            let likeDiv = document.createElement('div');
            likeDiv.setAttribute('id','circle');
            likeDiv.innerHTML =`<i class="fa-solid fa-heart fa-xl" style="color: #cccccc;" id="likeIcon" onclick='style="color:#ff5656"'></i>`

            div1.append(img1,likeDiv);

            let div2 = document.createElement('div');
            div2.setAttribute('class','pro_detail');

           let brand = document.createElement('h3');
           brand.textContent=data[ind].brand;
           brand.setAttribute('class','brand');

           let title = document.createElement('h3');
           title.textContent=data[ind].title;
           title.setAttribute('class','title');

           let color = document.createElement('p');
           color.textContent=data[ind].color;
           color.setAttribute('class','color');

           let img2 = document.createElement('img');
            img2.src = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
            img2.setAttribute('class','logo');

            let div3 = document.createElement('div');
            div3.setAttribute('class','price_box');

            let price = document.createElement('h2');
           price.textContent= "₹"+data[ind].strickedPrice;
           price.setAttribute('class','price');

           let st_price = document.createElement('p');
           st_price.textContent="₹"+data[ind].price;
           st_price.setAttribute('class','st_price');

           let discount = document.createElement('h2');
           discount.textContent=data[ind].discount;
           discount.setAttribute('class','discount');

           div3.append(price,st_price,discount);

           let delivery = document.createElement('h2');
           delivery.textContent='Free Delivery';
           delivery.setAttribute('class','delivery');

           div2.append(brand,title,color,img2,div3)

           div.append(div1,div2,delivery);
           container.append(div);           

            }
         }
        
    }
    function changeColor(){

    }


    let ascending = document.getElementById('LtH');

    ascending.addEventListener('click',function(){
        let sorted = duplicate.sort(function(a,b){
            return a.strickedPrice - b.strickedPrice;
        })
        
        displayData(sorted);
        console.log(sorted);
    })


    let descending = document.getElementById('HtL');

    descending.addEventListener('click',function(){
        let sorted = duplicate.sort(function(a,b){
            return b.strickedPrice - a.strickedPrice;
        })
        displayData(sorted);
        console.log(sorted);
    })

    
    

    let brand_filter = document.getElementsByClassName('brand-filter');
    // console.log(brand_filter);
    for(let i=0; i<brand_filter.length; i++){
        let filterValue = brand_filter[i].innerText.toUpperCase();
        brand_filter[i].addEventListener('click', function(){
            window.scrollTo({
                top: 100,
                left: 100,
                behavior: 'smooth'
              });
            // filterByBrand(filterValue);
        })

        
        function filterByBrand(value){
            console.log(value );
            container.innerHTML= null;
            duplicate.forEach(ele=>{
                console.log(value );
                if(value==ele.brand.toUpperCase()){
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
                        location.href = '../pd.html'
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
        }
    }

    
   



let link = document.getElementsByClassName('link');
let currValue = 1;
link[0].classList.add("active")
// console.log(link[0])
function activeLink(){
        index=limit;
        limit=2*limit;
        
        container.innerHTML= null;
        displayData(duplicate);
    for(l of link){
        // console.log("Hello")
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currValue = event.target.value
}


function backBtn(){
        
        limit=12;
        index=0;
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
        container.innerHTML= null;
        displayData(duplicate);
    if(currValue >1){
        for(l of link){
            l.classList.remove("active");
        }
        currValue--;
        link[currValue-1].classList.add("active");
    }
}

function nextBtn(){
        index=limit;
        limit=2*limit;
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
        container.innerHTML= null;
        displayData(duplicate);
    if(currValue <5){
        for(l of link){
            l.classList.remove("active");
        }
        currValue++;
        link[currValue-1].classList.add("active");
    }
}





  