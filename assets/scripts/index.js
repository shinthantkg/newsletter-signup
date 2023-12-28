const isValidEmail = (email) => {
  const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validEmailRegex.test(email);
};

const showErrorMessage = (message, inputElement) => {
  const invalidMessage = document.querySelector(".email__validation__message");
  invalidMessage.textContent = message;
  invalidMessage.classList.remove("hidden");
  inputElement.classList.add("invalid__input");
};

const submitForm = (event) => {
  event.preventDefault();

  const newsletterCard = document.querySelector(".newsletter__card");
  const thankYouCard = document.querySelector(".thank__you__card");
  const emailInput = document.querySelector("#email");
  const email = emailInput.value.trim();

  if (email === "") {
    showErrorMessage("There's no email!", emailInput);
  } else if (!isValidEmail(email)) {
    showErrorMessage("Invalid email!", emailInput);
  } else {
    newsletterCard.classList.add("hidden");
    document.querySelector(".email__placeholder").textContent = email;
    thankYouCard.classList.remove("hidden");
  }
};

const dismiss = () => {
  const newsletterCard = document.querySelector(".newsletter__card");
  const thankYouCard = document.querySelector(".thank__you__card");
  const invalidMessage = document.querySelector(".email__validation__message");
  const emailInput = document.querySelector("#email");

  thankYouCard.classList.add("hidden");
  invalidMessage.classList.add("hidden");
  emailInput.classList.remove("invalid__input");
  emailInput.value = "";
  newsletterCard.classList.remove("hidden");
};
