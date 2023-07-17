const circle = document.querySelectorAll("service__section-small-circle");
circle.forEach((circle) => {
  circle.addEventListener("click", () => {
    circle.classList.toggle("bounce");
  });
});

//to get the updated actual year

function getCurrentYear() {
  let currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
}
getCurrentYear();

//SMOOTH SCROLLING////

const allLinks = document.querySelectorAll("a:link");
//console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//////////////////////////////////////////////

///FORM USER INTERACTIVE///
// Get the modal and modal content elements
// Get the modal, modal content, and backdrop elements

const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const backdrop = document.getElementById("backdrop");

const toggleModal = () => {
  modal.classList.toggle("visible");
  backdrop.classList.toggle("visible");
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();

  // Get the form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const website = document.getElementById("website").value;
  const message = document.getElementById("message").value;

  // Check if any of the fields are empty
  if (
    name.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    website.trim() === "" ||
    message.trim() === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  // Create an object to store the form data
  const formData = {
    name,
    email,
    phone,
    website,
    message,
  };

  console.log(formData);

  // Show the modal and backdrop
  toggleModal();

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("website").value = "";
  document.getElementById("message").value = "";

  // Store the form data in localStorage
  localStorage.setItem("formData", JSON.stringify(formData));
};

// Get the form element
const form = document.getElementById("contactForm");

// Add event listener to the form submit event
form.addEventListener("submit", handleSubmit);

// Get the close button element
const closeButton = document.querySelector(".close");

// Add event listener to the close button click event
closeButton.addEventListener("click", toggleModal);

// Add event listener to the backdrop click event
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) {
    toggleModal();
  }
});

//////////////////////////////

///To send a message in my phone number throught the icon////
function redirectToWhatsApp() {
  var phoneNumber = "+355670254518"; // Replace with your actual WhatsApp number
  var encodedPhoneNumber = encodeURIComponent(phoneNumber);
  var whatsappUrl = "https://api.whatsapp.com/send?phone=" + encodedPhoneNumber;

  window.open(whatsappUrl, "_blank");
}

var whatsappLink = document.getElementById("whatsappLink");
whatsappLink.addEventListener("click", redirectToWhatsApp);

//comment for the code  we define a JavaScript function called redirectToWhatsApp(). Inside the function, we set the phoneNumber variable to your actual WhatsApp number, including the country code.

/*The encodeURIComponent() function is used to encode the phone number in case it contains special characters. Then, we construct the WhatsApp API URL by concatenating the encoded phone number with the base URL.

Next, we use window.open() to open the WhatsApp URL in a new tab or window when the function is called.

Finally, we add an event listener to the WhatsApp link (identified by the whatsappLink ID). When the link is clicked, it will invoke the redirectToWhatsApp() function, redirecting the user to write you a message on your WhatsApp number.*/
