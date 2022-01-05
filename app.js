// $('.btn').click(function(){
//     $(this).toggleClass("click");
//     $('.sidebar').toggleClass("show");
//     });

//     $('.sidebar ul li a').click(function(){
//     var id = $(this).attr('id');
//     $('nav ul li ul.item-show-'+id).toggleClass("show");
//     $('nav ul li #'+id+' span').toggleClass("rotate");

//     });

//     $('nav ul li').click(function(){
//     $(this).addClass("active").siblings().removeClass("active");
//     });
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-img")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});

const accessCode = 123456;
const form = document.getElementById("form");
const personalTitle = document.getElementById("personal-title");
const cards = document.querySelectorAll(".edu-img");

window.addEventListener("load", function () {
  if (document.cookie) {
    document.querySelector(".modal-overlay-edu").style.display = "none";
    let myCookie = document.cookie;
    let name = myCookie.slice(5, myCookie.length);
    personalTitle.innerHTML = `Hi ${name}`;
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputCode = document.getElementById("inputCode").value;
  const inputName = document.getElementById("inputName").value;
  const message = document.querySelector(".message");
  if (inputCode == accessCode || document.cookie) {
    document.querySelector(".modal-overlay").style.display = "none";
    personalTitle.innerHTML = `Hi ${inputName}`;
    document.cookie = `name=${inputName};Secure`;
    console.log(document.cookie);
  } else {
    message.style.display = "block";
  }
});

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (e) {
    let alphabet = e.target.getAttribute("data-pro");
    const audio = new Audio(`./audio/${alphabet}.m4a`);
    audio.play();
  });
}
