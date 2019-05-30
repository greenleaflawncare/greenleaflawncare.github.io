let content = document.querySelector("main");
let currentPage = document.querySelector("#home");

const validator = function() {
    'use strict';
    console.log("hello");
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
};

$.get("/templates/home.html", (data) => {
    content.innerHTML = data;
});

const changeToContact = function() {
    $.get("/templates/contact.html", (data) => {
        content.innerHTML = data;
    });
    currentPage.style.color = "black";
    validator();
};

const changeToOther = function(page) {
    $.get(`/templates/${page}.html`, (data) => {
        content.innerHTML = data;
    });
    currentPage.style.color = "black";
    currentPage = document.querySelector(`#${page}`)
    currentPage.style.color = "rgb(142, 219, 147)";
};