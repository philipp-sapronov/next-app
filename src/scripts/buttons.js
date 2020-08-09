import { closeModal, openModal, getModal, isActive, modals } from "./modal"

const buttonsSelectors = {
  languageMenuClass: "language-menu-btn",
  mainCtaClass: "cta-btn",
  callOfferClass: "call-offer-btn",
}

const sections = {
  leadFormId: "leadform-section",
}

const errorMessage = (className) => {
  console.error("Cannot find any button with class " + className)
}

const subscribeCtaButtons = () => {
  const { mainCtaClass } = buttonsSelectors

  const $buttons = document.querySelectorAll(`.${mainCtaClass}`)
  if ($buttons.length === 0) return errorMessage(mainCtaClass)

  const scrollToForm = () => {
    const $section = document.getElementById(sections.leadFormId)
    if ($section === null) return

    $section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  $buttons.forEach((btn) => {
    btn.addEventListener("click", scrollToForm)
  })
}

const subscribeCallOfferButton = () => {
  const { callOfferClass } = buttonsSelectors

  const $buttons = document.querySelectorAll(`.${callOfferClass}`)
  if ($buttons.length === 0) return errorMessage(callOfferClass)

  // close modal
  const handleCloseModal = ({ target }) => {
    const $modal = getModal()
    if ($modal === null) return

    if (target.closest(`.${callOfferClass}`)) {
      return
    }

    if (target.closest(`.${modals.callOfferClass}`)) {
      return
    }

    closeModal($modal)
    window.removeEventListener("click", handleCloseModal)
  }

  //  open modal
  const handleOpenCallOfferModal = ({ currentTarget }) => {
    const rect = currentTarget.getBoundingClientRect()

    const $modal = getModal()
    const $arrow = $modal.querySelector(`.${modals.arrowClass}`)
    console.log(rect, "rect")

    if (currentTarget.classList.contains("default")) {
      $modal.style.position = `absolute`
    } else {
      $modal.style.position = `fixed`
    }

    $modal.style.top = `${rect.bottom + 20}px`
    $modal.style.left = `${rect.right}px`
    $modal.style.transform = `translateX(-100%)`
    $arrow.style.right = `${rect.width / 2}px`
    $arrow.style.transform = `translateX(50%)`

    if ($modal === null) return

    if (isActive($modal)) {
      return closeModal($modal)
    }

    openModal($modal)
    window.addEventListener("click", handleCloseModal)
  }

  // subscribe
  $buttons.forEach((btn) => {
    btn.addEventListener("click", handleOpenCallOfferModal)
  })
}

export const subscribe = () => {
  subscribeCallOfferButton()
  subscribeCtaButtons()
}
