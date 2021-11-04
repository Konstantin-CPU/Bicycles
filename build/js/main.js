'use strict';
const pageNavList = document.querySelector(".page-header__navigation");
const navToggle = document.querySelector(".page-header__toggle");

pageNavList.classList.remove("page-header__navigation--nojs");

navToggle.addEventListener("click", function() {
  if (pageNavList.classList.contains("page-header__navigation--closed")) {
    pageNavList.classList.remove("page-header__navigation--closed");
    pageNavList.classList.add("page-header__navigation--opened");
  } else {
    pageNavList.classList.remove("page-header__navigation--opened");
    pageNavList.classList.add("page-header__navigation--closed");
  }
})
