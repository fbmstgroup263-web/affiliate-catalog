const products = [
  {id:1,category:"Kitchen",name:{id:"Rak Piring Minimalis",en:"Minimal Dish Rack"},description:{id:"Membantu area cuci tetap rapi dan mudah dijangkau.",en:"Keep your washing area tidy and essentials within reach."},price:"Cek harga",tag:{id:"Pilihan dapur",en:"Kitchen pick"},image:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",affiliateUrl:""},
  {id:2,category:"Home Organization",name:{id:"Kotak Penyimpanan Serbaguna",en:"Multipurpose Storage Box"},description:{id:"Solusi praktis untuk menyimpan barang-barang kecil.",en:"A practical solution for organizing everyday essentials."},price:"Cek harga",tag:{id:"Ruang lebih rapi",en:"Neat spaces"},image:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",affiliateUrl:""},
  {id:3,category:"Bedroom",name:{id:"Lampu Tidur Estetik",en:"Ambient Bedside Lamp"},description:{id:"Ciptakan suasana kamar yang hangat dan menenangkan.",en:"Create a warm, calming atmosphere in your bedroom."},price:"Cek harga",tag:{id:"Cozy corner",en:"Cozy corner"},image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",affiliateUrl:""},
  {id:4,category:"Living Room",name:{id:"Bantal Dekorasi",en:"Decorative Cushion"},description:{id:"Sentuhan sederhana untuk mempercantik ruang keluarga.",en:"An easy accent to refresh your living space."},price:"Cek harga",tag:{id:"Detail pilihan",en:"Editor's detail"},image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",affiliateUrl:""},
  {id:5,category:"Cleaning Tools",name:{id:"Peralatan Bersih Praktis",en:"Everyday Cleaning Tool"},description:{id:"Bantu rutinitas bersih-bersih jadi lebih mudah.",en:"Make everyday cleaning routines a little easier."},price:"Cek harga",tag:{id:"Daily essential",en:"Daily essential"},image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",affiliateUrl:""},
  {id:6,category:"Home Appliances",name:{id:"Peralatan Elektronik Rumah",en:"Home Appliance Essential"},description:{id:"Pilihan fungsional untuk mendukung aktivitas harian.",en:"Functional picks to support your daily routine."},price:"Cek harga",tag:{id:"Praktis digunakan",en:"Made practical"},image:"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",affiliateUrl:""},
  {id:7,category:"Home Decoration",name:{id:"Vas Dekorasi Minimalis",en:"Minimalist Decorative Vase"},description:{id:"Elemen dekorasi simpel untuk sudut favorit di rumah.",en:"A simple decorative accent for your favorite corner."},price:"Cek harga",tag:{id:"Home accent",en:"Home accent"},image:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80",affiliateUrl:""},
  {id:8,category:"Kitchen",name:{id:"Wadah Dapur Serbaguna",en:"Multipurpose Kitchen Container"},description:{id:"Menjaga kebutuhan dapur tersimpan dengan lebih teratur.",en:"Keep kitchen essentials stored neatly and accessibly."},price:"Cek harga",tag:{id:"Kitchen essential",en:"Kitchen essential"},image:"https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",affiliateUrl:""}
];

const translations = {
 id:{
  announcement:"Pilihan praktis untuk rumah yang lebih nyaman",navHome:"Beranda",navCategories:"Kategori",navProducts:"Produk Pilihan",navAbout:"Tentang",headerCta:"Jelajahi",eyebrow:"THE HOME & LIVING EDIT",heroTitle:"Pilihan kecil,<br><em>perubahan besar</em><br>untuk rumah.",heroDescription:"Temukan produk fungsional dan inspiratif untuk membuat setiap sudut rumah terasa lebih nyaman.",exploreButton:"Jelajahi pilihan",categoryLink:"Lihat kategori",heroNote:"Dikurasi untuk kebutuhan sehari-hari",heroImageLabel:"Living, made thoughtful.",browseEyebrow:"TEMUKAN YANG KAMU BUTUHKAN",categoryTitle:"Jelajahi kategori",categorySubtitle:"Ide sederhana untuk hidup yang lebih tertata.",allCategories:"Semua pilihan",catKitchen:"Dapur",catOrganization:"Organisasi rumah",catBedroom:"Kamar tidur",catLiving:"Ruang keluarga",catCleaning:"Alat kebersihan",catAppliances:"Elektronik rumah",catDecoration:"Dekorasi rumah",curatedEyebrow:"PILIHAN RUANGPILIHAN",productTitle:"Temukan favoritmu",searchPlaceholder:"Cari produk...",sortFeatured:"Pilihan kami",sortAZ:"Nama A–Z",clearFilter:"Hapus filter ×",emptyTitle:"Belum ada produk ditemukan",emptyText:"Coba kata kunci atau kategori lainnya.",catalogNote:"Katalog ini akan terus diperbarui dengan pilihan produk lainnya.",aboutEyebrow:"TENTANG RUANGPILIHAN",aboutTitle:"Rumah nyaman dimulai dari pilihan yang tepat.",aboutText:"RuangPilihan membantu kamu menemukan inspirasi dan produk fungsional untuk kebutuhan rumah. Kami mengutamakan pilihan yang praktis, menarik, dan relevan untuk keseharian.",aboutLink:"Temukan pilihanmu ↗",newsletterEyebrow:"A LITTLE INSPIRATION",newsletterTitle:"Buat rumah terasa lebih kamu.",newsletterText:"Jelajahi ide dan rekomendasi pilihan untuk setiap ruang.",newsletterButton:"Jelajahi kategori ↗",footerTagline:"Discover Better Living. Temukan Pilihan Terbaik.",rights:"Hak cipta dilindungi.",disclosureLink:"Pengungkapan Afiliasi",disclosure:"Transparansi: beberapa tautan pada website ini merupakan tautan afiliasi. Kami dapat menerima komisi jika kamu melakukan pembelian melalui tautan tersebut, tanpa biaya tambahan bagimu.",viewProduct:"Lihat produk",checkPrice:"Cek harga",chooseCategory:"Kategori"
 },
 en:{
  announcement:"Thoughtful finds for a more comfortable home",navHome:"Home",navCategories:"Categories",navProducts:"Featured",navAbout:"About",headerCta:"Explore",eyebrow:"THE HOME & LIVING EDIT",heroTitle:"Small finds,<br><em>meaningful changes</em><br>for your home.",heroDescription:"Discover functional and inspiring products that make every corner of your home feel more comfortable.",exploreButton:"Explore the edit",categoryLink:"Browse categories",heroNote:"Curated for everyday living",heroImageLabel:"Living, made thoughtful.",browseEyebrow:"FIND WHAT YOU NEED",categoryTitle:"Explore categories",categorySubtitle:"Simple ideas for a more considered everyday.",allCategories:"All picks",catKitchen:"Kitchen",catOrganization:"Organization",catBedroom:"Bedroom",catLiving:"Living room",catCleaning:"Cleaning tools",catAppliances:"Home appliances",catDecoration:"Home decor",curatedEyebrow:"THE RUANGPILIHAN EDIT",productTitle:"Find your favorites",searchPlaceholder:"Search products...",sortFeatured:"Featured picks",sortAZ:"Name A–Z",clearFilter:"Clear filters ×",emptyTitle:"No products found",emptyText:"Try another keyword or category.",catalogNote:"Our catalog will keep growing with more thoughtful finds.",aboutEyebrow:"ABOUT RUANGPILIHAN",aboutTitle:"A comfortable home starts with thoughtful choices.",aboutText:"RuangPilihan helps you discover inspiration and functional products for your home. We focus on practical, appealing picks that feel relevant to everyday life.",aboutLink:"Find your next favorite ↗",newsletterEyebrow:"A LITTLE INSPIRATION",newsletterTitle:"Make your home feel more like you.",newsletterText:"Explore ideas and considered picks for every room.",newsletterButton:"Explore categories ↗",footerTagline:"Discover Better Living. Thoughtful Picks for Every Home.",rights:"All rights reserved.",disclosureLink:"Affiliate Disclosure",disclosure:"Transparency note: some links on this website are affiliate links. We may earn a commission if you make a purchase through these links, at no extra cost to you.",viewProduct:"View product",checkPrice:"Check price",chooseCategory:"Category"
 }
};

let currentLanguage="id";
let activeCategory="all";
const productGrid=document.getElementById("productGrid");
const searchInput=document.getElementById("searchInput");
const sortSelect=document.getElementById("sortSelect");
const emptyState=document.getElementById("emptyState");
const resultCount=document.getElementById("resultCount");
const clearFilter=document.getElementById("clearFilter");

function categoryName(category){
 const key={"Kitchen":"catKitchen","Home Organization":"catOrganization","Bedroom":"catBedroom","Living Room":"catLiving","Cleaning Tools":"catCleaning","Home Appliances":"catAppliances","Home Decoration":"catDecoration"}[category];
 return key ? translations[currentLanguage][key] : category;
}
function renderProducts(){
 const query=searchInput.value.trim().toLowerCase();
 let visible=products.filter(p=>{
  const matchesCategory=activeCategory==="all"||p.category===activeCategory;
  const matchesSearch=(p.name[currentLanguage]+" "+p.description[currentLanguage]+" "+p.category).toLowerCase().includes(query);
  return matchesCategory&&matchesSearch;
 });
 if(sortSelect.value==="az") visible.sort((a,b)=>a.name[currentLanguage].localeCompare(b.name[currentLanguage]));
 productGrid.innerHTML=visible.map(p=>`
  <article class="product-card">
   <div class="product-image"><img src="${p.image}" alt="${p.name[currentLanguage]}" loading="lazy" onerror="this.style.opacity='.0'"><span class="product-tag">${p.tag[currentLanguage]}</span></div>
   <div class="product-info">
    <div class="product-category">${categoryName(p.category)}</div>
    <h3 class="product-name">${p.name[currentLanguage]}</h3>
    <p class="product-description">${p.description[currentLanguage]}</p>
    <div class="product-bottom"><span class="product-price">${p.price}</span><button class="product-link" type="button" data-product-id="${p.id}">${translations[currentLanguage].viewProduct} <span>↗</span></button></div>
   </div>
  </article>`).join("");
 emptyState.hidden=visible.length!==0;
 resultCount.textContent=currentLanguage==="id"?`${visible.length} pilihan`:`${visible.length} picks`;
 document.querySelectorAll(".product-link").forEach(btn=>btn.addEventListener("click",()=>{
  const product=products.find(p=>p.id===Number(btn.dataset.productId));
  if(product.affiliateUrl){
   window.open(product.affiliateUrl,"_blank","noopener,noreferrer");
  }else{
   alert(currentLanguage==="id"?"Link affiliate untuk produk ini belum ditambahkan. Edit data produk di file script.js.":"The affiliate link for this product has not been added yet. Edit the product data in script.js.");
  }
 }));
}
function setLanguage(lang){
 currentLanguage=lang;
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{
  const key=el.dataset.i18n;
  if(translations[lang][key]) el.innerHTML=translations[lang][key];
 });
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
  const key=el.dataset.i18nPlaceholder;
  if(translations[lang][key]) el.placeholder=translations[lang][key];
 });
 document.getElementById("languageToggle").innerHTML=lang==="id"?"<strong>ID</strong> <span>/</span> EN":"ID <span>/</span> <strong>EN</strong>";
 renderProducts();
}
document.getElementById("languageToggle").addEventListener("click",()=>setLanguage(currentLanguage==="id"?"en":"id"));
searchInput.addEventListener("input",renderProducts);
sortSelect.addEventListener("change",renderProducts);
document.querySelectorAll(".category-tile").forEach(btn=>btn.addEventListener("click",()=>{
 activeCategory=btn.dataset.category;
 document.querySelectorAll(".category-tile").forEach(item=>item.classList.toggle("active",item===btn));
 renderProducts();
 document.getElementById("products").scrollIntoView({behavior:"smooth",block:"start"});
}));
clearFilter.addEventListener("click",()=>{
 activeCategory="all";searchInput.value="";sortSelect.value="featured";
 document.querySelectorAll(".category-tile").forEach(item=>item.classList.toggle("active",item.dataset.category==="all"));
 renderProducts();
});
const menuToggle=document.getElementById("menuToggle");
menuToggle.addEventListener("click",()=>{
 let nav=document.querySelector(".mobile-nav");
 if(!nav){
  nav=document.createElement("nav");nav.className="mobile-nav";
  nav.innerHTML='<a href="#home">Home / Beranda</a><a href="#categories">Categories / Kategori</a><a href="#products">Featured / Produk</a><a href="#about">About / Tentang</a>';
  document.querySelector(".site-header").appendChild(nav);
 }
 nav.classList.toggle("open");
 menuToggle.setAttribute("aria-expanded",nav.classList.contains("open")?"true":"false");
});
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();
