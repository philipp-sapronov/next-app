import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

export const Modal = ({ children, rootElementId }) => {
  const el = useRef()
  const root = useRef()
  const [, setMounted] = useState(false)

  useEffect(() => {
    el.current = document.createElement('div')
    root.current = document.getElementById(rootElementId)
    root.current.appendChild(el.current)
    setMounted(true)

    return () => {
      root.current.removeChild(el.current)
      setMounted(false)
    }
  }, [])

  return root.current ? ReactDOM.createPortal(children, el.current) : null
}
