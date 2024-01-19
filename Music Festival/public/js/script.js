
// We used noConflict to avoid conflicts between jQuery and other libraries
$.noConflict();

// Define the navbar variable using let or const to avoid redeclaration error
const navbar = document.querySelector('.navbar');

// Toggle the active class on the navbar when the #menu element is clicked
document.querySelector('#menu').onclick = () => {
  navbar.classList.toggle('active');
}

// Remove the active class from the navbar when the user scrolls
window.onscroll = () => {
  navbar.classList.remove('active');
}

// Use jQuery to handle the gallery filtering and magnificPopup initialization
jQuery(document).ready(function ($) {

  $('.button').click(function () {
    $(this).addClass('active').siblings().removeClass('active');

    var filter = $(this).attr('data-filter')

    if (filter == 'all') {
      $('.gallery .image').show(400);
    }
    else {
      $('.gallery .image').not('.' + filter).hide(200);
      $('.gallery .image').filter('.' + filter).show(200);
    }

  });

  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    }
  });

});

// PAY

// get elements
const paymentForm = document.getElementById("payment-form");
const emailInput = document.getElementById("email");
const paytoast = document.getElementById("paytoast");

// function to open payment form
function openPaymentForm(event) {
  event.preventDefault();
  paymentForm.style.display = "block";
}

// function to handle payment
function handlePayment() {
  // show spinner
  paytoast.textContent = "Processing payment...";
  paytoast.classList.add("show");

  // simulate payment processing with timeout
  setTimeout(() => {
    // hide spinner
    paytoast.textContent = "Payment successful, ticket booked!";
    setTimeout(() => {
      paytoast.classList.remove("show");
    }, 2000);

    // clear email input and hide form
    emailInput.value = "";
    paymentForm.style.display = "none";
  }, 2000);
}

// CONTACT FORM
const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (name.value && email.value && phone.value && subject.value && message.value) {
    // show success message
    showToast("Form submitted successfully!");

    // clear form fields
    name.value = "";
    email.value = "";
    phone.value = "";
    subject.value = "";
    message.value = "";
  } else {
    // show error message
    showToast("Please fill in all fields!");
  }
});

function showNewsletterToast() {
  const emailInput = document.getElementById("newsletter-email");
  if (emailInput.checkValidity()) {
    showToast("Email submitted successfully!");
    emailInput.value = "";
  } else {
    emailInput.reportValidity();
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(function () {
    toast.remove();
  }, 3000);
}

