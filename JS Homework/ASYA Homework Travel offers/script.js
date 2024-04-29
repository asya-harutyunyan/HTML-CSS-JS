"use strict";
const buttonFlight = document.querySelector(".btn-flight");
const buttonHotel = document.querySelector(".btn-hotel");
const buttonRental = document.querySelector(".btn-rental");
const infoFlight = document.querySelector(".info-flight");
const infoHotel = document.querySelector(".hotel-info-container");
const infoRental = document.querySelector(".rental-info-container");
const buttonsColor = document.querySelectorAll(".btn-color");

const removeHidden = (htmlElement) => htmlElement.classList.remove("hidden");

const addHidden = (htmlElement) => htmlElement.classList.add("hidden");

const openFlightInfo = function () {
  addHidden(infoHotel);
  addHidden(infoRental);
  removeHidden(infoFlight);
};
const openHotelInfo = function () {
  addHidden(infoRental);
  addHidden(infoFlight);
  removeHidden(infoHotel);
};
const openRentalInfo = function () {
  addHidden(infoHotel);
  addHidden(infoFlight);
  removeHidden(infoRental);
};
const changeButtonColor = function (btn, i) {
  const notClickedArr = [...buttonsColor].filter((_, index) => index !== i);
  for (let j = 0; j < notClickedArr.length; j++) {
    console.log(notClickedArr[j].classList.remove("red-color"));
  }
  btn.classList.add("red-color");
};

buttonFlight.addEventListener("click", openFlightInfo);
buttonHotel.addEventListener("click", openHotelInfo);
buttonRental.addEventListener("click", openRentalInfo);

for (let i = 0; i < buttonsColor.length; i++) {
  buttonsColor[i].addEventListener("click", function () {
    changeButtonColor(buttonsColor[i], i);
  });
}
