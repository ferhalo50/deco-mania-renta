/*
  DECOMANIA WEBSITE SETTINGS
  1) Replace the product image files in /img when you receive real photos.
  2) Edit product names, descriptions and prices below.
  3) Leave price as "Quote on WhatsApp" if the price depends on the event.
*/

const state = { language: "en" };

const whatsappNumber = "526647316937";
const whatsappMessages = {
  en: "Hello DecoMania! I’m interested in a quote or more information about your event decor rentals.",
  es: "¡Hola DecoMania! Me interesa recibir una cotización o más información sobre sus decoraciones y rentas para eventos."
};

const emailAddress = "decomania.tj@gmail.com";
const emailSubjects = {
  en: "Quote request - DecoMania Rentas",
  es: "Solicitud de cotización - DecoMania Rentas"
};
const emailBodies = {
  en: "Hello DecoMania,%0D%0A%0D%0AI'm interested in getting a quote or more information about your event decoration and rental services.%0D%0A%0D%0AEvent date:%0D%0ACity:%0D%0AType of event:%0D%0AInterested items/services:%0D%0AAdditional details:%0D%0A%0D%0AThank you!",
  es: "Hola DecoMania,%0D%0A%0D%0AMe interesa recibir una cotización o más información sobre sus servicios de decoración y renta para eventos.%0D%0A%0D%0AFecha del evento:%0D%0ACiudad:%0D%0ATipo de evento:%0D%0AArtículos/servicios de interés:%0D%0ADetalles adicionales:%0D%0A%0D%0AGracias!"
};

