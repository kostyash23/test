function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
const btn = document.querySelector(".btn-folov");
function validate() {
  const email = document.getElementById("email");
  const emailVal = email.value;

  if (validateEmail(emailVal)) {
    const modaFolov = document.querySelector(".email-modal");
    modaFolov.classList.add("text-block");
    setTimeout(() => {
      modaFolov.classList.remove("text-block");
    }, 1500);
  } else {
    const text = document.querySelector(".text-none");
    text.classList.add("text-block");
    setTimeout(() => {
      text.classList.remove("text-block");
    }, 1500);
  }
  return false;
}

btn.addEventListener("click", validate);

const inputNum1 = document.querySelector("#number-1");
const inputNum2 = document.querySelector("#number-2");
function validateForm1() {
  if (inputNum1.value.match(/^\d+/)) {
    inputNum1.classList.remove("red");
  } else {
    inputNum1.classList.add("red");
  }
}
inputNum1.addEventListener("input", validateForm1);

function validateForm2() {
  if (inputNum2.value.match(/^\d+/)) {
    inputNum2.classList.remove("red");
  } else {
    inputNum2.classList.add("red");
  }
}
inputNum2.addEventListener("input", validateForm2);

const password = document.querySelector("#password");
function valiPasswords() {
  if (password.value.length > 3) {
    password.classList.remove("red");
  } else {
    password.classList.add("red");
  }
}

password.addEventListener("input", valiPasswords);

const search = document.querySelector("#search");
function valiSearch() {
  if (search.value.length > 2) {
    search.classList.remove("red");
  } else {
    search.classList.add("red");
  }
}

search.addEventListener("input", valiSearch);
function form_submitHandler({ target }) {
  target.reset();
}
let form = document.querySelector("#btn-filter");

form.addEventListener("click", form_submitHandler);
function openModal() {
  const enterModal = document.querySelector(".enter-modal");
  enterModal.classList.add("text-block");
}
const btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", openModal);
function closeModal() {
  const enterModal = document.querySelector(".enter-modal");
  enterModal.classList.remove("text-block");
}

const close = document.querySelector(".close");
close.addEventListener("click", closeModal);

const itemCompare = document.querySelector(".item-compare");
let counerCompore = 0;

const counter1 = document.querySelector(".counter1");
function counerCompore1() {
  counerCompore++;

  counter1.classList.add("text-block");
  counter1.innerText = counerCompore;
}
const riseProduct = document.querySelector(".rise-product");
riseProduct.addEventListener("click", counerCompore1);

let counerFavorite = 0;

const counter2 = document.querySelector(".counter2");
function counerFavorite1() {
  counerFavorite++;
  counter2.classList.add("text-block");
  counter2.innerText = counerFavorite;
}

const favorite = document.querySelector(".favorite");
favorite.addEventListener("click", counerFavorite1);
