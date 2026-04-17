const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const popupOverlay = document.getElementById("popupOverlay");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");

function showPopup(title, message) {
  popupTitle.textContent = title;
  popupMessage.textContent = message;
  popupOverlay.classList.remove("hidden");
}

function hidePopup() {
  popupOverlay.classList.add("hidden");
}

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const purpose = document.getElementById("purpose").value;
  const message = document.getElementById("message").value.trim();

  if (!firstName || !lastName || !email || !purpose || !message) {
    formStatus.textContent = "Please fill in all fields.";
    showPopup("Incomplete Form", "Please fill in all fields before sending.");
    return;
  }

  if (!isValidEmail(email)) {
    formStatus.textContent = "Please enter a valid email address.";
    showPopup("Invalid Email", "Please enter a valid email address.");
    return;
  }

  formStatus.textContent = "Sending message...";

  setTimeout(function () {
    formStatus.textContent = "Message sent successfully.";
    showPopup(
      "Message Sent",
      "Your message has been submitted successfully."
    );
    contactForm.reset();
  }, 1000);
});

closePopup.addEventListener("click", hidePopup);

popupOverlay.addEventListener("click", function (event) {
  if (event.target === popupOverlay) {
    hidePopup();
  }
});

console.log("Start loading data...");
setTimeout(() => {
console.log("Data loaded successfully.");
}, 2000);
console.log("User can still click buttons.");
