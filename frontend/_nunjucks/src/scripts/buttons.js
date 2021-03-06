import { closeModal, openModal, getModal, isActive, modals } from "./modal"
import { $bpDownSmall } from "./constants"
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

  const $buttons = document.querySelectorAll(`.cta-btn`)
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

    $modal.style.top = `${window.pageYOffset + rect.bottom + 12}px`

    if (window.innerWidth <= $bpDownSmall) {
      $modal.style.right = `20px`
    } else {
      $modal.style.right = `${window.innerWidth - rect.right}px`
    }

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
