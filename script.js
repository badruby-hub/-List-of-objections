"use strict";

document.querySelector("body").addEventListener("click", (event) => {
  let div = event.target.closest("div");
  if (!div) return;
  let chld = event.target.closest("li").querySelector("ul");
  if (chld) {
    chld.classList.toggle("block");
  }
});