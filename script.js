
const products = [
  {
    id: 1,
    category: "Kitchen",
    name: {
      id: "AYLIAO Rak Piring Wastafel Tertutup",
      en: "AYLIAO Covered Sink Dish Rack"
    },
    description: {
      id: "Rak piring dengan kabinet dan baki air untuk membantu area dapur tetap rapi.",
      en: "A covered dish rack with cabinet and water tray to keep your kitchen organized."
    },
    price: "Cek harga",
    tag: { id: "Pilihan dapur", en: "Kitchen pick" },
    image: "images/ayliao-rak-piring.jpg",
    affiliateLinks: [
      { marketplace: "Shopee", url: "https://s.shopee.co.id/5LDcPQL2D9" }
    ]
  },
  {
    id: 2,
    category: "Kitchen",
    name: {
      id: "Dispenser Sabun Cuci Piring 2-in-1 / 3-in-1",
      en: "2-in-1 / 3-in-1 Dish Soap Dispenser"
    },
    description: {
      id: "Dispenser sabun dengan holder spons, praktis untuk kebutuhan wastafel.",
      en: "A practical dish soap dispenser with sponge holder for your kitchen sink."
    },
    price: "Cek harga",
    tag: { id: "Praktis digunakan", en: "Everyday essential" },
   image: "images/dispenser-sabun.jpg",
    affiliateLinks: [
      { marketplace: "Shopee", url: "https://s.shopee.co.id/5AuCDCFBHZ" }
    ]
  },
  {
    id: 3,
    category: "Kitchen",
    name: {
      id: "Qiek Food Container Stainless Steel 304 Set 10 PCS",
      en: "Qiek Stainless Steel 304 Food Container Set"
    },
    description: {
      id: "Wadah penyimpanan makanan berbahan stainless steel 304 dengan tutup.",
      en: "Stainless steel 304 food storage containers with lids."
    },
    price: "Cek harga",
    tag: { id: "Kitchen essential", en: "Kitchen essential" },
    image: "images/qiek-food-container.jpg",
    affiliateLinks: [
      { marketplace: "Shopee", url: "https://s.shopee.co.id/gRmqzm1Ja" }
    ]
  },
  {
    id: 4,
    category: "Cleaning Tools",
    name: {
      id: "Tempat Sampah Rumah Minimalis",
      en: "Minimalist Household Trash Bin"
    },
    description: {
      id: "Tempat sampah minimalis untuk menjaga ruangan tetap bersih dan tertata.",
      en: "A minimalist trash bin to help keep your space clean and organized."
    },
    price: "Cek harga",
    tag: { id: "Rumah lebih rapi", en: "Neat spaces" },
    image: "images/tempat-sampah-minimalis.jpg",
    affiliateLinks: [
      { marketplace: "Tokopedia", url: "https://tk.tokopedia.com/ZSpwQP9CN/" }
    ]
  },
  {
    id: 5,
    category: "Cleaning Tools",
    name: {
      id: "FurniBox Tempat Sampah MidNight",
      en: "FurniBox MidNight Trash Bin"
    },
    description: {
      id: "Pilihan tempat sampah dengan desain minimalis untuk kebutuhan rumah.",
      en: "A minimalist-style trash bin for everyday household needs."
    },
    price: "Cek harga",
    tag: { id: "Pilihan rumah", en: "Home pick" },
    image: "images/tempat-sampah-furnibox-midnigh.jpg",
    affiliateLinks: [
      { marketplace: "Tokopedia", url: "https://tk.tokopedia.com/ZSpwQU4b6/" }
    ]
  },
  {
    id: 6,
    category: "Bedroom",
    name: {
      id: "Lampu Tidur Estetik",
      en: "Ambient Bedside Lamp"
    },
    description: {
      id: "Ciptakan suasana kamar yang hangat dan menenangkan.",
      en: "Create a warm, calming atmosphere in your bedroom."
    },
    price: "Cek harga",
    tag: { id: "Cozy corner", en: "Cozy corner" },
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    affiliateLinks: []
  },
  {
    id: 7,
    category: "Living Room",
    name: {
      id: "Bantal Dekorasi",
      en: "Decorative Cushion"
    },
    description: {
      id: "Sentuhan sederhana untuk mempercantik ruang keluarga.",
      en: "An easy accent to refresh your living space."
    },
    price: "Cek harga",
    tag: { id: "Detail pilihan", en: "Editor's detail" },
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    affiliateLinks: []
  },
  {
    id: 8,
    category: "Home Organization",
    name: {
      id: "Kotak Penyimpanan Serbaguna",
      en: "Multipurpose Storage Box"
    },
    description: {
      id: "Solusi praktis untuk menyimpan barang-barang kecil.",
      en: "A practical solution for organizing everyday essentials."
    },
    price: "Cek harga",
    tag: { id: "Ruang lebih rapi", en: "Neat spaces" },
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    affiliateLinks: []
  }
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

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();

  let visible = products.filter(p => {
    const matchesCategory =
      activeCategory === "all" || p.category === activeCategory;

    const matchesSearch =
      (
        p.name[currentLanguage] + " " +
        p.description[currentLanguage] + " " +
        p.category
      ).toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (sortSelect.value === "az") {
    visible.sort((a, b) =>
      a.name[currentLanguage].localeCompare(b.name[currentLanguage])
    );
  }

  productGrid.innerHTML = visible.map(p => {
    const affiliateButtons = p.affiliateLinks.length
      ? p.affiliateLinks.map(link => `
          <a
            class="product-link"
            href="${link.url}"
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            ${link.marketplace} ↗
          </a>
        `).join("")
      : `
          <span class="product-link">
            ${currentLanguage === "id"
              ? "Link segera hadir"
              : "Link coming soon"}
          </span>
        `;

    return `
      <article class="product-card">
        <div class="product-image">
          <img
            src="${p.image}"
            alt="${p.name[currentLanguage]}"
            loading="lazy"
            onerror="this.style.opacity='0'"
          >
          <span class="product-tag">${p.tag[currentLanguage]}</span>
        </div>

        <div class="product-info">
          <div class="product-category">
            ${categoryName(p.category)}
          </div>

          <h3 class="product-name">
            ${p.name[currentLanguage]}
          </h3>

          <p class="product-description">
            ${p.description[currentLanguage]}
          </p>

          <div class="product-bottom">
            <span class="product-price">${p.price}</span>
            <div class="affiliate-buttons">
              ${affiliateButtons}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  emptyState.hidden = visible.length !== 0;

  resultCount.textContent = currentLanguage === "id"
    ? `${visible.length} pilihan`
    : `${visible.length} picks`;
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
