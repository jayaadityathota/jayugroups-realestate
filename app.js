const siteConfig = {
  publicBrand: "Jay U Groups | Real Estate",
  phoneInternational: "917428852249",
  email: "info@jayugroups.in",
  privateDisclosureCode: "Please share the relevant trusted company partner details during direct follow-up.",
  stats: {
    plots: "20+",
    documents: "8",
    visits: "50+"
  },
  services: [
    {
      icon: "LD",
      title: "Investment Consulting",
      text: "Explain land opportunities, red sandalwood farming concepts, growth corridors, partner company details, and the practical steps before investment."
    },
    {
      icon: "SV",
      title: "Site Visit Coordination",
      text: "Guide investors with visit timing, weekend site visit planning, route clarity, nearby facilities, partner coordination, and follow-up notes."
    },
    {
      icon: "DC",
      title: "Documentation Support",
      text: "Organize required document profiles such as sale deed references, government approvals, survey details, payment stages, and registration flow."
    },
    {
      icon: "UP",
      title: "Partner Opportunity Updates",
      text: "Regularly publish updated phases, current availability, partner company notes, location improvements, and nearby development highlights."
    },
    {
      icon: "VD",
      title: "Video Walkthroughs",
      text: "Embed YouTube videos and Instagram reels so clients can inspect the project from the website itself."
    },
    {
      icon: "CS",
      title: "Investor Enquiry Flow",
      text: "Use WhatsApp, social engagement, and email with a clean path to automation."
    }
  ],
  projects: [
    {
      name: "Phase 24 - Future Commercial Growth Belt",
      location: "Mandal Road, Chejerla Village, Nellore Dist",
      status: "Bookings open for 410 Acres",
      summary: "Suitable for investors who want future commercial growth, nearby national highways, road connectivity, and developing neighborhoods.",
      facilities: ["Highway access", "Krishnapatnam Port", "Commercial growth", "Upcoming highway extension lines"],
      images: ["./assets/1.png", "./assets/2.png", "./assets/3.png", "./assets/4.png"]
    },
    {
      name: "Phase 23 - National Highway Growth Belt",
      location: "Dubagunta Village, Anumasamudram Peta, Nellore Dist",
      status: "Units available for Investors",
      summary: "Balanced option for investors looking at future infrastructure movement with affordable entry points.",
      facilities: ["Emerging infrastructure development zone", "Surrounded by national highway roads", "Transport route", "Peaceful setting"],
      images: ["./assets/3.png", "./assets/9.png"]
    },
    {
      name: "Phase 25 - Investment Layout",
      location: "Bandaganipalle, Nellore Dist",
      status: "Coming soon",
      summary: "Designed for investors tracking long-term appreciation, road widening, and upcoming area demand.",
      facilities: ["Growth corridor", "Flexible plot sizes", "Future access", "Value zone"]
    },
  ],
  gallery: [
    { title: "Layout Planning Frame", type: "layout", caption: "Use this slot for approved layout or marked plot visuals." },
    { title: "Road Formation Update", type: "site", caption: "Add progress photos or short videos as work advances." },
    { title: "Nearby Facilities", type: "facility", caption: "Show schools, hospitals, roads, markets, and transport points." },
    { title: "Plot Demarcation", type: "site", caption: "Use for boundary, stones, roads, and phase-wise progress." },
    { title: "Location Map Snapshot", type: "layout", caption: "Add a custom map graphic or route screenshot later." },
    { title: "Visit Day Moments", type: "facility", caption: "Show buyer visit frames, area views, and surroundings." }
  ],
  youtubeVideos: [
    {
      title: "Project Walkthrough",
      embedUrl: ""
    },
    {
      title: "Location Explanation",
      embedUrl: ""
    }
  ],
  instagramReels: [
    {
      title: "Latest Reel",
      embedUrl: ""
    }
  ],
  clients: [
    {
      title: "First-Time Investors",
      text: "Simple explanations for partner company details, location, budget, documents, registration, and what to check before committing."
    },
    {
      title: "Investment Buyers",
      text: "Structured updates on trusted company partners, nearby developments, growth corridors, availability, and phase-wise opportunity."
    },
    {
      title: "Family Decision Makers",
      text: "Clear guidance around transport, hospitals, local markets, roads, visit convenience, and long-term asset planning."
    }
  ],
  legal: [
    {
      title: "Title & Ownership Profile",
      text: "Summarize ownership chain, title clarity, partner company role, and document availability before sharing files privately."
    },
    {
      title: "Layout & Survey Details",
      text: "List survey numbers, layout status, plot measurements, road widths, and phase boundaries."
    },
    {
      title: "Payment & Registration Flow",
      text: "Explain token advance, agreement steps, registration process, timelines, and customer responsibilities."
    },
    {
      title: "Approvals Checklist",
      text: "Keep a public checklist of approval categories while sharing actual documents and partner details only after enquiry."
    },
    {
      title: "Customer KYC Notes",
      text: "Mention buyer identity requirements, nominee details, and basic documentation needed for registration."
    },
    {
      title: "Disclaimer Profile",
      text: "Add a clear note that customers should independently verify documents before purchase."
    }
  ]
};

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

function createCard(className, html) {
  const element = document.createElement("article");
  element.className = className;
  element.innerHTML = html;
  return element;
}

function renderServices() {
  const grid = qs("#serviceGrid");
  siteConfig.services.forEach((item) => {
    grid.appendChild(createCard("service-card", `
      <div class="service-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `));
  });
}

