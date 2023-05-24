// SELECTEURS
// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// console.log(response);
// console.log(btn1, btn2);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
  //   questionContainer.classList.add("question-clicked");
  //   questionContainer.style.background = "red";
  //   questionContainer.style.border = "3px solid teal";
  //   console.log("Click !");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  //   response.style.visibility = "visible";
  response.style.background = "green";
  //   console.log("Click !");
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  //   response.style.visibility = "visible";
  response.style.background = "red";
  //   console.log("Click !");
});

// questionContainer.style.borderRadius = "150px";

// console.log(questionContainer);

//-----------------------------------------------------------------------------
// Mouse Events

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  // console.log(e);
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//-----------------------------------------------------------------------------
// KeyPress Event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  ring();
});

//-----------------------------------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");
console.log(window.scrollY);

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------------------------------------------------------------------
// Form Event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  // console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("yes");
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>`;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-----------------------------------------------------------------------------
// Load Event

window.addEventListener("Load", () => {
  console.log("Document Chargé!");
});

//-----------------------------------------------------------------------------
// For each

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

console.log(boxes);

// boxes.addEventListener("click", () => console.log("test"));

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.style.transform = "scale(0.7)";
  });
});

//-----------------------------------------------------------------------------
// addEventListener vs onclick

// document.body.onclick = function () {
//   console.log("Click!");
// }
// document.body.onclick = function () {
//   console.log("Scroll!");
// }

//Bubling Event => fin (de base l'eventlistenner est paramétré en mode bubling)
document.body.addEventListener(
  "click",
  () => {
    console.log("Click!");
  },
  false
);

//Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click2!");
  },
  true
);

//https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

//-----------------------------------------------------------------------------
// Stop propagation

questionContainer.addEventListener("click", (e) => {
  alert("Test");
  e.stopPropagation();
});

// removeEventListener

//-----------------------------------------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("https://www.google.fr", "cours js", "height=600", "width=800 ", "_blank");
// window.close();

// Evènements adossés à Window
//alert("hello")

//confirm
btn2.addEventListener("click", () => {
  confirm("Voulez-vous vraiment vous tromper ?");
});

//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");

  questionContainer.innerHTML += "<h3>Bravo" + answer + "</h3>";
});

//Timer, compte à rebours
setTimeout(() => {
  //logique à exécuter
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class='box'><h2>Nouvelle Boite !</h2></div>`;
// }, 1000);

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

//Location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
// location.replace("https://www.google.fr");

// window.onload = () => {
//   location.href = "https://www.google.fr";
// }

//Navigator
// console.log(navigator.userAgent);
//https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

//History
// console.log(history);
// window.history.back();
// history.go(-2)

//-----------------------------------------------------------------------------
// SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layery + "px");
});
