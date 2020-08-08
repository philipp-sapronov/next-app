import { closeModal, openModal, getModal, isActive } from "./modal"

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

  const $button = document.querySelector(`.${callOfferClass}`)
  if ($button === null) return errorMessage(callOfferClass)

  // close modal
  const handleCloseModal = ({ target }) => {
    const $modal = getModal()
    if ($modal === null) return

    if (target.closest(`.${callOfferClass}`)) {
      return
    }

    closeModal($modal)
    window.removeEventListener("click", handleCloseModal)
  }

  //  open modal
  const handleOpenCallOfferModal = () => {
    const $modal = getModal()
    if ($modal === null) return

    if (isActive($modal)) {
      return closeModal($modal)
    }

    openModal($modal)
    window.addEventListener("click", handleCloseModal)
  }

  // subscribe
  $button.addEventListener("click", handleOpenCallOfferModal)
}

export const subscribe = () => {
  subscribeCallOfferButton()
  subscribeCtaButtons()
}
