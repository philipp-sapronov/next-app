import $ from "jquery"

import {$bpIpad, $bpIpadPro, $bpMedium} from './constants'

const nextBtn = "next-btn"
const prevBtn = "prev-btn"
const sliderButtons = "slider-buttons"

const pricingSection = "pricing"
const teachersSection = "teachers"
const feedbacksSection = "feedbacks"

export const initOwls = () => {
  const $pricingCarousel = $(`#${pricingSection}-carousel`)
  const $teachersCarousel = $(`#${teachersSection}-carousel`)
  const $feedbacksCarousel = $(`#${feedbacksSection}-carousel`)

  $pricingCarousel.owlCarousel({
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

  $feedbacksCarousel.owlCarousel({
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
  })

  $teachersCarousel.owlCarousel({
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
  })

  // TRIGGERS
  const $pricingButtons = document.querySelector(`.${pricingSection} .${sliderButtons}`)
  const $teachersButtons = document.querySelector(`.${teachersSection} .${sliderButtons}`)
  const $feedbacksButtons = document.querySelector(`.${feedbacksSection} .${sliderButtons}`)

  $pricingButtons.addEventListener("click", (e) => {
    if (e.target.classList.contains(nextBtn)) {
      handleNext($pricingCarousel)
    }

    if (e.target.classList.contains(prevBtn)) {
      handlePrev($pricingCarousel)
    }
  })

  $teachersButtons.addEventListener("click", (e) => {
    if (e.target.classList.contains(nextBtn)) {
      handleNext($teachersCarousel)
    }

    if (e.target.classList.contains(prevBtn)) {
      handlePrev($teachersCarousel)
    }
  })

  $feedbacksButtons.addEventListener("click", (e) => {
    if (e.target.classList.contains(nextBtn)) {
      handleNext($feedbacksCarousel)
    }

    if (e.target.classList.contains(prevBtn)) {
      handlePrev($feedbacksCarousel)
    }
  })
}

const handleNext = (owl) => {
  if (!owl) return
  owl.trigger("next.owl.carousel")
}

const handlePrev = (owl) => {
  if (!owl) return
  owl.trigger("prev.owl.carousel")
}
