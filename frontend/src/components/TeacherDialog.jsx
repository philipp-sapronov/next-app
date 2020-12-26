import React, { useEffect, useRef, useState } from 'react'
import { Modal } from './modal'
import { CSSTransition } from 'react-transition-group'

export const useDialog = ({ content }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
    window.removeEventListener('click', handleClose)
  }

  const handleClick = ({ currentTarget }) => {
    if (anchorEl === currentTarget) return
    setTimeout(() => window.addEventListener('click', handleClose), 200)
    setAnchorEl(currentTarget)
  }

  const dialog = <Dialog anchorEl={anchorEl}>{content}</Dialog>
  return [dialog, handleClick]
}

export const Dialog = ({ anchorEl, children }) => {
  const modal = useRef()

  const handleClick = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (!modal.current || !anchorEl) return

    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'visible'
    }
  }, [anchorEl])

  return (
    <Modal rootElementId={'modal-root-centered'}>
      <CSSTransition in={!!anchorEl} timeout={300} mountOnEnter unmountOnExit classNames="fade">
        <div ref={modal} onClick={handleClick} className="modal centered">
          <div className={'mask'} style={{ pointerEvents: 'none' }} />
          {children}
        </div>
      </CSSTransition>
    </Modal>
  )
}
