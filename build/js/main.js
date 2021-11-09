'use strict';

const pageNavList = document.querySelector(".page-header__navigation");
const navToggle = document.querySelector(".page-header__toggle");
const pageBody = document.querySelector(".page__body");
const telInput = document.querySelector(".info-form__input--tel");

let reg = /[A-Za-zА-яа-яЁё]/g

telInput.addEventListener("input", function() {
  this.value = this.value.replace(reg, "");
});

const navLink = document.querySelectorAll(".page-header__navigation-link").forEach(element => {
  element.addEventListener("click", function() {
    pageNavList.classList.remove("page-header__navigation--opened");
    pageNavList.classList.add("page-header__navigation--closed");
    pageBody.classList.remove("page__body--scroll-disabled");
  });
}) ;

navToggle.addEventListener("click", function() {
  if (pageNavList.classList.contains("page-header__navigation--closed")) {
    pageNavList.classList.remove("page-header__navigation--closed");
    pageNavList.classList.add("page-header__navigation--opened");
    pageBody.classList.add("page__body--scroll-disabled");
  } else {
    pageNavList.classList.remove("page-header__navigation--opened");
    pageNavList.classList.add("page-header__navigation--closed");
    pageBody.classList.remove("page__body--scroll-disabled");
  }
})
