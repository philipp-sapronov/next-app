const smallHeaderClass = "header-small"
const activeClass = "active"
const visibleClass = "visible"
const heroSection = "hero"

const delay = 500

export const initHeader = () => {
  const handleScroll = () => {
    const $header = document.querySelector(`.${smallHeaderClass}`)
    const $heroSection = document.querySelector(`.${heroSection}`)

    if (!$header || !$heroSection) return

    const rect = $heroSection.getBoundingClientRect()

    if (window.pageYOffset <= (rect.height || 0)) {
      if (!$header.classList.contains(activeClass)) return

      $header.classList.remove(activeClass)
      setTimeout(() => {
        if (!$header) return
        $header.classList.remove(visibleClass)
      }, delay)

      return
    }

    if ($header.classList.contains(activeClass)) return
    $header.classList.add(visibleClass)

    setTimeout(() => {
      if (!$header) return
      $header.classList.add(activeClass)
    }, 0)
  }

  window.addEventListener("scroll", handleScroll)
}