const productData = {
  rentals: [
    {
      // Add your 3 Balloon Arch photos here. Keep the first file name as the cover image.
      images: ["img/Catalogo/Letrero1.png", "img/Catalogo/Letrero2.png", "img/Catalogo/Letrero3.png"],
      tag: { en: "Rental", es: "Renta" },
      name: { en: "LED sign", es: "Letrero led" },
      description: { en: "Decorative illuminated sign to give your event a special touch. Ideal for messages, names, phrases, or photo areas.", es: "Letrero luminoso decorativo para darle un toque especial a tu evento. Ideal para mensajes, nombres, frases o áreas de fotos." },
      priceLabel: { en: "Price", es: "Precio" },
      price: { en: "Quote on WhatsApp", es: "Cotizar por WhatsApp" }
    },
    {
      // Add 7 Backdrop Set photos here.
      images: ["img/Catalogo/Mampara0.png", "img/Catalogo/Mampara1.png", "img/Catalogo/Mampara2.png", "img/Catalogo/Mampara3.png", "img/Catalogo/Mampara4.png", "img/Catalogo/Mampara5.png", "img/Catalogo/Mampara6.png"],
      tag: { en: "Rental", es: "Renta" },
      name: { en: "Partition / room divider", es: "Mampara" },
      description: { en: "Decorative panel that works as a backdrop or focal point for your event. It can complement balloons, signs, flowers, and customized themes.", es: "Panel decorativo que funciona como fondo o punto focal para tu evento. Puede complementar globos, letreros, flores y temáticas personalizadas." },
      priceLabel: { en: "Price", es: "Precio" },
      price: { en: "Quote on WhatsApp", es: "Cotizar por WhatsApp" }
    },
    {
      // Add 8 Event Furniture photos here.
      images: ["img/Catalogo/shimmerwall1.png", "img/Catalogo/shimmerwall2.png", "img/Catalogo/shimmerwall3.png", "img/Catalogo/shimmerwall4.png", "img/Catalogo/shimmerwall5.png", "img/Catalogo/shimmerwall6.png", "img/Catalogo/shimmerwall7.png", "img/Catalogo/shimmerwall8.png"],
      tag: { en: "Rental", es: "Renta" },
      name: { en: "Shimmer Wall", es: "Paneles Brillantes" },
      description: { en: "Shiny sequin backdrop that reflects light and looks amazing in photos. Perfect for birthdays, main tables, entrances, and photo sessions.", es: "Fondo brillante de lentejuelas que refleja la luz y luce increíble en fotos. Perfecto para cumpleaños, mesas principales, entradas y sesiones de fotos." },
      priceLabel: { en: "Price", es: "Precio" },
      price: { en: "Quote on WhatsApp", es: "Cotizar por WhatsApp" }
    }
  ],
  catalog: [
    {
      // Same 3 Balloon Arch images are repeated in the full catalog.
      images: ["img/Catalogo/Letrero1.png", "img/Catalogo/Letrero2.png", "img/Catalogo/Letrero3.png"],
      tag: { en: "Rental", es: "Renta" },
      name: { en: "LED sign", es: "Letrero led" },
      description: { en: "Decorative illuminated sign to give your event a special touch. Ideal for messages, names, phrases, or photo areas.", es: "Letrero luminoso decorativo para darle un toque especial a tu evento. Ideal para mensajes, nombres, frases o áreas de fotos." },
      priceLabel: { en: "Price", es: "Precio" },
      price: { en: "Quote on WhatsApp", es: "Cotizar por WhatsApp" }
    },
    {
      // Same 7 Backdrop Set images are repeated in the full catalog.
      images: ["img/Catalogo/Mampara0.png", "img/Catalogo/Mampara1.png", "img/Catalogo/Mampara2.png", "img/Catalogo/Mampara3.png", "img/Catalogo/Mampara4.png", "img/Catalogo/Mampara5.png", "img/Catalogo/Mampara6.png"],
      tag: { en: "Rental", es: "Renta" },
      name: { en: "Partition / room divider", es: "Mampara" },
      description: { en: "Decorative panel that works as a backdrop or focal point for your event. It can complement balloons, signs, flowers, and customized themes.", es: "Panel decorativo que funciona como fondo o punto focal para tu evento. Puede complementar globos, letreros, flores y temáticas personalizadas." },
      priceLabel: { en: "Price", es: "Precio" },
      price: { en: "Quote on WhatsApp", es: "Cotizar por WhatsApp" }
    },
    {
      // Same 8 Event Furniture images are repeated in the full catalog.
      images: ["img/Catalogo/shimmerwall1.png", "img/Catalogo/shimmerwall2.png", "img/Catalogo/shimmerwall3.png", "img/Catalogo/shimmerwall4.png", "img/Catalogo/shimmerwall5.png", "img/Catalogo/shimmerwall6.png", "img/Catalogo/shimmerwall7.png", "img/Catalogo/shimmerwall8.png"],
      tag: { en: "Rental", es: "Renta" },
      name: { en: "Shimmer Wall", es: "Paneles Brillantes" },
      description: { en: "Shiny sequin backdrop that reflects light and looks amazing in photos. Perfect for birthdays, main tables, entrances, and photo sessions.", es: "Fondo brillante de lentejuelas que refleja la luz y luce increíble en fotos. Perfecto para cumpleaños, mesas principales, entradas y sesiones de fotos." },
      priceLabel: { en: "Price", es: "Precio" },
      price: { en: "Quote on WhatsApp", es: "Cotizar por WhatsApp" }
    },
    {
      // Add 10 photos for the extra catalog item here.
      images: ["img/Catalogo/Cilindrosymesas1.png", "img/Catalogo/Cilindrosymesas2.png", "img/Catalogo/Cilindrosymesas3.png", "img/Catalogo/Cilindrosymesas4.png", "img/Catalogo/Cilindrosymesas5.png", "img/Catalogo/Cilindrosymesas6.png"],
      tag: { en: "Party item", es: "Artículo de fiesta" },
      name: { en: "Cylinders and tables", es: "Cilindros y mesas" },
      description: { en: "Decorative bases and tables, ideal for cakes, sweets, party favors, or themed arrangements. They help create an elegant display with different levels.", es: "Bases y mesas decorativas ideales para pastel, dulces, recuerdos o arreglos temáticos. Ayudan a crear un montaje elegante y con diferentes niveles." },
      priceLabel: { en: "Price", es: "Precio" },
      price: { en: "Quote on WhatsApp", es: "Cotizar por WhatsApp" }
    }
  ]
};

