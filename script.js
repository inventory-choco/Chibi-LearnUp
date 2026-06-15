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
let currentBanner = 0;

const bannerTrack = document.getElementById("bannerTrack");
const bannerDots = document.getElementById("bannerDots");

function getBannerCount() {
  if (!bannerTrack) return 0;
  return bannerTrack.querySelectorAll("img").length;
}

function createBannerDots() {
  const total = getBannerCount();

  if (!bannerDots || total === 0) return;

  bannerDots.innerHTML = "";

  for (let i = 0; i < total; i++) {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Go to banner ${i + 1}`);
    dot.addEventListener("click", function () {
      currentBanner = i;
      updateBanner();
    });

    bannerDots.appendChild(dot);
  }

  updateBanner();
}

function updateBanner() {
  const total = getBannerCount();

  if (!bannerTrack || total === 0) return;

  bannerTrack.style.transform = `translateX(-${currentBanner * 100}%)`;

  if (bannerDots) {
    const dots = bannerDots.querySelectorAll("button");

    dots.forEach(function (dot, index) {
      dot.classList.toggle("active", index === currentBanner);
    });
  }
}

function nextBanner() {
  const total = getBannerCount();

  if (total === 0) return;

  currentBanner = (currentBanner + 1) % total;
  updateBanner();
}

function prevBanner() {
  const total = getBannerCount();

  if (total === 0) return;

  currentBanner = (currentBanner - 1 + total) % total;
  updateBanner();
}

createBannerDots();

setInterval(function () {
  nextBanner();
}, 5000);
  
}

