import { btn } from "./buttons"
import $ from "jquery"

console.log($)

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed", btn)

  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 70,
    items: 3,
    smartSpeed: 500,
    stagePadding: 10,
  })
})
