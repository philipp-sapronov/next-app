export const modals = {
  callOfferClass: "modal-call-offer",
  activeClass: "active",
  visibleClass: "visible",
}

export const openModal = ($el) => {
  if (!$el) return
  $el.classList.add(modals.activeClass)
  setTimeout(() => {
    $el && $el.classList.add(modals.visibleClass)
  }, 0)
}

export const closeModal = ($el) => {
  if (!$el) return

  $el.classList.remove(modals.visibleClass)
  setTimeout(() => {
    $el && $el.classList.remove(modals.activeClass)
  }, 0)
}

export const toggleModal = ($el) => () => {
  if (!$el) return
  if ($el.classList.contains(modals.activeClass)) {
    return closeModal($el)
  }

  return openModal($el)
}

export const handleCloseModal = () => {
  const $modal = document.querySelector(`.${modals.callOfferClass}`)
  if ($modal === null) return
  closeModal($modal)
}

export const getModal = () => {
  return document.querySelector(`.${modals.callOfferClass}`)
}

export const isActive = ($el) => $el && $el.classList.contains(modals.activeClass)
