import { loadScripts } from "../functions.js";
loadScripts("client");

$("#burger-button").on("click", function () {
  // $("#mobile-navbar").removeClass("hidden");
  // $("#mobile-navbar").fadeIn();

  $("#mobile-navbar").removeClass("-translate-x-full");
});

$("#close-mobile-navbar").on("click", function () {
  // $("#mobile-navbar").addClass("hidden");
  // $("#mobile-navbar").fadeOut();
  $("#mobile-navbar").addClass("-translate-x-full");
});

$("#toggle-dark-mode").on("click", () => {
  const htmlElement = document.documentElement;
  const currentMode = htmlElement.getAttribute("data-mode");
  const newMode = currentMode === "light" ? "dark" : "light";
  htmlElement.setAttribute("data-mode", newMode);
  localStorage.setItem("theme", newMode); // Toggle icons
  $("#toggle-icon-moon").toggleClass("hidden");
  $("#toggle-icon-sun").toggleClass("hidden");
  $("#aside-toggle-icon-moon").toggleClass("hidden");
  $("#aside-toggle-icon-sun").toggleClass("hidden");
});
$(document).ready(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-mode", savedTheme);
  if (savedTheme === "dark") {
    $("#toggle-icon-moon").addClass("hidden");
    $("#toggle-icon-sun").removeClass("hidden");
    $("#aside-toggle-icon-moon").addClass("hidden");
    $("#aside-toggle-icon-sun").removeClass("hidden");
  } else {
    $("#toggle-icon-moon").removeClass("hidden");
    $("#toggle-icon-sun").addClass("hidden");
    $("#aside-toggle-icon-moon").removeClass("hidden");
    $("#aside-toggle-icon-sun").addClass("hidden");
  }
});
