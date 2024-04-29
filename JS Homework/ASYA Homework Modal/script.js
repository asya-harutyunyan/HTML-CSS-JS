"use strict";
const modalMenu = document.querySelector(".menu-modal");
const modalContact = document.querySelector(".contact-modal");
const overlay = document.querySelector(".overlay");
const openButtonMenu = document.querySelector(".btn-menu");
const openButtonContact = document.querySelector(".btn-contact");
const closeModalMenu = document.querySelector(".close-menu");
const closeModalContact = document.querySelector(".close-contact");

// const openMenuModal = function () {
//   modalMenu.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const openContactModal = function () {
//   modalContact.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeMenuModal = function () {
//   modalMenu.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// const closeContactModal = function () {
//   modalContact.classList.add("hidden");
//   overlay.classList.add("hidden");
// };


//Another variant
const hiddenClass="hidden";

const removeHidden=(htmlElement)=>htmlElement.classList.remove(hiddenClass);

const addHidden=(htmlElement)=>htmlElement.classList.add(hiddenClass);

const openMenuModal=function(){
  removeHidden(modalMenu);
  removeHidden(overlay);
};

const openContactModal=function(){
  removeHidden(modalContact);
  removeHidden(overlay);
};

const closeMenuModal=function(){
  addHidden(modalMenu);
  addHidden(overlay);
}
const closeContactModal=function(){
  addHidden(modalContact);
  addHidden(overlay);
}


openButtonMenu.addEventListener("click", openMenuModal);
openButtonContact.addEventListener("click", openContactModal);
closeModalMenu.addEventListener("click", closeMenuModal);
closeModalContact.addEventListener("click", closeContactModal);
overlay.addEventListener("click", closeMenuModal);
overlay.addEventListener("click", closeContactModal);
