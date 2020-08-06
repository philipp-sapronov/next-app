import { btn } from "./buttons"
import $ from "jquery"

console.log($)

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed", btn)

  $("#pricing-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 50,
    items: 3,
    mouseDrag: false,
    dragEndSpeed: 500,
    responsive: {
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
    // smartSpeed: 1000,
    stagePadding: 10,
  })

  $("#teachers-carousel").owlCarousel({
    // center: true,
    loop: true,
    margin: 50,
    items: 1,
    // smartSpeed: 500,
  })
})
