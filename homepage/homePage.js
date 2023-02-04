var slide=document.getElementById("slider");
    var btn1=document.getElementById("btn1");
    var btn2=document.getElementById("btn2");
    var btn3=document.getElementById("btn3");
    var btn4=document.getElementById("btn4");

    btn1.onclick=function(){
        coco=1;
        slide.style.transform="translateX(0px)";
        btn1.classList.add("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
    }
    btn2.onclick=function(){
        coco=2;
        slide.style.transform="translateX(-100%)";
        btn2.classList.add("active");
        btn1.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
    }
    btn3.onclick=function(){
        coco=3;
        slide.style.transform="translateX(-200%)";
        btn3.classList.add("active");
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn4.classList.remove("active");
    }
    btn4.onclick=function(){
        coco=0;
        slide.style.transform="translateX(-300%)";
        btn4.classList.add("active");
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
    }

    var coco=0;
    setInterval(myTimer, 2000);

function myTimer() {
  coco++;
  if(coco==1)
  {
    btn1.onclick();
  }
  else if(coco==2)
  {
    btn2.onclick();
  }
  else if(coco==3)
  {
    btn3.onclick();
  }
  else if(coco==4)
  {
    btn4.onclick();
    coco=0;
  }
}

// rashikaaa

/*imageSliderContainer */
const imageSlider = [
    
]

/*** Best Of Electronics***/
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

/*** Beauty, Food, Toys & more***/


const beutyFoodToyData = [
    {
        img : "https://rukminim1.flixcart.com/image/400/400/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
        productName : "Top Selling Stationery",
        discount : "From ₹49",
        brand : "Pens, Notebooks & more",
        
    },
    {
        img : "https://rukminim1.flixcart.com/image/400/400/l4d2ljk0/bat/3/4/4/1000-hitman-full-size-double-blade-poplar-cricket-bat-advance-original-imagf9zzgxxfamce.jpeg?q=70",
        productName : "Cricket, Football & More",
        discount : "Up to 70% Off",
        brand : "Ceat, Nivia, Li-Ning...",
       
    },
    {
        img : "https://rukminim1.flixcart.com/image/400/400/krtjgcw0/headphone/d/9/g/au-mh501-maono-original-imag5j35rffkwpac.jpeg?q=70",
        productName : "Studio Headphones",
        discount : "Up to 80% off",
        brand : "Explore Now!",
       
    },
    {
        img : "https://rukminim1.flixcart.com/image/400/400/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
        productName : "Premium Non-Geared Cycles",
        discount : "Up to 40% Off",
        brand : "Hercules, Hero & More",
       
    },
    {
        img : "https://rukminim1.flixcart.com/image/400/400/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70",
        productName : "Soft Toys",
        discount : "Upto 70% Off",
        brand : "Stuffed Toys, Plush Toys & more"
    },
    {
        img : "https://rukminim1.flixcart.com/image/400/400/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70",
        productName : "Tyres",
        discount : "From 799",
        brand : "Apollo, Bridgestone, Ceat and"
    },
    {
        img : "https://rukminim1.flixcart.com/image/400/400/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70",
        productName : "Dry Fruits",
        discount : "Upto 75% Off",
        brand : "Happilo, Farmley & More"
    },
    {
        img : "https://rukminim1.flixcart.com/image/400/400/jk1grrk0/car-pressure-washer/j/c/m/06008a7af0-bosch-original-imaf7hd6bv8g3m6r.jpeg?q=70",
        productName : "Car pressure washer",
        discount : "Upto 65% Off",
        brand : "Bosch, Black & Decker & More"
    },
  ]

  // Shop form your Valentile(done)

const forYourValentineData = [

    {
      img : "https://rukminim1.flixcart.com/image/200/200/xif0q/screen-guard/tempered-glass/m/q/w/qz-787894-teinstore-original-imagjmjy4wdbeybw.jpeg?q=70",
      productName : "Wearable Smart Devices",
      discount : "Min. 40% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/kwwfte80/jewellery-set/c/7/g/na-na-80035gr-saiyoni-original-imag9hyj2hudhkwh.jpeg?q=70",
      productName : "Artificial Jewellery",
      discount : "Min. 70% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/l2f20sw0/shopsy-hand-messenger-bag/b/4/n/stylish-women-shoulder-bag-shoper-1red-hobo-khatushyam-original-imagdrmucazmpztg.jpeg?q=70",
      productName : "Handbags",
      discount : "Min. 70% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/kruyw7k0/smart-band-tag/o/u/l/no-standard-cartoon-character-waterproof-led-kids-watch-for-boys-original-imag5kf2mgukhthn.jpeg?q=70",
      productName : "Wrist Watches",
      discount : "Min. 90% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/kthjy4w0/top/o/6/u/xl-13601236-roadster-original-imag6tg9b6ghyqad.jpeg?q=70",
      productName : "Women's Tops",
      discount : "Min. 50% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/xif0q/dress/y/p/k/l-78-j-turritopsis-original-imagg32yjp7hb6wz.jpeg?q=70",
      productName : "Women's Dresses",
      discount : "Min. 50% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/kwzap3k0/lipstick/j/t/n/16-non-transfer-insta-beauty-waterproof-longlast-sensational-original-imag9jby47tukyz5.jpeg?q=70",
      productName : "Lipstick",
      discount : "Min. 50% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/nail-polish/0/a/a/54-4-new-unique-color-rich-paint-hd-shine-pastel-color-combo-set-original-imagfpgmsgcuskmh.jpeg?q=70",
      productName : "Nail Polish",
      discount : "Min. 50% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/l4bn5ow0/eye-shadow/j/k/m/36-nude-eye-shadow-palette-and-rose-gold-eyeshadow-skinplus-original-imagf8t5v83zua5x.jpeg?q=70",
      productName : "Eyeshadow",
      discount : "Min. 50% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/l5cslu80/vanity-box/d/m/k/double-layer-waterproof-woman-travelling-pu-leather-makeup-original-imaggfnrkhtmjcas.jpeg?q=70",
      productName : "Vanity Box",
      discount : "Min. 50% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/kg5fzww0/festive-gift-box/q/n/f/heart-shaped-dairy-milk-bouquet-cadbury-original-imafwgg7ws8cvqvb.jpeg?q=70",
      productName : "Festive Gift Boxes",
      discount : "Min. 50% Off",
      
    },
  
    {
      img : "https://rukminim1.flixcart.com/image/200/200/l3929ow0/lipstick/a/a/6/8-non-transfer-waterproof-professionally-longlasting-l-a-k-m-e-original-imageeretrepxk7y.jpeg?q=70",
      productName : "Makeup",
      discount : "Min. 50% Off",
      
    },
  
  ]
  //Shop Monthly Essentials(done)

const forMothlyEssentialsData =[
 
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kll7bm80/facial-tissue/e/x/n/daily-cleansing-wipes-pack-of-3-lacto-calamine-original-imagyzkmjbvsjy5f.jpeg?q=70",
    productName : "Makeup",
    discount : "Min. 50% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/hair-oil/i/i/e/50-pure-beard-growth-hair-oil-100-natural-oil-used-beard-oil-50-original-imaghfr5agzzxez3.jpeg?q=70",
    productName : "Shaving & Beard Care",
    discount : "Min. 50% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kjkbv680-0/face-wash/l/r/7/450-face-wash-clean-clear-original-imafz3hz4fgwhfnf.jpeg?q=70",
    productName : "Body And Face Care",
    discount : "Min. 50% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/deodorant/o/h/w/-original-imaga36aktvbsxmx.jpeg?q=70",
    productName : "Fragrances",
    discount : "Min. 50% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/diaper/s/5/u/l-supersoft-diaper-pants-large-62-morisons-baby-dreams-original-imagj4w6w7unyhmh.jpeg?q=70",
    productName : "Baby Diapers",
    discount : "Min. 30% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kv9urgw0/air-freshener/y/w/j/150-double-ring-solar-car-perfumes-crystal-auto-rotate-car-original-imag87eny3n3rrzf.jpeg?q=70",
    productName : "Car Air Fresheners",
    discount : "Min. 50% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/bath-towel/c/k/m/multicolor-bath-microfiber-towel-1-7-9-shruhadam-international-original-imagjnyhsy7ux3kg.jpeg?q=70",
    productName : "Home Furnishing",
    discount : "Min. 50% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ky1vl3k0/wipe/c/b/c/baby-wipes-80-sheets-pack-with-lid-240-8906006350090-novel-original-imagadpnfuxhyhbt.jpeg?q=70",
    productName : "Baby Wipes",
    discount : "Min. 30% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ky1vl3k0/electric-insect-killer/8/q/0/pest-reject-device-non-toxic-spider-lizard-mice-repellent-indoor-original-imagadhhrbphzuzg.jpeg?q=70",
    productName : "Mosquito Killers",
    discount : "Min. 50% Off",
    
    },
    
    {
    img : "https://rukminim1.flixcart.com/image/200/200/krgohow0/canvas/u/o/i/8x10-3-6x8-3-6x6-3-canvas-board-pack-of-9-pantonic-original-imag595cuzfghuav.jpeg?q=70",
    productName : "Pens & Stationery",
    discount : "Min. 50% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kyuge4w0/hair-oil/t/z/2/-original-imagazg8s9ehzdwf.jpeg?q=70",
    productName : "Hair Care And Accessory",
    discount : "Min. 50% Off",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/nut-dry-fruit/9/0/a/750-dry-fruits-combo-pack-of-cashews-almonds-raisins-kismis-kaju-original-imaghdt9xapckmtp.jpeg?q=70",
    productName : "Food Products",
    discount : "Min. 50% Off",
    
    },
   ]
   
   // Sports, Healthcare & more
   
   const forSportsHealthcareMoreData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kqgyhe80/stroller-pram/m/g/r/easy-to-push-baby-pram-with-quick-one-hand-folding-blue-mm-50-a-original-imag4h6bzrb6fngh.jpeg?q=70",
    productName : "Baby Gear",
    discount : "Up to 70% Off",
    brand : "MeeMee & More",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l51d30w0/shopsy-sport-mat/p/w/s/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.jpeg?q=70",
    productName : "Yoga Mat",
    discount : "From 159",
    brand : "beatXP, HRX & Adrenex",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=70",
    productName : "Musical Toys",
    discount : "Under 199",
    brand : "Top-Selling Toys",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/jc0ttow0/vehicle-lubricant/5/h/q/1-3000-4t-plus-20w40-hc-tech-engine-oil-for-bikes-motul-original-imaff8z4xtq5ry6a.jpeg?q=70",
    productName : "Car Lubricant",
    discount : "Upto 45% Off",
    brand : "Mobil, Shell, Castrol & More",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/jykfxjk0/regionalbooks/b/j/9/bd-chaurasia-s-human-anatomy-8th-edition-2019-volume-1-2-3-4-original-imafgrwzjhepy7he.jpeg?q=70",
    productName : "Most Searched Books",
    discount : "Min 30% off",
    brand : "Shop Now!",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kk5rgy80/racquet/a/n/f/g4-3-25-inches-strung-nanoflare-light-29is-1-nanoflare-light-original-imafzkgg9zrt6eet.jpeg?q=70",
    productName : "Badminton Racquets",
    discount : "From 899",
    brand : "Full Graphite Racquets",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kql8sy80/lipstick/7/m/y/21-sara-s-favorite-sensational-liquid-matte-pack-of-3-touch-of-original-imag4kgnbmynydnw.jpeg?q=70",
    productName : "Makeup Essentials",
    discount : "Upto 60% Off",
    brand : "Lakme, Swiss Beauty & more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/k7531jk0/all-purpose-cleaner/p/m/b/liquid-cleanser-bottle-1-5-ltr-18512-luvlap-original-imafpfzrptntrxns.jpeg?q=70",
    productName : "Cleaners & Detergents",
    discount : "Under 499",
    brand : "Luvlap, MeeMee & More",
    
    },
   
   
   ]
   
   //Home & Kitchen Essentials(done)
   
   const forHomeKitchenEssentialsData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/power-hand-tool-kit/v/v/g/gsb-500-re-kit-bosch-original-imaeg63dbybtqzfy.jpeg?q=70",
    productName : "Power and Hand Tool Kit",
    discount : "From 399",
    brand : "Best Selling",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kz8qsnk0/mosquito-net/h/1/p/double-bed-polyester-adults-blue-mosquito-net-double-bed-nets-original-imagbagfgnfvnquj.jpeg?q=70",
    productName : "Mosquito Nets",
    discount : "From 149",
    brand : "Best Deal Price",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70",
    productName : "Wall Decor Items",
    discount : "Upto 80% Off",
    brand : "Big Discounts",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l1jmc280/mattress-protector/w/g/e/shmp723612gy-sleepyhead-original-imagd37rhpjqngzk.jpeg?q=70",
    productName : "Mattress Protectors",
    discount : "From 149",
    brand : "Best Offers",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kqwobrk0/spray-tip/2/t/h/brass-nozzle-water-spray-gun-water-jet-hose-nozzles-hose-pipe-original-imag4tyraqzzwwfg.jpeg?q=70",
    productName : "Sanitizer Sprayers",
    discount : "From 199",
    brand : "Best Selling",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kz065jk0/emergency-light/v/t/4/high-quality-60-high-bright-led-light-with-android-charging-original-imagb3v8h8zdm3q3.jpeg?q=70",
    productName : "Emergency Lights",
    discount : "Upto 80% Off",
    brand : "Big Discounts",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/welding-machine/c/7/3/15-m220-76-arc-igbt-220a-with-hot-start-anti-stick-functions-arc-original-imaggaxpxcs4ffwg.jpeg?q=70",
    productName : "Welding Machines",
    discount : "Starting 2999",
    brand : "Best Selling",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kgv5x8w0/slipcover/v/f/v/sfc-29-onterio-fab-original-imafxyen34zmpde3.jpeg?q=70",
    productName : "Sofa Covers",
    discount : "From 149",
    brand : "Best Selling Range",
    
    },
   
   
   ]
   
   //Grooming, Books, Auto & more(done)
   
   const forGroomingBooksAutoData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l3uhvgw0/cycle/n/z/c/torro-26t-26-16-montra-72-21-gear-original-imagevzncygdd8ah.jpeg?q=70",
    productName : "Premium Cycle",
    discount : "Up to 70% Off",
    brand : "Montra",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l4d2ljk0/bat/3/4/4/1000-hitman-full-size-double-blade-poplar-cricket-bat-advance-original-imagf9zzgxxfamce.jpeg?q=70",
    productName : "Cricket, Football & More",
    discount : "Up to 70% Off",
    brand : "Ceat, Nivia, Li-Ning...",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/light/h/9/h/imported-bicycle-rear-light-5-led-usb-rechargeable-waterproof-original-imaeq7hj3gppgcxz.jpeg?q=70",
    productName : "Cycles Accesiories",
    discount : "From 125",
    brand : "Best Deals",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/k186fm80/bat/9/f/n/1000-1200-short-handle-endorsed-for-light-hard-tennis-ball-with-original-imafkuuyxrrphkbr.jpeg?q=70",
    productName : "Cricket",
    discount : "Up to 45% Off",
    brand : "CEAT, MRF & More",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/klwmufk0/musical-keyboard/x/7/v/electronic-piano-keyboard-with-37-keys-and-with-microphone-dc-original-imagyxgjvbaujjny.jpeg?q=70",
    productName : "Musical Keyboards",
    discount : "up to 70% off",
    brand : "Beston, Redbox & more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70",
    productName : "Food Spreads",
    discount : "Upto 75% Off",
    brand : "Myfiness,Alpino & More",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/knhsgi80/racquet/a/0/u/g4-3-25-inches-g-force-3700-superlite-strung-1-g-force-superlite-original-imag25n4h7gjgrc2.jpeg?q=70",
    productName : "Ultra Premium Racquets",
    discount : "Up to 40% Off",
    brand : "Li-ning, Adrenex & more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/k3j1z0w0/kit/d/v/e/combo-of-ab-wheel-rollerand-tummy-trimmer-exercisee1s-charuvi-original-imafdwh9nyzyujvk.jpeg?q=70",
    productName : "Ab Exerciser",
    discount : "From 199",
    brand : "Adrenex, Manogyam & More",
    
    },
   
   
   ]
   
   //Fashion Top Deals(done)
   
   const forFashionTopDealsData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70",
    productName : "Roadster, HRX & more",
    discount : "From 249",
    brand : "T-Shirts, Shirts",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/fk-p-flap/200/200/image/5aa98b7cee183286.jpg?q=70",
    productName : "Best selling Styles",
    discount : "Min. 40% Off",
    brand : "Woodland, U.S. Polo Assn....",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l23mhzk0/top/a/b/l/m-tttp006710-tokyo-talkies-original-imagdgg4gqpmdgm8.jpeg?q=70",
    productName : "Tops, Dresses, Jeans...",
    discount : "Min. 60% Off",
    brand : "AND, Sassafras, Killer...",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kn4xhu80/bra/x/c/3/lightly-padded-32e-no-regular-regular-br2213p08-clovia-original-imagfvnj3gmgqbxf.jpeg?q=70",
    productName : "Bra, Tops, Dresses",
    discount : "From 99",
    brand : "Sassafras, Clovia, Only & More",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l3dcl8w0/sari/n/7/j/free-mfs-192-light-blue-mahalaxmi-fashion-unstitched-original-imagegdqcnufet7k.jpeg?q=70",
    productName : "Organza Sarees",
    discount : "Flat 70% Off",
    brand : "Shop Now!",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/joq2qa80/jacket/v/h/8/m-fmjk0610-flying-machine-original-imafb4944xejmphz.jpeg?q=70",
    productName : "Sweatshirts, Jackets, Jeans",
    discount : "Under 599",
    brand : "Beat the Chill",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/sandal/y/w/8/2-goldensuperstaruk2-purplehunt-golden-original-imaggzdrcyj6fuqq.jpeg?q=70",
    productName : "Puma, Bata, Crocs...",
    discount : "Min 40% off",
    brand : "Women's Shoes & Sandals...",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l111lzk0/kurta/t/r/c/m-dafksp22daterracota-max-original-imagczshpt7mamjd.jpeg?q=70",
    productName : "Kurtas, Sets & more",
    discount : "Up to 70% Off",
    brand : "Rangmanch, Melange & more..",
    
    },
   
   
   ]
   
   // Top Deals(done)
   
   const forTopDealsData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
    productName : "Apple iPads",
    discount : "Shop Now!",
    brand : "Liquid Retina Display",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
    productName : "Mirrorless Cameras",
    discount : "From 57,999",
    brand : "NCEMI | Product Exch",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l3t2fm80/monitor/w/x/o/-original-imageudygqyzcqpf.jpeg?q=70",
    productName : "Exciting New Launches",
    discount : "From 8499",
    brand : "Samsung, Canon & more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/tablet/y/a/y/-original-imaggfrhvghucswf.jpeg?q=70",
    productName : "realme Pad",
    discount : "From 9,999",
    brand : "#1 Best Seller In Charts!",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kbzergw0/instant-camera/m/h/u/instax-instant-camera-mini-11-fujifilm-original-imaft7fpfzkcsequ.jpeg?q=70",
    productName : "Instax Cameras",
    discount : "From 3,999",
    brand : "Capture your unique moments",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/k6qsn0w0/tablet/3/q/z/lenovo-za5g0047in-original-imafp4w7qvpnprv5.jpeg?q=70",
    productName : "Lenovo Tab M8",
    discount : "Shop Now!",
    brand : "8-inch | Upto 64GB",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kpvivm80/tablet/r/x/9/sm-t225nzaains-samsung-original-imag4yrg8vahczvr.jpeg?q=70",
    productName : "Samsug Galaxy Tabs",
    discount : "Shop Now!",
    brand : "Best Sellers | Most Wishlisted",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kgqvlow0/battery-charger/d/a/7/apple-mhjd3hn-a-original-imafwwwfg5xgcctm.jpeg?q=70",
    productName : "Buy Now",
    discount : "From 99",
    brand : "Ambrane, Mi & More",
    
    },
   
   
   ]
   
   //Books, Toys & More(done)
   
   const forBooksToysData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ki3gknk0/helmet/p/4/9/sba-1-cesar-sba-1-cesar-full-face-steelbird-original-imafxyhzwrhqyvcx.jpeg?q=70",
    productName : "Helmet",
    discount : "From 699",
    brand : "Vega, Steelbird And more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=70",
    productName : "Coffee Powder",
    discount : "Upto 80% Off",
    brand : "Nescafe, Continental & More",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/klwmufk0/musical-keyboard/x/7/v/electronic-piano-keyboard-with-37-keys-and-with-microphone-dc-original-imagyxgjvbaujjny.jpeg?q=70",
    productName : "Musical Keyboards",
    discount : "up to 70% off",
    brand : "Beston, Redbox & more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kmds4nk0/vehicle-indicator-light/c/g/9/set-of-4-bike-front-side-rear-smd-blue-led-light-indicator-turn-original-imagfatnzgzegkmg.jpeg?q=70",
    productName : "Bike Light Bulb",
    discount : "From 89",
    brand : "Bike Essentials",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/book/q/w/y/mtg-35-years-neet-previous-year-solved-question-papers-with-neet-original-imaggcx38guwaten.jpeg?q=70",
    productName : "Academic Books",
    discount : "Under 299",
    brand : "Explore Now!",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ktn9pjk0/book/l/h/0/alchemist-original-imag6xfcqasgbqrm.jpeg?q=70",
    productName : "Fiction Books",
    discount : "Up to 70% off",
    brand : "Shop Now!",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l3ahpjk0/air-freshener/b/b/k/10-godreg-aer-frshner-gel-skynex-original-imagegfwhgxpukvj.jpeg?q=70",
    productName : "Car Air Freshener",
    discount : "From 199",
    brand : "Under Budget",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70",
    productName : "String Instruments",
    discount : "Up to 70% Off",
    brand : "Guitars, Ukuleles & More",
    
    },
   
   
   ]
   
   //Pick Your Styles(done)
   
   const forPickYourStylesData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/k2z1t3k0/jacket/z/v/x/m-9298233-mast-harbour-original-imafm78vbfvdzph7.jpeg?q=70",
    productName : "Sweatshirts, Hoodies, Jackets...",
    discount : "From 249",
    brand : "Shirts, Trousers",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=70",
    productName : "U.S. Polo Assn., Highlander..",
    discount : "Min. 40% Off",
    brand : "Sneakers, Loafers, Slides...",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/jvmpci80/track-pant/g/w/j/s-7224489-hrx-by-hrithik-roshan-original-imafghfrgedw3zq8.jpeg?q=70",
    productName : "Nivia, Van Heusen Flex..",
    discount : "Up to 60% Off",
    brand : "Trackpants, Shorts",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kylvr0w0/shirt/u/p/t/m-1596-fs-maple-killer-original-imagasvf8qupbpuz.jpeg?q=70",
    productName : "Ketch, Mast & Harbour..",
    discount : "From 399",
    brand : "Shirts, Trousers",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kj0bp8w0-0/jewellery-set/y/5/7/n83811-sukkhi-original-imafyzd5ze4v7dee.jpeg?q=70",
    productName : "Jewellery",
    discount : "Under 499",
    brand : "Shop Now",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/k59xci80/watch/t/p/9/premium-luxury-business-casual-trendy-water-resistant-original-imafnzmembfxdyhv.jpeg?q=70",
    productName : "Watches",
    discount : "From 399",
    brand : "Best Selling",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ktyp8cw0/t-shirt/a/y/n/s-14806378-mast-harbour-original-imag76r6ba6kgj8f.jpeg?q=70",
    productName : "Being Human, Ruf & Tuf, Lee..",
    discount : "Min. 50% Off",
    brand : "T-Shirts, Jeans",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/flap/200/200/image/f1ffa6330a602013.jpeg?q=70",
    productName : "Bags, Trolleys, Luggage...",
    discount : "50-70%+Extra 10% Off",
    brand : "Wildcraft, American Tourister...",
    
    },
   
   
   ]
   
   //Top Deals On TVs & Appliances(done)
   
   const forTopDealOnTVAppliancesData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kzblocw0/refrigerator-new/c/t/u/-original-imagbcu87q9rgq2x.jpeg?q=70",
    productName : "Godrej Refrigerator",
    discount : "From 7,240",
    brand : "Buy Now!",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l37mtu80/washing-machine-new/n/i/n/-original-imagednhyxjeh8xc.jpeg?q=70",
    productName : "Semi Automatic Washing Machines",
    discount : "Buy Now",
    brand : "From â‚¹ 6,990",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l2jcccw0/refrigerator-new/1/f/n/195bd2rmb1-1165-2-2022-34-realme-techlife-660-540-original-imagdunghhzhuymm.jpeg?q=70",
    productName : "Single Door Refrigerator",
    discount : "From 9,990",
    brand : "Samsung,LG...",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/refrigerator-new/9/y/y/-original-imagkgpq9thhchfz.jpeg?q=70",
    productName : "Samsung Refrigerator",
    discount : "From 12,690",
    brand : "Grab Now!",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kgzg8sw0/refrigerator-new/g/9/m/507afdmtb-na-motorola-original-imafx2znthgm3kpa.jpeg?q=70",
    productName : "Motorola Refrigerator",
    discount : "From 23,990",
    brand : "Grab Now!",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/l3j2cnk0/electric-kettle/q/z/c/-original-imagemy6egjb6zme.jpeg?q=70",
    productName : "Kitchen Appliances",
    discount : "Up to 75% Off",
    brand : "Mixers, Kettles & more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/washing-machine-new/y/l/k/8-5-48-p8530sraz-5-0-5-81-18-lg-98-original-imagkppjdebeu9sk.jpeg?q=70",
    productName : "Big Washing Machines",
    discount : "Buy Now",
    brand : "From 13,490",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ksj9dow0/washing-machine-new/o/x/m/10-5-575-hdf1050-0-1750-595-56-white-westinghouse-trademark-by-original-imag62h86fsjpsxz.jpeg?q=70",
    productName : "Front Load Washing Machines",
    discount : "Buy now",
    brand : "From 17,990",
    
    },
   
   
   ]
   
   //Beauty, Food & More(done)
   
   const forBeautyFoodMoreData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/power-hand-tool-kit/v/v/g/gsb-500-re-kit-bosch-original-imaeg63dbybtqzfy.jpeg?q=70",
    productName : "Power and Hand Tool Kit",
    discount : "From 399",
    brand : "Best Selling",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/k0e66q80/plant-sapling/c/e/7/air-purifying-pothos-money-plant-with-imported-pot-1-water-original-imafk747aczgq6ze.jpeg?q=70",
    productName : "Live Plants",
    discount : "From 199",
    brand : "Best Selling",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ked56kw0/battery/nimh/z/v/e/duracell-plus-a-a-4-pcs-1300-mah-original-imafv2ff3mbzj6gg.jpeg?q=70",
    productName : "Batteries",
    discount : "From 79",
    brand : "Best Selling",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/khmbafk0-0/level/x/y/5/10-0-601-072-hf0-bosch-original-imafxh9vsdbmww66.jpeg?q=70",
    productName : "Measuring Tapes and Levels",
    discount : "From 99",
    brand : "Bosch and more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ksaoqkw0/garden-tool-set/j/y/c/garden-tool-set-garden-tool-kit-3-tools-trowel-weeder-and-hand-original-imag5w65fsc32zsv.jpeg?q=70",
    productName : "Gardening Tools",
    discount : "Under 99",
    brand : "Best Selling Range",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/welding-machine/c/7/3/15-m220-76-arc-igbt-220a-with-hot-start-anti-stick-functions-arc-original-imaggaxpxcs4ffwg.jpeg?q=70",
    productName : "Welding Machines",
    discount : "Starting 2999",
    brand : "Best Selling",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ktizdzk0/hammer/i/w/3/703-visko-original-imag6uthzcahygqu.jpeg?q=70",
    productName : "Hammers",
    discount : "From 139",
    brand : "Buildskill and more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kqmo8sw0/clothesline/q/k/c/01-3-meter-windproof-anti-slip-clothes-washing-line-drying-rope-original-imag4hchexvtznyy.jpeg?q=70",
    productName : "Clothesline",
    discount : "Under 99",
    brand : "Best Selling Range",
    
    },
   
   
   ]
   
   // Fashion Best Sellers(done)
   
   const forFashionBestSellersData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kqpj4i80/ring/8/1/8/adjustable-cfr-k149-ring-set-karishma-kreations-original-imag4ntug2g26twf.jpeg?q=70",
    productName : "Jewellery",
    discount : "Under 799",
    brand : "Grab Now",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/bra/1/7/e/lightly-padded-34e-regular-no-regular-br1804x01-clovia-original-imagg9ja3fadhyfh.jpeg?q=70",
    productName : "Bra, Denims, T-Shirts",
    discount : "From 99",
    brand : "Zivame, Kotty, Van Heusen",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/fk-p-flap/200/200/image/dca97fb4b0c593f8.jpg?q=70",
    productName : "Trendy Kurtas, Sets & more",
    discount : "Min 75% Off",
    brand : "Libas",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kuef2q80/kurta/h/n/y/s-dafksp20pi21aqua-max-original-imag7j8gnghzahsu.jpeg?q=70",
    productName : "Max & Rangmanch",
    discount : "Under 499",
    brand : "Kurtas & Kurtis",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/sari/8/6/w/free-sknt17-d-divastri-unstitched-original-imagg9j9vvv8s3hb.jpeg?q=70",
    productName : "Anmi, Divastri & more",
    discount : "60-90% Off",
    brand : "Kurta, Sarees & more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/xif0q/dress/j/s/f/s-kbt-559-krati-by-tara-original-imagg9hftvfxe56u.jpeg?q=70",
    productName : "Dresses, Tops, Jeans",
    discount : "Min 60% Off",
    brand : "Dressberry, Vero Moda, Levi's",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/jwgple80/backpack/n/e/w/spin-laptop-backpack-01-teal-fs0-0-11-001-laptop-backpack-original-imafh54gqnmpsczs.jpeg?q=70",
    productName : "Safari, Wildcraft, Aristocrat...",
    discount : "Min 65% Off",
    brand : "Cool Backpacks",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/klo27bk0/churidar/n/x/k/xxl-women-churidar-nakaash-original-imagyqy6evhh7xzc.jpeg?q=70",
    productName : "Leggings Combo",
    discount : "From 299",
    brand : "Badi Bachat Bada Fayda",
    
    },
   
   
   ]
   
   // Furniture Bestsellers(done)
   
   const forFurnitureBestsellerData =[
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/keg02a80/wardrobe-closet/f/y/f/particle-board-bewtri000500800620-kurlon-wenge-original-imafv49kgfrmmxbq.jpeg?q=70",
    productName : "Wardrobes",
    discount : "From 4,999",
    brand : "2, 3, 4 Door...e a boss",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/kf75fgw0/office-study-chair/z/g/w/carbon-steel-low-back-royal-ergonomic-desk-mesh-chair-in-brown-original-imafvzvprhk3xqdc.jpeg?q=70",
    productName : "Office Study Chairs",
    discount : "From 1,890",
    brand : "Best For Work from Home",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/jm9hfgw0/bed/h/g/g/king-na-rosewood-sheesham-bkwl05nhbs0401d1p-flipkart-perfect-original-imaf97cwhvgnwg95.jpeg?q=70",
    productName : "Bestselling Beds",
    discount : "Upto 70% Off",
    brand : "King, Queen & more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/k7f34i80/bed-mattress/d/x/w/queen-6-72-66-lady-indiana-bonnell-spring-repose-original-imafpnhrnvnjrmfb.jpeg?q=70",
    productName : "Mattresses",
    discount : "Upto 60% off",
    brand : "Spring, Foam & more",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/k687wy80/office-study-table/y/h/f/particle-board-vi-ct-ph-ost-wb-13-flipkart-perfect-homes-studio-original-imafzkwv94yn5bhg.jpeg?q=70",
    productName : "Office Study table",
    discount : "From 1,299",
    brand : "Work at Home like a boss",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/ji0lbbk0/recliner/q/n/7/maroon-pu-leatherette-emporiummaroon-westido-original-imaf5wr5x27c6gaq.jpeg?q=70",
    productName : "Recliner",
    discount : "From 11,999",
    brand : "Cozy Corners",
    
    },
   
    {
    img : "https://rukminim1.flixcart.com/image/200/200/jim0x3k0/sofa-sectional/c/v/7/blue-polycotton-ph0003-perfect-homes-by-flipkart-blue-original-imaf6dhhsfhvvjdn.jpeg?q=70",
    productName : "Sofa & Sectional",
    discount : "From 7,999",
    brand : "Fabric & Leatherette",
    
    },
   
   ]
  
