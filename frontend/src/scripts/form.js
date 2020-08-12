import Inputmask from "inputmask"

export const initForm = () => {
  console.log("HALLO FORM")

  const $form = document.querySelector(`form.leading__form`)
  if (!$form) return console.error("Cannot find form")
  const $inputName = $form.querySelector("input[name='name']")
  const $inputEmail = $form.querySelector("input[name='email']")
  const $inputPhone = $form.querySelector("input[name='phone']")

  Inputmask({ mask: "+380 999999999", jitMasking: true }).mask($inputPhone)

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!$inputName || !$inputEmail || !$inputPhone) return console.error("Cannot find form inputs")

  $inputEmail.addEventListener("input", ({ target }) => {
    console.log(EMAIL_REGEX.test(target.value), "MATCH")
  })

  const handleSubmit = () => {
    console.log("submit")
  }

  $form.addEventListener("submit", handleSubmit)
}
