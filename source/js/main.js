'use strict';

window.onload = function() {
  const pageNavList = document.querySelector(".page-header__navigation");
  const navToggle = document.querySelector(".page-header__toggle");
  const pageBody = document.querySelector(".page__body");

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
}
