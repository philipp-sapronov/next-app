export const useScrollToForm = () => {
  const onClick = () => {
    const section = document.getElementById('leadform-section')
    if (section === null) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return [onClick]
}
