import React, { useEffect, useRef, useState } from 'react'
import { Button } from './buttons'
import { $bpDownSmall } from '../../../frontend/src/scripts/constants'
import { Modal } from './modal'
import { CSSTransition } from 'react-transition-group'

const getUrl = () =>
  `${window.location.protocol}//${window.location.host}/api/applications/call-order`

const PHONE_LENGTH = 9
const CODE_UA = '+380'

const matchPhone = (value) => {
  const isMatched = value.length === PHONE_LENGTH
  return isMatched ? null : 'Incorrect phone'
}

const formatPhoneNumber = (value) => {
  return CODE_UA + value.toString()
}

const initialState = {
  phone: { value: '', error: null },
}

const Form = () => {
  const [state, setState] = useState(initialState)

  const handleChangePhone = ({ target }) => {
    let { value } = target

    if (value.length - state.phone.value.length > 1) {
      value = target.value.slice(target.value.length - PHONE_LENGTH)
    }

    if (!/^[0-9]{0,9}$/.test(value)) return
    const error = state.phone.error ? matchPhone(value) : state.phone.error
    setState((prev) => ({ ...prev, phone: { value, error } }))
  }

  const handleBlur = ({ target }) => {
    const { name, value } = target
    const error = matchPhone(value)
    setState((prev) => ({ ...prev, [name]: { ...prev[target.name], error } }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (state.phone.error) {
      return console.error('incorrect input')
    }

    fetch(getUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: formatPhoneNumber(state.phone.value),
      }),
    })
      .then((response) => {
        if (!response.ok) return Promise.reject(response)
        setState(initialState)
        alert('Your application has been sent successfully!')
        console.log(response)
      })
      .catch((response) => {
        alert('An error occurred while sending to the server!')
        return console.error(response)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__item">
        <label className="input-label">
          Телефон
          <span
            style={{
              color: 'var(--color-red, red)',
            }}
          >
            *
          </span>
          <div className="input-wrapper">
            <span className="countryCode">
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <rect width="20" height="6" fill="#00D1FF" />
                <rect y="6" width="20" height="6" fill="#F8EE00" />
              </svg>
              {CODE_UA}
            </span>
            <input
              className="input-text"
              id="input-phone"
              name="phone"
              onBlur={handleBlur}
              onChange={handleChangePhone}
              placeholder={'Телефон...'}
              type="text"
              value={state.phone.value}
            />
          </div>
        </label>
      </div>

      <div className="form__submit-wrapper">
        <Button
          type="submit"
          className="form__submit-btn btn btn--filled btn--green btn--large btn--uppercased"
        >
          Перезвоните мне
        </Button>
      </div>
    </form>
  )
}

export const useCallOrderDialog = () => {
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

  const dialog = <CallOrderDialog anchorEl={anchorEl} />
  return [dialog, handleClick]
}

export const CallOrderDialog = ({ anchorEl }) => {
  const modal = useRef()
  const arrow = useRef()

  const handleClick = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (!modal.current || !anchorEl) return

    const rect = anchorEl.getBoundingClientRect()
    modal.current.style.top = `${window.pageYOffset + rect.bottom + 12}px`

    document.body.style.overflowY = 'hidden'

    if (window.innerWidth <= $bpDownSmall) {
      modal.current.style.right = `20px`
    } else {
      modal.current.style.right = `${window.innerWidth - rect.right}px`
    }

    arrow.current.style.right = `${rect.width / 2}px`
    arrow.current.style.transform = `translateX(50%)`

    return () => {
      document.body.style.overflowY = 'visible'
    }
  }, [anchorEl])

  return (
    <Modal rootElementId={'modal-root'}>
      <CSSTransition in={!!anchorEl} timeout={300} mountOnEnter unmountOnExit classNames="fade">
        <div ref={modal} onClick={handleClick} className="modal modal-call-offer">
          <div ref={arrow} className="modal__arrow" />
          <Form />
        </div>
      </CSSTransition>
    </Modal>
  )
}
