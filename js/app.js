//Despliegue de FAQs
let questions = document.getElementsByClassName("questions");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    this.lastElementChild.classList.toggle("show");

    var body = this.lastElementChild.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}

//Mostrar navbar
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 200) {
    var header = document.querySelector("header");
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
});