/*imageSliderContainer */

/*** Best Of Electronics***/
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

  /*** Beauty, Food, Toys & more ***/


  let BeautyFoodToy_itemBFT = document.querySelector(".BeautyFoodToy_product_item")
let BeautyFoodToy_html = ""

console.log(beutyFoodToyData)
beutyFoodToyData.forEach(el => {

    
    
    BeautyFoodToy_html += `
    <div class="product_card" >
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

BeautyFoodToy_itemBFT.innerHTML = BeautyFoodToy_html

let cardBtnRightBFT = document.getElementById("card-btn-right2") 
let cardBtnLeftBFT = document.getElementById("card-btn-left2") 
cardBtnLeftBFT.style.display = "none" 




cardBtnRightBFT.addEventListener("click", function(){
    BeautyFoodToy_itemBFT.style.transform = "translateX(-65%)" 
   cardBtnRightBFT.style.display = "none" 
   cardBtnLeftBFT.style.display="block" 
  }) 
  
  cardBtnLeftBFT.addEventListener("click", function(){ 
    BeautyFoodToy_itemBFT.style.transform = "translatex(0%)" 
    cardBtnRightBFT.style.display = "block" 
    cardBtnLeftBFT.style.display = "none" 
  })


  /*** shop for your valentine***/
let foryourvalentine_itemEl = document.querySelector(".foryourvalentine_product_item")
let foryourvalentine_html = ""

console.log(forYourValentineData)
forYourValentineData.forEach(el => {

    
    
    foryourvalentine_html += `
    <div >
        <a href="${el.link}" class="BestofElectronic_item">   
        <div class="bestOfElectornic_image_Product">
            <img
                src="${el.img}" />
        </div>
        <div class="bestofElectronicmoreOption">
            <p class="bestofElectornicProduct_name">${el.productName}</p>
            <p class="bestofElecronic_discount">${el.discount}</p>
            
        </div>
        </a>
    </div>
    
    `
})

foryourvalentine_itemEl.innerHTML = foryourvalentine_html

let cardBtnRightvl = document.getElementById("card-btn-right3") 
let cardBtnLeftvl = document.getElementById("card-btn-left3") 
cardBtnLeftvl.style.display = "none" 



cardBtnRightvl.addEventListener("click", function(){
    foryourvalentine_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightvl.style.display = "none" 
   cardBtnLeftvl.style.display="block" 
  }) 
  
  cardBtnLeftvl.addEventListener("click", function(){ 
    foryourvalentine_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightvl.style.display = "block" 
    cardBtnLeftvl.style.display = "none" 
  })


  /*** Monthly essantials***/
let MothlyEssentials_itemEl = document.querySelector(".MothlyEssentials_product_item")
let MothlyEssentials_html = ""

console.log(forMothlyEssentialsData)
forMothlyEssentialsData.forEach(el => {

    
    
    MothlyEssentials_html += `
    <div >
        <a href="${el.link}" class="BestofElectronic_item">   
        <div class="bestOfElectornic_image_Product">
            <img
                src="${el.img}" />
        </div>
        <div class="bestofElectronicmoreOption">
            <p class="bestofElectornicProduct_name">${el.productName}</p>
            <p class="bestofElecronic_discount">${el.discount}</p>
           
        </div>
        </a>
    </div>
    
    `
})

MothlyEssentials_itemEl.innerHTML = MothlyEssentials_html

let cardBtnRightme = document.getElementById("card-btn-right4") 
let cardBtnLeftme = document.getElementById("card-btn-left4") 
cardBtnLeftme.style.display = "none" 



cardBtnRightme.addEventListener("click", function(){
    MothlyEssentials_itemEl.style.transform = "translateX(-65%)" 
  cardBtnRightme.style.display = "none" 
  cardBtnLeftme.style.display="block" 
  }) 
  
  cardBtnLeftme.addEventListener("click", function(){ 
    MothlyEssentials_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightme.style.display = "block" 
    cardBtnLeftme.style.display = "none" 
  })



  /*** Sports, Healthcare & more***/
let SportsHealthcare_itemEl = document.querySelector(".SportsHealthcare_product_item")
let SportsHealthcare_html = ""

console.log(forSportsHealthcareMoreData)
forSportsHealthcareMoreData.forEach(el => {

    
    
    SportsHealthcare_html += `
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

SportsHealthcare_itemEl.innerHTML = SportsHealthcare_html


let cardBtnRightHC = document.getElementById("card-btn-right5") 
let cardBtnLeftHC = document.getElementById("card-btn-left5") 
cardBtnLeftHC.style.display = "none" 



cardBtnRightHC.addEventListener("click", function(){
    SportsHealthcare_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightHC.style.display = "none" 
   cardBtnLeftHC.style.display="block" 
  }) 
  
  cardBtnLeftHC.addEventListener("click", function(){ 
    SportsHealthcare_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightHC.style.display = "block" 
    cardBtnLeftHC.style.display = "none" 
  })


/*** Home & Kitchen Essentials***/
let HomeKitchenEssentials_itemEl = document.querySelector(".HomeKitchenEssentials_product_item")
let HomeKitchenEssentials_html = ""

console.log(forHomeKitchenEssentialsData)
forHomeKitchenEssentialsData.forEach(el => {

    
    
    HomeKitchenEssentials_html += `
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

HomeKitchenEssentials_itemEl.innerHTML = HomeKitchenEssentials_html


let cardBtnRightHE = document.getElementById("card-btn-right6") 
let cardBtnLeftHE = document.getElementById("card-btn-left6") 
cardBtnLeftHE.style.display = "none" 



cardBtnRightHE.addEventListener("click", function(){
    HomeKitchenEssentials_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightHE.style.display = "none" 
    cardBtnLeftHE.style.display="block" 
  }) 
  
  cardBtnLeftHE.addEventListener("click", function(){ 
    HomeKitchenEssentials_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightHE.style.display = "block" 
    cardBtnLeftHE.style.display = "none" 
  })

/*** Grooming, Books, Auto & more***/
let GroomingBooksAuto_itemEl = document.querySelector(".GroomingBooksAuto_product_item")
let GroomingBooksAuto_html = ""

console.log(forGroomingBooksAutoData)
forGroomingBooksAutoData.forEach(el => {

    
    
    GroomingBooksAuto_html += `
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

GroomingBooksAuto_itemEl.innerHTML = GroomingBooksAuto_html


let cardBtnRightGB = document.getElementById("card-btn-right7") 
let cardBtnLeftGB = document.getElementById("card-btn-left7") 
cardBtnLeftGB.style.display = "none" 



cardBtnRightGB.addEventListener("click", function(){
    GroomingBooksAuto_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightGB.style.display = "none" 
    cardBtnLeftGB.style.display="block" 
  }) 
  
  cardBtnLeftGB.addEventListener("click", function(){ 
    GroomingBooksAuto_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightGB.style.display = "block" 
    cardBtnLeftGB.style.display = "none" 
  })
/*** Fashion Top Deals***/
let FashionTopDeals_itemEl = document.querySelector(".FashionTopDeals_product_item")
let FashionTopDeals_html = ""

console.log(forFashionTopDealsData)
forFashionTopDealsData.forEach(el => {

    
    
    FashionTopDeals_html += `
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

FashionTopDeals_itemEl.innerHTML = FashionTopDeals_html



let cardBtnRightFT = document.getElementById("card-btn-right8") 
let cardBtnLeftFT = document.getElementById("card-btn-left8") 
cardBtnLeftFT.style.display = "none" 



cardBtnRightFT.addEventListener("click", function(){
    FashionTopDeals_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightFT.style.display = "none" 
    cardBtnLeftFT.style.display="block" 
  }) 
  
  cardBtnLeftFT.addEventListener("click", function(){ 
    FashionTopDeals_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightFT.style.display = "block" 
    cardBtnLeftFT.style.display = "none" 
  })
/*** Top Deals***/
let TopDeals_itemEl = document.querySelector(".TopDeals_product_item")
let TopDeals_html = ""

console.log(forTopDealsData)
forTopDealsData.forEach(el => {

    
    
    TopDeals_html += `
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

TopDeals_itemEl.innerHTML = TopDeals_html


let cardBtnRightTD = document.getElementById("card-btn-right9") 
let cardBtnLeftTD = document.getElementById("card-btn-left9") 
cardBtnLeftTD.style.display = "none" 



cardBtnRightTD.addEventListener("click", function(){
    TopDeals_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightTD.style.display = "none" 
    cardBtnLeftTD.style.display="block" 
  }) 
  
  cardBtnLeftTD.addEventListener("click", function(){ 
    TopDeals_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightTD.style.display = "block" 
    cardBtnLeftTD.style.display = "none" 
  })

/*** Books, Toys & More***/
let BooksToys_itemEl = document.querySelector(".BooksToys_product_item")
let BooksToys_html = ""

console.log(forBooksToysData)
forBooksToysData.forEach(el => {

    
    
    BooksToys_html += `
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

BooksToys_itemEl.innerHTML = BooksToys_html


let cardBtnRightBT = document.getElementById("card-btn-right10") 
let cardBtnLeftBT = document.getElementById("card-btn-left10") 
cardBtnLeftBT.style.display = "none" 



cardBtnRightBT.addEventListener("click", function(){
    BooksToys_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightBT.style.display = "none" 
    cardBtnLeftBT.style.display="block" 
  }) 
  
  cardBtnLeftBT.addEventListener("click", function(){ 
    BooksToys_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightBT.style.display = "block" 
    cardBtnLeftBT.style.display = "none" 
  })
/*** Pick Your Styles***/
let PickYourStyles_itemEl = document.querySelector(".PickYourStyles_product_item")
let PickYourStyles_html = ""

console.log(forPickYourStylesData)
forPickYourStylesData.forEach(el => {

    
    
    PickYourStyles_html += `
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

PickYourStyles_itemEl.innerHTML = PickYourStyles_html



let cardBtnRightPYC = document.getElementById("card-btn-right11") 
let cardBtnLeftPYC = document.getElementById("card-btn-left11") 
cardBtnLeftPYC.style.display = "none" 



cardBtnRightPYC.addEventListener("click", function(){
    PickYourStyles_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightPYC.style.display = "none" 
    cardBtnLeftPYC.style.display="block" 
  }) 
  
  cardBtnLeftPYC.addEventListener("click", function(){ 
    PickYourStyles_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightPYC.style.display = "block" 
    cardBtnLeftPYC.style.display = "none" 
  })
/*** Top Deals On TVs & Appliances ***/
let DealOnTVAppliances_itemEl = document.querySelector(".DealOnTVAppliances_product_item")
let DealOnTVAppliances_html = ""

console.log( forTopDealOnTVAppliancesData)
forTopDealOnTVAppliancesData.forEach(el => {

    
    
    DealOnTVAppliances_html += `
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

DealOnTVAppliances_itemEl.innerHTML = DealOnTVAppliances_html

let cardBtnRightDTA = document.getElementById("card-btn-right12") 
let cardBtnLeftDTA = document.getElementById("card-btn-left12") 
cardBtnLeftDTA.style.display = "none" 



cardBtnRightDTA.addEventListener("click", function(){
    DealOnTVAppliances_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightDTA.style.display = "none" 
    cardBtnLeftDTA.style.display="block" 
  }) 
  
  cardBtnLeftDTA.addEventListener("click", function(){ 
    DealOnTVAppliances_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightDTA.style.display = "block" 
    cardBtnLeftDTA.style.display = "none" 
  })


/*** Beauty, Food & More ***/
let BeautyFoodMore_itemEl = document.querySelector(".BeautyFoodMore_product_item")
let BeautyFoodMore_html = ""

console.log(forBeautyFoodMoreData)
forBeautyFoodMoreData.forEach(el => {

    
    
    BeautyFoodMore_html += `
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

BeautyFoodMore_itemEl.innerHTML = BeautyFoodMore_html


let cardBtnRightBFM = document.getElementById("card-btn-right13") 
let cardBtnLeftBFM = document.getElementById("card-btn-left13") 
cardBtnLeftBFM.style.display = "none" 



cardBtnRightBFM.addEventListener("click", function(){
    BeautyFoodMore_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightBFM.style.display = "none" 
    cardBtnLeftBFM.style.display="block" 
  }) 
  
  cardBtnLeftBFM.addEventListener("click", function(){ 
    BeautyFoodMore_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightBFM.style.display = "block" 
    cardBtnLeftBFM.style.display = "none" 
  })

/*** Fashion Best Sellers ***/
let FashionBestSellers_itemEl = document.querySelector(".FashionBestSellers_product_item")
let FashionBestSellers_html = ""

console.log(forFashionBestSellersData)
forFashionBestSellersData.forEach(el => {

    
    
    FashionBestSellers_html += `
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

FashionBestSellers_itemEl.innerHTML = FashionBestSellers_html



let cardBtnRightFBI = document.getElementById("card-btn-right14") 
let cardBtnLeftFBI = document.getElementById("card-btn-left14") 
cardBtnLeftFBI.style.display = "none" 



cardBtnRightFBI.addEventListener("click", function(){
    FashionBestSellers_itemEl.style.transform = "translateX(-65%)" 
    cardBtnRightFBI.style.display = "none" 
    cardBtnLeftFBI.style.display="block" 
  }) 
  
  cardBtnLeftFBI.addEventListener("click", function(){ 
    FashionBestSellers_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightFBI.style.display = "block" 
    cardBtnLeftFBI.style.display = "none" 
  })


/*** Furniture Bestsellers ***/
let FurnitureBestseller_itemEl = document.querySelector(".FurnitureBestseller_product_item")
let FurnitureBestseller_html = ""

console.log(forFurnitureBestsellerData)
forFurnitureBestsellerData.forEach(el => {

    
    
    FurnitureBestseller_html += `
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

FurnitureBestseller_itemEl.innerHTML = FurnitureBestseller_html


let cardBtnRightFBS = document.getElementById("card-btn-right15") 
let cardBtnLeftFBS = document.getElementById("card-btn-left15") 
cardBtnLeftFBS.style.display = "none" 



cardBtnRightFBS.addEventListener("click", function(){
    FurnitureBestseller_itemEl.style.transform = "translateX(-45%)" 
    cardBtnRightFBS.style.display = "none" 
    cardBtnLeftFBS.style.display="block" 
  }) 
  
  cardBtnLeftFBS.addEventListener("click", function(){ 
    FurnitureBestseller_itemEl.style.transform = "translatex(0%)" 
    cardBtnRightFBS.style.display = "block" 
    cardBtnLeftFBS.style.display = "none" 
  })


//   test nav

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
    <a href="../Cart-Page/CartPage.html"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
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


    const loggedIn= JSON.parse(localStorage.getItem("loggedIn"))||false;
    if (loggedIn==true) {
var arr=JSON.parse(localStorage.getItem("logininfo"))||[];
var xxl=arr[0].name;
logging(xxl);
    }
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
                        <div><p><i id="more-i" onClick="logout()" class="fa-solid fa-right-from-bracket" style="color: #2874f0"></i> Logout</p></div>
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


    // login test

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
            const loggedIn= JSON.parse(localStorage.getItem("loggedIn"))||false;
            localStorage.setItem("loggedIn",true);
            // document.getElementById("n-userName").textContent=elem.name;
            logging(elem.name);
            var modal = document.getElementById("myModal");
            modal.style.display="none";
            window.location.reload()
      
            // window.location.href = "index.html";
        }
        else
        {
            alert("wrong credentials")
        }
    })

}
function logout()
{
  console.log("logoutt");
  const loggedIn= JSON.parse(localStorage.getItem("loggedIn"))||false;
  localStorage.setItem("loggedIn",false);
  window.location.reload() 

}