function renderProjects() {
  const grid = qs("#projectGrid");
  const select = qs("#interestSelect");
  siteConfig.projects.forEach((project, index) => {
    const option = document.createElement("option");
    option.value = project.name;
    option.textContent = project.name;
    select.appendChild(option);

    const facilities = project.facilities.map((facility) => `<span>${facility}</span>`).join("");
    const artMarkup = Array.isArray(project.images) && project.images.length
      ? `<div class="project-art has-image" style="--project-index:${index}"><div class="project-photo-stack">${project.images.map((image) => `<div class="photo-frame"><img class="project-image" src="${image}" alt="${project.name} visual" loading="lazy"></div>`).join("")}</div></div>`
      : `<div class="project-art" style="--project-index:${index}"></div>`;

    grid.appendChild(createCard("project-card", `
      ${artMarkup}
      <div class="project-body">
        <div class="tag-row"><span class="tag">${project.status}</span><span class="tag">${project.location}</span></div>
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
        <div class="facility-row">${facilities}</div>
      </div>
    `));
  });
}

function renderGallery(filter = "all") {
  const grid = qs("#galleryGrid");
  grid.innerHTML = "";
  siteConfig.gallery
    .filter((item) => filter === "all" || item.type === filter)
    .forEach((item) => {
      const artMarkup = item.image
        ? `<div class="gallery-art has-image"><div class="photo-frame"><img class="gallery-image" src="${item.image}" alt="${item.title}" loading="lazy"></div></div>`
        : `<div class="gallery-art"></div>`;

      grid.appendChild(createCard("gallery-item", `
        ${artMarkup}
        <div class="gallery-caption">
          <strong>${item.title}</strong>
          <span>${item.caption}</span>
        </div>
      `));
    });
}

function renderMedia() {
  const youtubeGrid = qs("#youtubeGrid");
  siteConfig.youtubeVideos.forEach((video) => {
    if (!video.embedUrl) {
      youtubeGrid.appendChild(createCard("media-placeholder video-placeholder", `
        <strong>${video.title}</strong>
        <span>Add a YouTube embed link in app.js</span>
      `));
      return;
    }
    const iframe = document.createElement("iframe");
    iframe.className = "video-frame";
    iframe.title = video.title;
    iframe.src = video.embedUrl;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    youtubeGrid.appendChild(iframe);
  });

  const reelGrid = qs("#reelGrid");
  siteConfig.instagramReels.forEach((reel) => {
    if (!reel.embedUrl) {
      reelGrid.appendChild(createCard("media-placeholder reel-placeholder", `
        <strong>${reel.title}</strong>
        <span>Add an Instagram reel embed link in app.js</span>
      `));
      return;
    }
    const iframe = document.createElement("iframe");
    iframe.className = "reel-frame";
    iframe.title = reel.title;
    iframe.src = reel.embedUrl;
    iframe.allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
    reelGrid.appendChild(iframe);
  });
}

function renderClientsAndLegal() {
  const clientGrid = qs("#clientGrid");
  siteConfig.clients.forEach((client) => {
    clientGrid.appendChild(createCard("client-card", `<h3>${client.title}</h3><p>${client.text}</p>`));
  });

  const legalGrid = qs("#legalGrid");
  siteConfig.legal.forEach((item) => {
    legalGrid.appendChild(createCard("legal-card", `<h3>${item.title}</h3><p>${item.text}</p>`));
  });
}

function buildWhatsAppUrl(extra = "") {
  const message = [
    `Hello ${siteConfig.publicBrand}, I'm interested in exploring Red Sandalwood land investment. Please provide me with complete information, and I'd like to arrange a site visit before making an investment decision`,
    extra,
    siteConfig.privateDisclosureCode
  ].filter(Boolean).join(" ");
  return `https://wa.me/${siteConfig.phoneInternational}?text=${encodeURIComponent(message)}`;
}

function buildEmailUrl(subject, body) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setupContactActions() {
  qs("#heroWhatsApp").href = buildWhatsAppUrl("Please send project locations, nearby facilities, and site visit timings.");
  qs("#contactWhatsApp").href = buildWhatsAppUrl("Please call me back.");
  qs("#contactEmail").href = buildEmailUrl("Land enquiry", `Hello ${siteConfig.publicBrand},\n\nPlease send available phase details and site visit options.\n\n${siteConfig.privateDisclosureCode}`);

  qs("#leadForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Interested phase: ${data.get("interest")}`,
      `Message: ${data.get("message") || "Not provided"}`,
      "",
      siteConfig.privateDisclosureCode
    ].join("\n");
    window.location.href = buildEmailUrl("New land enquiry", body);
    qs("#formNote").textContent = "Your email app is opening with the prepared enquiry.";
  });

  qs("#copyLead").addEventListener("click", async () => {
    const form = qs("#leadForm");
    const data = new FormData(form);
    const text = [
      `Name: ${data.get("name") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Interested phase: ${data.get("interest") || ""}`,
      `Message: ${data.get("message") || ""}`
    ].join("\n");
    await navigator.clipboard.writeText(text);
    qs("#formNote").textContent = "Lead details copied. You can paste them into WhatsApp or email.";
  });
}

function setupFilters() {
  qsa(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      qsa(".filter-btn").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderGallery(button.dataset.filter);
    });
  });
}

function setupStats() {
  qs("#statPlots").textContent = siteConfig.stats.plots;
  qs("#statDocs").textContent = siteConfig.stats.documents;
  qs("#statVisits").textContent = siteConfig.stats.visits;
}

document.addEventListener("DOMContentLoaded", () => {
  setupStats();
  renderServices();
  renderProjects();
  renderGallery();
  renderMedia();
  renderClientsAndLegal();
  setupFilters();
  setupContactActions();
});
