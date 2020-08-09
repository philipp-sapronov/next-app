import { TRANSITION_DELAY } from "./constants"

export const modals = {
  callOfferClass: "modal-call-offer",
  arrowClass: "modal__arrow",
  activeClass: "active",
  visibleClass: "visible",
}

export const openModal = ($el) => {
  if (!$el) return
  $el.classList.add(modals.activeClass)

  document.style.overflowY = "hidden"

  setTimeout(() => {
    $el && $el.classList.add(modals.visibleClass)
  }, 100)
}

export const closeModal = ($el) => {
  document.style.overflowY = "visible"
  if (!$el) return

  $el.classList.remove(modals.visibleClass)
  setTimeout(() => {
    $el && $el.classList.remove(modals.activeClass)
  }, TRANSITION_DELAY)
}

export const getModal = () => {
  return document.querySelector(`.${modals.callOfferClass}`)
}

export const isActive = ($el) => $el && $el.classList.contains(modals.activeClass)
