const electronicsProductData = [
  {
      img : "https://rukminim1.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
      productName : "Top Mirrorless Cameras",
      discount : "Shop Now!",
      brand : "Canon, Nikon, Sony, FujiFilm...",
      link : ""
  },
  {
      img : "https://rukminim1.flixcart.com/image/400/400/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
      productName : "Best of Shavers",
      discount : "From ₹1,649",
      brand : "Philips & havells",
      link : ""
  },
  {
      img : "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
      productName : "Printers",
      discount : "From ₹3999",
      brand : "HP",
      link : ""
  },
  {
      img : "https://rukminim1.flixcart.com/image/400/400/l4x2rgw0/monitor/e/4/b/d20-30-hd-19-5-66e9kac4in-lenovo-original-imagfpguhzfjyaag.jpeg?q=70",
      productName : "Monitors",
      discount : "From ₹3999",
      brand : "Lenovo",
      link : ""
  },
  {
      img : "https://rukminim1.flixcart.com/image/400/400/kdnf98w0/monitor/y/t/f/vg279qm-90lm05h0-b01320-asus-original-imafug9suqantxk2.jpeg?q=70",
      productName : "ASUS Monitors",
      discount : "From ₹14999",
      brand : "Top Rated"
  },
  {
      img : "https://rukminim1.flixcart.com/image/400/400/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70",
      productName : "Top Deals of Camera Accessories",
      discount : "Shop Now!",
      brand : "Tripods, Gimbals"
  },
  {
      img : "https://rukminim1.flixcart.com/image/400/400/kp4difk0/hair-straightener/w/u/r/bhs397-40-philips-original-imag3ffu6tzr5j39.jpeg?q=70",
      productName : "Best of Hair Straighteners",
      discount : "From ₹529",
      brand : "Philips, Havells & more"
  },
  {
      img : "https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
      productName : "Monitor",
      discount : "From ₹8279",
      brand : "DELL"
  },
]


let bestofElctronic_product_itemEl = document.querySelector(".bestofElctronic_product_item")
let bestofElectornicProduct_html = ""

console.log(electronicsProductData)
electronicsProductData.forEach(el => {

    
    
    bestofElectornicProduct_html += `
    <div >
        <a href="${el.link}" class="BestofElectronic_item">   
        <div class="bestOfElectornic_image_Product">
            <img
                src="${el.img}" />
        </div>
        <div class="bestofElectronicmoreOption">
            <p class="bestofElectornicProduct_name">${el.productName}</p>
            <p class="bestofElecronic_discount">${el.discount}</p>
            <p class="bestofElectronic_brand">${el.brand}</p>
        </div>
        </a>
    </div>
    
    `
})

bestofElctronic_product_itemEl.innerHTML = bestofElectornicProduct_html

let cardBtnRightEl = document.getElementById("card-btn-right") 
let cardBtnLeftEl = document.getElementById("card-btn-left") 
cardBtnLeftEl.style.display = "none" 



cardBtnRightEl.addEventListener("click", function(){
  bestofElctronic_product_itemEl.style.transform = "translateX(-65%)" 
   cardBtnRightEl.style.display = "none" 
   cardBtnLeftEl.style.display="block" 
  }) 
  
  cardBtnLeftEl.addEventListener("click", function(){ 
    bestofElctronic_product_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightEl.style.display = "block" 
    cardBtnLeftEl.style.display = "none" 
  })