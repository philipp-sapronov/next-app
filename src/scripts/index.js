/* eslint-disable no-unused-vars */
import { btn } from "./buttons"
import $ from "jquery"

console.log($)

const $bpSmall = 601
const $bpMedium = 961
const $bpIpad = 769
const $bpLarge = 1281
const $bpIpadPro = 1025

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
      [$bpIpad]: {
        center: false,
        items: 2,
      },
      [$bpIpadPro]: {
        stagePadding: 20,
        items: 3,
      },
    },
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
      [$bpIpad]: {
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
    responsive: {
      0: {
        items: 1,
      },
      [$bpIpad]: {
        center: true,
        items: 2,
      },
      [$bpMedium]: {
        items: 1,
      },
    },
    // smartSpeed: 500,
  })
})
