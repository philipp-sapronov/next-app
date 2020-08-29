import Inputmask from "inputmask"

const url = `${window.location.protocol}//localhost:8000/applications/create`

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PHONE_LENGTH = 13
const NAME_MIN_LENGTH = 2
const messageRequired = "This field cannot be empty"
const CODE_UA = "+380"

const setInputError = ($form, params) => {
  const $msg = $form.querySelector(`.input-msg[data-name="${params.name}"]`)
  const $input = $form.querySelector(`input[name="${params.name}"]`)

  if (!$msg || !$input) return

  $msg.textContent = params.error || ""
  $input.classList.add(params.error ? "error" : "success")
  $input.classList.remove(params.error ? "success" : "error")
}

const clearForm = ($form) => {
  const $msgs = $form.querySelectorAll(`.input-msg`)
  const $inputs = $form.querySelectorAll(`input`)

  $inputs.forEach(($el) => {
    $el.classList.remove("success")
    $el.classList.remove("error")
    $el.value = ""
  })

  $msgs.forEach(($el) => {
    $el.textContent = ""
  })
}

const initialState = () => ({
  $name: { error: messageRequired, value: null, name: "name" },
  $email: { error: messageRequired, value: null, name: "email" },
  $phone: { error: messageRequired, value: null, name: "phone" },
})

const formatPhoneNumber = (value) => {
  return CODE_UA + value.split(" ").join('')
}

const matchName = (value) => {
  const isMatched = value.trim().length >= NAME_MIN_LENGTH
  return {
    error: isMatched ? null : "Incorrect name",
    match: isMatched,
  }
}
const matchEmail = (value) => {
  const isMatched = EMAIL_REGEX.test(value.trim())
  return {
    error: isMatched ? null : "Incorrect email",
    match: isMatched,
  }
}

const matchPhone = (value) => {
  const isMatched = formatPhoneNumber(value.trim()).length === PHONE_LENGTH

  console.log(formatPhoneNumber(value.trim()), 'phone')
  return {
    error: isMatched ? null : "Incorrect phone",
    match: isMatched,
  }
}

class State {
  constructor($form) {
    this.$form = $form
    this.refresh()
  }

  get name() {
    return this.$name
  }

  get email() {
    return this.$email
  }

  get phone() {
    return this.$phone
  }

  set name(value) {
    if (typeof value !== "string") return
    this.onStateChange("name", value, matchName)
  }

  set email(value) {
    if (typeof value !== "string") return
    this.onStateChange("email", value, matchEmail)
  }

  set phone(value) {
    if (typeof value !== "string") return
    this.onStateChange("phone", value, matchPhone)
  }

  onStateChange(name, value, test) {
    if (typeof value !== "string") return
    const selfName = "$" + name
    const { error } = test(value.trim())
    this[selfName].value = value.trim()
    this[selfName].error = error
    if (!error) setInputError(this.$form, this[selfName])
  }

  refresh() {
    Object.assign(this, initialState())
  }
}

export const initForm = () => {
  const $form = document.querySelector(`form.leading__form`)

  if (!$form) return console.error("Cannot find form")

  const $inputName = $form.querySelector("input[name='name']")
  const $inputEmail = $form.querySelector("input[name='email']")
  const $inputPhone = $form.querySelector("input[name='phone']")

  if (!$inputName || !$inputEmail || !$inputPhone) return console.error("Cannot find form inputs")
  Inputmask({ mask: "99 9999999", jitMasking: true }).mask($inputPhone)

  const state = new State($form)

  const $inputs = [$inputName, $inputEmail, $inputPhone]

  const onChange = ({ target }) => {
    state[target.name] = target.value
  }

  const onBlur = ({ target }) => {
    setInputError($form, state[target.name])
  }

  $inputs.forEach(($el) => {
    $el.addEventListener("input", onChange)
    $el.addEventListener("blur", onBlur)
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (state.email.error || state.name.error || state.phone.error) {
      setInputError($form, state.email)
      setInputError($form, state.name)
      setInputError($form, state.phone)
      return console.error("incorrect input")
    }

    console.log(state, "state")
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.email.value,
        name: state.name.value,
        phone: formatPhoneNumber(state.phone.value),
      }),
    })
      .then((response) => {
        if (!response.ok) return Promise.reject(response)
        clearForm($form)
        state.refresh()
        alert("Your application has been sent successfully!")
        console.log(response)
      })
      .catch((response) => {
        alert("An error occurred while sending to the server!")
        return console.error(response)
      })
  }

  $form.addEventListener("submit", handleSubmit)
}
