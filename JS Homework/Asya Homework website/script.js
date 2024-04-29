"use strict";
const sidebarBtn = document.querySelector(".btn-header");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-sidebar");
const overlay = document.querySelector(".overlay");
const modal=document.querySelector("#my-modal")
const images = document.querySelectorAll(".img");
const closeBtn= document.querySelector(".close-modal-btn");
const header=document.querySelector('header');
const captionText=document.querySelector('#caption');

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeSidebar.addEventListener("click", function () {
  sidebar.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  sidebar.classList.add("hidden");
  overlay.classList.add("hidden");
});

const closeModal=function(){
  modal.style.display="none";
  header.classList.remove("hidden");
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    modal.style.display="block";
    const src = images[i].getAttribute("src");
    document.getElementById("zoomed").src = src;
    header.classList.add("hidden");
    closeBtn.addEventListener("click",closeModal);
    modal.addEventListener("click",closeModal);
    captionText.innerHTML=this.alt;
  });
}