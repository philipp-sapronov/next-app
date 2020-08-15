import Inputmask from "inputmask"

const url = `${window.location.protocol}//${window.location.host}/api/applications/create`

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const initForm = () => {
  const $form = document.querySelector(`form.leading__form`)
  if (!$form) return console.error("Cannot find form")
  const $inputName = $form.querySelector("input[name='name']")
  const $inputEmail = $form.querySelector("input[name='email']")
  const $inputPhone = $form.querySelector("input[name='phone']")

  Inputmask({ mask: "+380 999999999", jitMasking: true }).mask($inputPhone)

  if (!$inputName || !$inputEmail || !$inputPhone) return console.error("Cannot find form inputs")

  $inputEmail.addEventListener("blur", ({ target }) => {
    const isMatched = EMAIL_REGEX.test(target.value.trim())
    alert(isMatched)
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = {
      phone: $inputPhone.value,
      email: $inputEmail.value,
      name: $inputName.value,
    }

    console.log(body, "BODY")

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(console.log)
      .catch(console.error)
  }

  $form.addEventListener("submit", handleSubmit)
}
