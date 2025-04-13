let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let cardInput = document.getElementById("card");
let detailsForm = document.getElementById("detailsForm");

detailsForm.addEventListener("submit", (event) => {
  if (true) {
    console.log(nameInput.value);
    detailsForm.action =
      "mailto:challenge@dn-uk.com?subject=User Details&body=" +
      nameInput.value +
      encodeURIComponent("\r\n") +
      emailInput.value +
      encodeURIComponent("\r\n") +
      cardInput.value;
  } else {
    event.preventDefault();
  }
});
