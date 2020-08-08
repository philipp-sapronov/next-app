/* eslint-disable no-unused-vars */
import { subscribe } from "./buttons"
import { initOwls } from "./owl"
import { initHeader } from "./header"
document.addEventListener("DOMContentLoaded", function () {
  try {
    subscribe()
    initOwls()
    initHeader()
  } catch (e) {
    console.log(e, "Catch at root")
  }
})
