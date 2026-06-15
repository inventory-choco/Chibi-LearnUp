function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
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

  // Replace this number with Chibi Learn Up WhatsApp number later.
  const whatsappNumber = "919539238317";

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
document.addEventListener("DOMContentLoaded", function () {
  const bannerTrack = document.getElementById("bannerTrack");
  const bannerDots = document.getElementById("bannerDots");
  const bannerPrev = document.getElementById("bannerPrev");
  const bannerNext = document.getElementById("bannerNext");

  if (!bannerTrack || !bannerDots) return;

  const banners = bannerTrack.querySelectorAll("img");
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
    bannerInterval = setInterval(nextBannerSlide, 4500);
  }

  function restartAutoSlide() {
    clearInterval(bannerInterval);
    startAutoSlide();
  }

  if (bannerNext) {
    bannerNext.addEventListener("click", function () {
      nextBannerSlide();
      restartAutoSlide();
    });
  }

  if (bannerPrev) {
    bannerPrev.addEventListener("click", function () {
      prevBannerSlide();
      restartAutoSlide();
    });
  }

  createDots();
  showBanner(currentBanner);
  startAutoSlide();
});
  
}

