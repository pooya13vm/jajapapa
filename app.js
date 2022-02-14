const form = document.getElementById("form");
const personalTitle = document.getElementById("personal-title");
const cards = document.querySelectorAll(".edu-img");
const scrollBtn = document.getElementById("scroll-top");

const getNameFromCookie = () => {
  let cookie = document.cookie;
  let indexOfName = cookie.indexOf("name");
  let indexOfFirstChar = cookie.indexOf(";", indexOfName);
  if (indexOfFirstChar == -1) {
    return cookie.slice(5, cookie.length);
  } else {
    let myCookie = cookie.slice(indexOfName, indexOfFirstChar);
    return myCookie.slice(5, myCookie.length);
  }
};
console.log("changed");

window.addEventListener("load", function () {
  if (document.cookie.includes("name")) {
    document.querySelector(".modal-overlay-edu").style.display = "none";
    let name = getNameFromCookie();
    personalTitle.innerHTML = `Hi ${name}`;
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("is-visible");
  } else {
    scrollBtn.classList.remove("is-visible");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputCode = document.getElementById("inputCode").value;
  const inputName = document.getElementById("inputName").value;
  const message = document.querySelector(".message");
  const checker = accessCode.find((x) => x.accessCODE == inputCode);
  if (checker || document.cookie) {
    document.querySelector(".modal-overlay").style.display = "none";
    personalTitle.innerHTML = `Hi ${inputName}`;
    document.cookie = `name=${inputName};Secure`;
  } else {
    message.style.display = "block";
  }
});

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (e) {
    let alphabet = e.target.getAttribute("data-pro");
    const audio = new Audio(`./mp4/${alphabet}.mp4`);
    audio.play();
  });
}
scrollBtn.addEventListener("click", function () {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

// -----------------access code generator------------

// const jasonMaker = () => {
//   const myArray = [];
//   for (let i = 0; i < 500; i++) {
//     let accessCodeArray = [];
//     for (let j = 0; j < 6; j++) {
//       let code = Math.floor(Math.random() * 10);
//       accessCodeArray.push(code);
//     }
//     let generatedItem = accessCodeArray.join("");
//     if (myArray.indexOf(generatedItem) == -1) {
//       myArray.push(generatedItem);
//     } else {
//       i--;
//     }
//   }
//   const myJson = [];
//   for (let k = 0; k < 500; k++) {
//     let costumerObj = { id: k, email: "", accessCODE: myArray[k], used: false };
//     myJson.push(costumerObj);
//   }
//   let jsonFile = JSON.stringify(myJson);
//   console.log(jsonFile);
// };
// jasonMaker();
