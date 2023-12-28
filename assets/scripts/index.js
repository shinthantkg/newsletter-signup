function submitForm(event) {
  event.preventDefault();

  const newsletterCard = document.querySelector(".newsletter__card");
  const thankYouCard = document.querySelector(".thank__you__card");
  const invalidMessage = document.querySelector(".email__validation__message");
  const emailPlaceholder = document.querySelector(".email__placeholder");
  const emailInput = document.querySelector("#email");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    invalidMessage.textContent = "There's no email!";
    invalidMessage.classList.remove("hidden");
    emailInput.classList.add("invalid__input");
  } else if (!emailRegex.test(email)) {
    invalidMessage.textContent = "Invalid email!";
    invalidMessage.classList.remove("hidden");
    emailInput.classList.add("invalid__input");
  } else {
    newsletterCard.classList.add("hidden");
    emailPlaceholder.textContent = email;
    thankYouCard.classList.remove("hidden");
  }
}

