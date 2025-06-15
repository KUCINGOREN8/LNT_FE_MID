const form = document.querySelector("[data-form]");
const toast = document.querySelector(".toast__hide");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (form.checkValidity()) {
    sendMail();
    toast.classList.remove("toast__hide");

    setTimeout(() => {
      toast.classList.add("toast__hide");
    }, 2000);
  } else {
    form.reportValidity();
  }
});

function sendMail() {
  let parms = {
    fullname: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    linkedIn: document.getElementById("linkedIn").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_aa0ewnw", "template_8dnr0sd", parms)
    .catch(() => {
    toast.textContent = "Failed to send email!";
    toast.classList.remove("toast__hide");
    setTimeout(() => toast.classList.add("toast__hide"), 2000);
  });
}
