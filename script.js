const form = document.getElementById("admissionForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting until valid
  let isValid = true;

  const fields = form.querySelectorAll("input, select, textarea");
  fields.forEach(field => {
    const error = field.parentElement.querySelector(".error");

    if (!field.checkValidity()) {
      field.classList.add("invalid");
      field.classList.remove("valid");
      if (error) error.textContent = "This field is required.";
      if (error) error.style.display = "block";
      isValid = false;
    } else {
      field.classList.remove("invalid");
      field.classList.add("valid");
      if (error) error.textContent = "";
      if (error) error.style.display = "none";
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
    fields.forEach(f => f.classList.remove("valid"));
  }
});
