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
}