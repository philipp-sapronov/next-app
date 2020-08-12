/* eslint-disable no-unused-vars */
import { subscribe } from "./buttons"
import { initOwls } from "./owl"
import { initHeader } from "./header"
import { initForm } from "./form"

document.addEventListener("DOMContentLoaded", function () {
  try {
    subscribe()
    initOwls()
    initHeader()
    console.log("123")
    initForm()
  } catch (e) {
    console.log(e, "Catch at root")
  }
})
