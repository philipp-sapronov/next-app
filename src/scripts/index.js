import { btn } from "./buttons"
import $ from "jquery"

console.log($)

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed", btn)

  $("#pricing-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 50,
    dragEndSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      998: {
        items: 3,
      },
    },
    // smartSpeed: 1000,
    stagePadding: 10,
  })

  $("#feedbacks-carousel").owlCarousel({
    loop: true,
    margin: 50,
    dragEndSpeed: 500,
    responsive: {
      0: {
        center: true,
        items: 1,
      },
      998: {
        center: false,
        items: 2,
      },
    },
    // smartSpeed: 1000,
  })

  $("#teachers-carousel").owlCarousel({
    // center: true,
    loop: true,
    margin: 50,
    items: 1,

    // smartSpeed: 500,
  })
})
