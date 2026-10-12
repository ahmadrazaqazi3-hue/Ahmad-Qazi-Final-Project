/* =====================================================
   SIRF YAHAN SE SAB KUCH CHANGE KAREIN
   (naam, phone, images, categories, footer)
   ===================================================== */
const SITE = {
  name: "Qazi Printing Press",                 // <-- apni press ka naam
  logo: "images/Logo_Mockup_1.png",            // <-- apna logo yahan
  branch: "Sukkur Branch",
  timing: "11:00 AM - 7:00 PM",
  phone: "0303 2470597",
  whatsapp: "+92-312-1313191",
  email: "qazipresssuk@gmail.com",
  address: "Frere Road Green Bakers Sukkur",
  notice: "7-8 working days dispatch time after final approval. Small order quantity ke saath ground color prints na lagayein. Hard boxes ke liye 15-20 working days.",
  about: "Hum choti aur bari businesses ko behtareen printing aur packaging services dete hain.",
  slideInterval: 4000                 // milliseconds (4000 = 4 second)
};

/* Header menu */
const NAV = [
  { text: "Bundles",            link: "#" },
  { text: "All",                link: "#" },
  { text: "Wedding Specials",   link: "#" },
  { text: "Clothing Packaging", link: "#" },
  { text: "Office Stationery",  link: "#" },
  { text: "Corporate Giveaways",link: "#" },
  { text: "Stickers",           link: "#" },
  { text: "Label and Hang Tags",link: "#" },
  { text: "Packaging",          link: "#" },
  { text: "How to Order",       link: "about.html" }
];

/* Shuru ki moving pictures (slider).
   Nai slide: images/slides/ mein photo rakhein aur yahan ek line add karein */
const SLIDES = [
  { image: "images/slides/Custom Printed Ziplock Bags.jfif", title: "Custom Printed Ziplock Bags", text: "Apne brand ko premium printed bags ke saath dikhayein.", button: "Order Now", link: "#" },
  { image: "images/slides/Custom Printed T-Shirts.jpg", title: "Custom Printed T-Shirts",     text: "Apni picture, logo ya quote print karwayein.",          button: "Order Now", link: "#" },
  { image: "images/slides/Customized Wedding Invitations.jfif", title: "Customized Wedding Invitations", text: "Khoobsurat shadi ke cards.",                          button: "Order Now", link: "#" },
  { image: "images/slides/Customized Business Cards.webp", title: "Customized Business Cards",   text: "Premium quality cards, apke brand ke liye.",            button: "Get Quote", link: "#" },
  { image: "images/slides/Custom Velvet Boxes.webp", title: "Custom Velvet Boxes",         text: "Luxury packaging apki products ke liye.",               button: "Order Now", link: "#" },
  { image: "images/slides/Brand Identity.webp", title: "Brand Identity",              text: "Promotional items jo apko alag dikhayen.",              button: "Order Now", link: "#" }
];

/* Pehla category grid */
const CATEGORIES = [
  { name: "Fabric Tags",        image: "images/products/Fabrics Tags.webp",     link: "#" },
  { name: "Ecommerce Boxes",    image: "images/products/E commerce boxes.jfif", link: "#" },
  { name: "Standup Pouches",    image: "images/products/Standup poches.webp", link: "#" },
  { name: "Hard Drawer Boxes",  image: "images/products/Drawer boxes.webp",    link: "#" },
  { name: "Shopping Bags",      image: "images/products/shopping bags.webp",   link: "#" },
  { name: "Courier Flyer Poly Bags", image: "images/products/flyer polybags.webp", link: "#" },
  { name: "Wedding Cards",      image: "images/products/Wedding Cards.webp",   link: "#" },
  { name: "Mugs",               image: "images/products/Mugs.webp",            link: "#" }
];

/* Best selling products */
const BEST_SELLING = [
  { name: "Stickers",        image: "images/products/Sticker pic.webp",        link: "#" },
  { name: "Ribbons",         image: "images/products/Ribbion.jfif",         link: "#" },
  { name: "Butter Paper",    image: "images/products/Butter Paper.webp",    link: "#" },
  { name: "Jewellery Cards", image: "images/products/Jeweller Cards.webp", link: "#" },
  { name: "Photo Prints",    image: "images/products/photo prints.webp",    link: "#" },
  { name: "Business Cards",  image: "images/products/bussiness cards.webp",  link: "#" },
  { name: "Label and Hang Tags", image: "images/products/hands tags.webp",   link: "#" },
  { name: "Thankyou Cards",  image: "images/products/thank you cards.webp",  link: "#" }
];

/* Footer */
const FOOTER_PAGES = [
  { text: "About Us", link: "about.html" },
  { text: "Contact Us", link: "about.html#contact" },
  { text: "How to place order", link: "about.html" },
  { text: "Privacy Policy", link: "#" },
  { text: "Refund and Returns Policy", link: "#" },
  { text: "Shipping Policy", link: "#" },
  { text: "Terms and Conditions", link: "#" }
];
const COURIERS = ["TCS", "Daewoo FastEx", "UPS"];