const translations = {
  en: {
    skipLink: "Skip to content",
    navHome: "Home",
    navAbout: "About",
    navRentals: "Rentals",
    navCatalog: "Catalog",
    navCoverage: "Coverage",
    navContact: "Contact",
    navQuote: "Get a quote",
    heroEyebrow: "Tijuana & Rosarito event rentals",
    heroTitle: "Your celebration,<br><em>styled with magic.</em>",
    heroText: "Thoughtful event styling, dreamy balloon décor, backdrops and furniture rentals made to turn your special moments into memories.",
    heroCta: "Plan my event",
    heroSecondary: "Explore the catalog",
    heroPoint1: "Balloons",
    heroPoint2: "Backdrops",
    heroPoint3: "Furniture rentals",
    heroNoteTop: "Made for your moment",
    heroNoteBottom: "Styled with love",
    introStrip: "Event decoration · Balloons · Backdrops · Furniture rentals",
    introLink: "Follow our creations",
    aboutEyebrow: "Meet DecoMania",
    aboutTitle: "Details that make a celebration feel <em>unforgettable.</em>",
    aboutText1: "DecoMania Rentas is an event decoration and rental studio created by <strong>Yedid Lemus</strong>. We design charming spaces for birthdays, celebrations and special gatherings with color, personality and care.",
    aboutText2: "From balloon arrangements and backdrops to furniture rentals and party items, each detail is selected to help bring your vision to life.",
    aboutMiniStrong: "Every event deserves",
    aboutMiniText: "its own magic.",
    founderPrefix: "Founded by",
    servicesEyebrow: "What we do",
    servicesTitle: "Everything your event needs to <em>shine.</em>",
    servicesText: "Choose the details you love and we will help you build a celebration that feels completely yours.",
    service1Title: "Event decoration",
    service1Text: "Creative styling for birthdays, celebrations and unforgettable moments.",
    service2Title: "Balloon décor",
    service2Text: "Balloon arches, arrangements and colorful accents made for photos.",
    service3Title: "Backdrops & focal points",
    service3Text: "Beautiful focal pieces that create the perfect event setting.",
    service4Title: "Furniture rentals",
    service4Text: "Practical and stylish furniture options for your celebration setup.",
    rentalsEyebrow: "Rental collection",
    rentalsTitle: "Three ways to make your event <em>more special.</em>",
    rentalsText: "Browse our featured rental options. Contact us on WhatsApp for availability, combinations and your personalized quote.",
    quoteBannerEyebrow: "Have an idea in mind?",
    quoteBannerTitle: "Let’s give it that <em>DecoMania touch.</em>",
    quoteBannerCta: "Talk to us",
    catalogEyebrow: "Full collection",
    catalogTitle: "Explore all available <em>party pieces.</em>",
    catalogText: "This visual catalog is a guide to our current options. Every event is different, so availability and final pricing are confirmed directly with DecoMania.",
    catalogNotice: "Prices and availability are confirmed by WhatsApp. Replace the sample names, photos and prices in <strong>app.js</strong> whenever your inventory changes.",
    coverageEyebrow: "Coverage area",
    coverageTitle: "Bringing DecoMania to <em>Tijuana & Rosarito.</em>",
    coverageText: "We proudly serve celebrations in Tijuana, Baja California and Rosarito. Tell us where your event will be and we will guide you through the next steps.",
    coverageCity1: "Baja California, MX",
    coverageCity2: "Baja California, MX",
    coverageCta: "Ask about your location",
    mapOverlay: "DecoMania coverage",
    mapOverlayBottom: "Tijuana · Rosarito",
    contactEyebrow: "Let’s celebrate",
    contactTitle: "Ready to design something <em>beautiful?</em>",
    contactText: "Send us your event date, city and a few details about your idea. We will be happy to guide you with a personalized quote.",
    contactCta: "Request a quote on WhatsApp",
    emailLabel: "Email",
    socialHint: "Follow DecoMania Rentas",
    footerText: "Decoration, balloon décor, backdrops and furniture rentals for special moments.",
    backToTop: "Back to top",
    floatingWhatsapp: "WhatsApp us"
  },
  es: {
    skipLink: "Saltar al contenido",
    navHome: "Inicio",
    navAbout: "Nosotros",
    navRentals: "Rentas",
    navCatalog: "Catálogo",
    navCoverage: "Cobertura",
    navContact: "Contacto",
    navQuote: "Cotizar",
    heroEyebrow: "Rentas para eventos en Tijuana y Rosarito",
    heroTitle: "Tu celebración,<br><em>decorada con magia.</em>",
    heroText: "Decoración pensada con amor, globos de ensueño, backdrops y renta de mobiliario para convertir tus momentos especiales en recuerdos inolvidables.",
    heroCta: "Planea mi evento",
    heroSecondary: "Ver catálogo",
    heroPoint1: "Globos",
    heroPoint2: "Backdrops",
    heroPoint3: "Renta de mobiliario",
    heroNoteTop: "Hecho para tu momento",
    heroNoteBottom: "Decorado con amor",
    introStrip: "Decoración de eventos · Globos · Backdrops · Renta de mobiliario",
    introLink: "Sigue nuestras creaciones",
    aboutEyebrow: "Conoce DecoMania",
    aboutTitle: "Detalles que hacen una celebración <em>inolvidable.</em>",
    aboutText1: "DecoMania Rentas es un estudio de decoración y renta para eventos creado por <strong>Yedid Lemus</strong>. Diseñamos espacios encantadores para cumpleaños, celebraciones y reuniones especiales con color, personalidad y cariño.",
    aboutText2: "Desde arreglos de globos y backdrops hasta renta de mobiliario y artículos para fiestas, cada detalle se elige para ayudar a hacer realidad tu idea.",
    aboutMiniStrong: "Cada evento merece",
    aboutMiniText: "su propia magia.",
    founderPrefix: "Fundadora",
    servicesEyebrow: "Lo que hacemos",
    servicesTitle: "Todo lo que tu evento necesita para <em>brillar.</em>",
    servicesText: "Elige los detalles que te gusten y te ayudaremos a crear una celebración que se sienta completamente tuya.",
    service1Title: "Decoración de eventos",
    service1Text: "Diseños creativos para cumpleaños, celebraciones y momentos inolvidables.",
    service2Title: "Decoración con globos",
    service2Text: "Arcos, arreglos y acentos coloridos creados para lucir en tus fotos.",
    service3Title: "Backdrops y puntos focales",
    service3Text: "Piezas bonitas que crean el escenario perfecto para tu evento.",
    service4Title: "Renta de mobiliario",
    service4Text: "Opciones prácticas y elegantes para completar tu montaje.",
    rentalsEyebrow: "Colección de rentas",
    rentalsTitle: "Tres maneras de hacer tu evento <em>aún más especial.</em>",
    rentalsText: "Conoce nuestras opciones destacadas de renta. Escríbenos por WhatsApp para confirmar disponibilidad, combinaciones y tu cotización personalizada.",
    quoteBannerEyebrow: "¿Tienes una idea en mente?",
    quoteBannerTitle: "Démosle ese <em>toque DecoMania.</em>",
    quoteBannerCta: "Escríbenos",
    catalogEyebrow: "Colección completa",
    catalogTitle: "Conoce todos los <em>artículos disponibles.</em>",
    catalogText: "Este catálogo visual es una guía de las opciones disponibles. Cada evento es diferente, por eso la disponibilidad y el precio final se confirman directamente con DecoMania.",
    catalogNotice: "Precios y disponibilidad se confirman por WhatsApp. Reemplaza los nombres, fotos y precios de ejemplo en <strong>app.js</strong> cuando cambie tu inventario.",
    coverageEyebrow: "Área de cobertura",
    coverageTitle: "Llevamos DecoMania a <em>Tijuana y Rosarito.</em>",
    coverageText: "Con gusto atendemos celebraciones en Tijuana, Baja California y Rosarito. Cuéntanos dónde será tu evento y te orientamos con los siguientes pasos.",
    coverageCity1: "Baja California, MX",
    coverageCity2: "Baja California, MX",
    coverageCta: "Pregunta por tu ubicación",
    mapOverlay: "Cobertura DecoMania",
    mapOverlayBottom: "Tijuana · Rosarito",
    contactEyebrow: "Celebremos",
    contactTitle: "¿Lista para diseñar algo <em>bonito?</em>",
    contactText: "Envíanos la fecha, ciudad y algunos detalles de tu idea. Con gusto te ayudamos con una cotización personalizada.",
    contactCta: "Cotizar por WhatsApp",
    emailLabel: "Correo",
    socialHint: "Sigue a DecoMania Rentas",
    footerText: "Decoración, globos, fondos y renta de mobiliario para momentos especiales.",
    backToTop: "Subir",
    floatingWhatsapp: "WhatsApp"
  }
};

