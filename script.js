const submitBtn = document.getElementById("submitMessage");
const submitNotification = document.querySelector(".submit-notification");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll(".required-message").forEach((el) => (el.textContent = ""));

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const emailAddress = document.getElementById("emailAddress");
  const messageBox = document.getElementById("messageInput");

  if (firstName.value.trim() === "") {
    document.getElementById("firstNameRequired").textContent = "This field is required";
    valid = false;
  }
  if (lastName.value.trim() === "") {
    document.getElementById("lastNameRequired").textContent = "This field is required";
    valid = false;
  }
  if (emailAddress.validity.valueMissing || emailAddress.validity.typeMismatch) {
    document.getElementById("emailRequired").textContent = "Please enter a valid email address";
    valid = false;
  }

  if (document.getElementById("generalEnquiry").validity.valueMissing || document.getElementById("supportEnquiry").validity.valueMissing) {
    document.getElementById("queryRequired").textContent = "Please select a query type";
    valid = false;
  }

  if (messageBox.validity.valueMissing) {
    document.getElementById("messageRequired").textContent = "This field is required";
    valid = false;
  }

  if (document.getElementById("consentCheckbox").validity.valueMissing) {
    document.getElementById("checkboxRequired").textContent = "To submit this form, please consent to being contacted";
  }

  if (valid) {
    submitNotification.style.display = "flex";
  } else {
    console.log("One of required input is empty");
  }
});
