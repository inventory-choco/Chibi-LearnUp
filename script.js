function toggleMenu() {
  const navMenu = document.getElementById("navMenu");

  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}

function sendWhatsApp(event) {
  event.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const parentName = document.getElementById("parentName").value;
  const grade = document.getElementById("grade").value;
  const classType = document.getElementById("classType").value;
  const phone = document.getElementById("phone").value;

  const message =
    `Hello Chibi Learn Up,%0A%0A` +
    `I would like to enquire about class booking.%0A%0A` +
    `Student Name: ${studentName}%0A` +
    `Parent Name: ${parentName}%0A` +
    `Class / Grade: ${grade}%0A` +
    `Class Type: ${classType}%0A` +
    `Phone Number: ${phone}%0A%0A` +
    `Please share the details.`;

  const whatsappNumber = "919539238317";

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  loadWebsiteContent();
});

async function loadWebsiteContent() {
  try {
    const response = await fetch("./content/site.json?v=" + Date.now());

    if (!response.ok) {
      throw new Error("Could not load site content.");
    }

    const data = await response.json();

    updateHero(data);
    renderBanners(data.banners || []);
    renderEvents(data.events || []);
  } catch (error) {
    console.error("Website content loading error:", error);
    startBannerSlider();
  }
}

function updateHero(data) {
  const heroTitle = document.getElementById("heroTitle");
  const heroDescription = document.getElementById("heroDescription");

  if (heroTitle && data.hero_title) {
    heroTitle.textContent = data.hero_title;
  }

  if (heroDescription && data.hero_description) {
    heroDescription.textContent = data.hero_description;
  }
}

function renderBanners(banners) {
  const bannerTrack = document.getElementById("bannerTrack");

  if (!bannerTrack) return;

  bannerTrack.innerHTML = "";

  banners.slice(0, 6).forEach(function (banner, index) {
    const img = document.createElement("img");
    img.src = getSafeImagePath(banner.image);
    img.alt = banner.alt || "Chibi Learn Up Banner " + (index + 1);

    bannerTrack.appendChild(img);
  });

  startBannerSlider();
}

function renderEvents(events) {
  const eventsGrid = document.getElementById("eventsGrid");

  if (!eventsGrid) return;

  eventsGrid.innerHTML = "";

  events.slice(0, 12).forEach(function (eventItem, index) {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";

    const img = document.createElement("img");
    img.src = eventItem.image;
    img.alt = eventItem.alt || "Chibi Learn Up Event " + (index + 1);

    eventCard.appendChild(img);
    eventsGrid.appendChild(eventCard);
  });
}

function startBannerSlider() {
  const bannerTrack = document.getElementById("bannerTrack");
  const bannerDots = document.getElementById("bannerDots");
  const bannerPrev = document.getElementById("bannerPrev");
  const bannerNext = document.getElementById("bannerNext");

  if (!bannerTrack || !bannerDots) return;

  const banners = bannerTrack.querySelectorAll("img");

  if (banners.length === 0) return;

  let currentBanner = 0;
  let bannerInterval;

  function createDots() {
    bannerDots.innerHTML = "";

    banners.forEach(function (_, index) {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", "Go to banner " + (index + 1));

      dot.addEventListener("click", function () {
        currentBanner = index;
        showBanner(currentBanner);
        restartAutoSlide();
      });

      bannerDots.appendChild(dot);
    });
  }

  function showBanner(index) {
    banners.forEach(function (banner, bannerIndex) {
      banner.classList.toggle("active", bannerIndex === index);
    });

    const dots = bannerDots.querySelectorAll("button");

    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("active", dotIndex === index);
    });
  }

  function nextBannerSlide() {
    currentBanner = (currentBanner + 1) % banners.length;
    showBanner(currentBanner);
  }

  function prevBannerSlide() {
    currentBanner = (currentBanner - 1 + banners.length) % banners.length;
    showBanner(currentBanner);
  }

  function startAutoSlide() {
    clearInterval(bannerInterval);
    bannerInterval = setInterval(nextBannerSlide, 4500);
  }

  function restartAutoSlide() {
    startAutoSlide();
  }

  if (bannerNext) {
    bannerNext.onclick = function () {
      nextBannerSlide();
      restartAutoSlide();
    };
  }

  if (bannerPrev) {
    bannerPrev.onclick = function () {
      prevBannerSlide();
      restartAutoSlide();
    };
  }

  createDots();
  showBanner(currentBanner);
  startAutoSlide();
}