function getWhatsAppUrl(language, productName = "") {
  const suffix = productName
    ? (language === "es" ? ` Me interesa: ${productName}.` : ` I’m interested in: ${productName}.`)
    : "";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessages[language] + suffix)}`;
}

function getMailtoUrl(language) {
  return `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubjects[language])}&body=${emailBodies[language]}`;
}

const galleryState = {
  fallbackImage: "img/Catalogo/Letrero1.png",
  timers: [],
  activeImages: [],
  activeIndex: 0,
  activeTitle: ""
};

function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = products.map((product, productIndex) => {
    const itemName = product.name[state.language];
    const images = product.images || [];
    const total = images.length;

    return `
      <article class="product-card reveal is-visible">
        <div class="product-image product-gallery" data-gallery='${JSON.stringify(images).replace(/'/g, "&#39;")}' data-title="${itemName.replace(/"/g, "&quot;")}" data-index="0">
          <img src="${images[0] || galleryState.fallbackImage}" alt="${itemName}" loading="lazy" onerror="this.onerror=null; this.src='${galleryState.fallbackImage}'" />
          <span class="product-tag">${product.tag[state.language]}</span>
          ${total > 1 ? `
            <button class="gallery-control gallery-prev" type="button" aria-label="${state.language === "es" ? "Foto anterior" : "Previous photo"}">‹</button>
            <button class="gallery-control gallery-next" type="button" aria-label="${state.language === "es" ? "Siguiente foto" : "Next photo"}">›</button>
            <span class="gallery-counter">1 / ${total}</span>
          ` : ""}
          <button class="gallery-open" type="button" aria-label="${state.language === "es" ? "Abrir galería" : "Open gallery"}">
            <span>⌕</span>
          </button>
        </div>
        <div class="product-body">
          <h3>${itemName}</h3>
          <p>${product.description[state.language]}</p>
          <div class="product-bottom">
            <span class="product-price"><small>${product.priceLabel[state.language]}</small><strong>${product.price[state.language]}</strong></span>
            <a class="product-quote" href="${getWhatsAppUrl(state.language, itemName)}" target="_blank" rel="noopener" aria-label="${state.language === "es" ? "Cotizar" : "Request a quote"} ${itemName}">↗</a>
          </div>
        </div>
      </article>`;
  }).join("");

  initializeProductGalleries(container);
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const preload = new Image();
    preload.onload = () => resolve(src);
    preload.onerror = () => reject(new Error(`Could not load: ${src}`));
    preload.src = src;
  });
}

function updateGalleryCounter(gallery, index, total) {
  const counter = gallery.querySelector(".gallery-counter");
  if (counter) counter.textContent = `${index + 1} / ${total}`;
}

function setGalleryImage(gallery, nextIndex) {
  const images = JSON.parse(gallery.dataset.gallery || "[]");
  const image = gallery.querySelector("img");
  if (!images.length || !image || gallery.dataset.loading === "true") return;

  const normalizedIndex = (nextIndex + images.length) % images.length;
  const nextSrc = images[normalizedIndex];
  if (!nextSrc || nextSrc === image.getAttribute("src")) return;

  gallery.dataset.loading = "true";
  gallery.classList.add("is-loading-next");

  preloadImage(nextSrc)
    .then(() => {
      image.classList.add("is-changing");
      window.setTimeout(() => {
        image.src = nextSrc;
        image.alt = `${gallery.dataset.title} — ${normalizedIndex + 1}`;
        gallery.dataset.index = String(normalizedIndex);
        updateGalleryCounter(gallery, normalizedIndex, images.length);
        requestAnimationFrame(() => image.classList.remove("is-changing"));
        gallery.classList.remove("is-loading-next");
        gallery.dataset.loading = "false";
      }, 130);
    })
    .catch(() => {
      // Keep the current visible image if a file is missing; never flash a gray box.
      gallery.classList.remove("is-loading-next");
      gallery.dataset.loading = "false";
    });
}

function initializeProductGalleries(container) {
  container.querySelectorAll(".product-gallery").forEach((gallery) => {
    const images = JSON.parse(gallery.dataset.gallery || "[]");
    if (images.length < 2) return;

    const timer = window.setInterval(() => {
      const lightboxOpen = document.getElementById("gallery-lightbox")?.classList.contains("is-open");
      if (!gallery.matches(":hover") && !lightboxOpen) {
        setGalleryImage(gallery, Number(gallery.dataset.index) + 1);
      }
    }, 4200);
    galleryState.timers.push(timer);

    gallery.querySelector(".gallery-prev")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setGalleryImage(gallery, Number(gallery.dataset.index) - 1);
    });
    gallery.querySelector(".gallery-next")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setGalleryImage(gallery, Number(gallery.dataset.index) + 1);
    });
    gallery.querySelector(".gallery-open")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openGalleryLightbox(images, Number(gallery.dataset.index), gallery.dataset.title);
    });
    gallery.querySelector("img")?.addEventListener("click", () => {
      openGalleryLightbox(images, Number(gallery.dataset.index), gallery.dataset.title);
    });
  });
}

function clearGalleryTimers() {
  galleryState.timers.forEach((timer) => window.clearInterval(timer));
  galleryState.timers = [];
}

function getLightboxElements() {
  return {
    lightbox: document.getElementById("gallery-lightbox"),
    image: document.getElementById("gallery-lightbox-image"),
    caption: document.getElementById("gallery-lightbox-caption"),
    status: document.getElementById("gallery-lightbox-status")
  };
}

function openGalleryLightbox(images, index, title) {
  if (!Array.isArray(images) || !images.length) return;
  const { lightbox } = getLightboxElements();
  if (!lightbox) return;

  galleryState.activeImages = images;
  galleryState.activeIndex = (index + images.length) % images.length;
  galleryState.activeTitle = title;
  if (typeof lightbox.showModal === "function" && !lightbox.open) {
    lightbox.showModal();
  } else {
    lightbox.setAttribute("open", "");
  }
  lightbox.classList.add("is-open");
  document.body.classList.add("gallery-open");
  updateLightboxImage();
}

function updateLightboxImage() {
  const { lightbox, image, caption, status } = getLightboxElements();
  if (!lightbox || !image || !galleryState.activeImages.length) return;

  const total = galleryState.activeImages.length;
  galleryState.activeIndex = (galleryState.activeIndex + total) % total;
  const nextSrc = galleryState.activeImages[galleryState.activeIndex];

  caption.textContent = `${galleryState.activeTitle} · ${galleryState.activeIndex + 1} / ${total}`;
  if (status) status.textContent = state.language === "es" ? "Cargando foto…" : "Loading photo…";
  lightbox.classList.add("is-loading");

  preloadImage(nextSrc)
    .then(() => {
      image.classList.add("is-switching");
      window.setTimeout(() => {
        image.src = nextSrc;
        image.alt = `${galleryState.activeTitle} — ${galleryState.activeIndex + 1}`;
        image.removeAttribute("hidden");
        requestAnimationFrame(() => image.classList.remove("is-switching"));
        lightbox.classList.remove("is-loading");
        if (status) status.textContent = "";
      }, 120);
    })
    .catch(() => {
      // Do not erase the previous photo. The user can still close/navigate safely.
      lightbox.classList.remove("is-loading");
      if (status) status.textContent = state.language === "es" ? "No se pudo cargar esta foto." : "This photo could not be loaded.";
    });
}

function closeGalleryLightbox() {
  const { lightbox, image, status } = getLightboxElements();
  if (!lightbox) return;
  lightbox.classList.remove("is-open", "is-loading");
  document.body.classList.remove("gallery-open");
  if (typeof lightbox.close === "function" && lightbox.open) {
    lightbox.close();
  } else {
    lightbox.removeAttribute("open");
  }
  if (status) status.textContent = "";
  // Keeps the last image briefly in DOM, avoiding a blank flash on the next opening.
  if (image) image.classList.remove("is-switching");
}

function initializeGalleryLightbox() {
  const { lightbox } = getLightboxElements();
  if (!lightbox) return;

  lightbox.querySelector("[data-gallery-close]")?.addEventListener("click", closeGalleryLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeGalleryLightbox();
  });
  lightbox.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeGalleryLightbox();
  });
  lightbox.querySelector("[data-gallery-prev]")?.addEventListener("click", () => {
    galleryState.activeIndex -= 1;
    updateLightboxImage();
  });
  lightbox.querySelector("[data-gallery-next]")?.addEventListener("click", () => {
    galleryState.activeIndex += 1;
    updateLightboxImage();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeGalleryLightbox();
    if (event.key === "ArrowLeft") { galleryState.activeIndex -= 1; updateLightboxImage(); }
    if (event.key === "ArrowRight") { galleryState.activeIndex += 1; updateLightboxImage(); }
  });
}

function updateWhatsAppLinks() {
  const selectors = [
    "nav-quote", "hero-quote", "mid-quote", "contact-quote", "whatsapp-contact", "floating-whatsapp"
  ];
  selectors.forEach((id) => {
    const link = document.getElementById(id);
    if (link) link.href = getWhatsAppUrl(state.language);
  });
}

function updateEmailLinks() {
  const emailLink = document.getElementById("email-contact");
  if (emailLink) emailLink.href = getMailtoUrl(state.language);
}

function updateLanguage() {
  const current = translations[state.language];
  document.documentElement.lang = state.language;
  document.title = state.language === "es"
    ? "DecoMania Rentas | Decoración y Rentas para Eventos"
    : "DecoMania Rentas | Event Styling & Rentals";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (current[key] !== undefined) element.innerHTML = current[key];
  });

  const languageButton = document.getElementById("language-toggle");
  const flag = languageButton.querySelector(".language-flag");
  const label = languageButton.querySelector(".language-label");
  flag.textContent = state.language === "en" ? "EN" : "ES";
  label.textContent = state.language === "en" ? "Español" : "English";
  languageButton.setAttribute("aria-label", state.language === "en" ? "Cambiar a español" : "Change to English");
  languageButton.title = languageButton.getAttribute("aria-label");

  updateWhatsAppLinks();
  updateEmailLinks();
  clearGalleryTimers();
  renderProducts("rentals-grid", productData.rentals);
  renderProducts("catalog-grid", productData.catalog);
  localStorage.setItem("decomania-language", state.language);
}

function initializeMenu() {
  const menuButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!menuButton || !nav) return;

  function closeMenu() {
    menuButton.classList.remove("is-open");
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  menuButton.addEventListener("click", () => {
    const opened = nav.classList.toggle("is-open");
    menuButton.classList.toggle("is-open", opened);
    menuButton.setAttribute("aria-expanded", String(opened));
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function initializeRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
}

function initializeActiveNav() {
  const header = document.querySelector(".site-header");
  const navLinks = [...document.querySelectorAll(".main-nav a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  if (!("IntersectionObserver" in window)) return;
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0.02 });

  sections.forEach((section) => sectionObserver.observe(section));
}

function initializeLanguageToggle() {
  const button = document.getElementById("language-toggle");
  button.addEventListener("click", () => {
    state.language = state.language === "en" ? "es" : "en";
    updateLanguage();
  });
}

(function init() {
  const savedLanguage = localStorage.getItem("decomania-language");
  if (savedLanguage === "en" || savedLanguage === "es") state.language = savedLanguage;

  updateLanguage();
  initializeMenu();
  initializeRevealAnimations();
  initializeActiveNav();
  initializeLanguageToggle();
  initializeGalleryLightbox();
})();
