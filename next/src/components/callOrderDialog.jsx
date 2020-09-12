import React, { useEffect, useRef, useState } from 'react'
import { Button } from './buttons'
import { Modal } from './modal'
import { CSSTransition } from 'react-transition-group'

const phoneMsgRegexp = new RegExp(/phone/, 'igm')

const getUrl = () => `${window.location.protocol}//${window.location.host}/api/call-order`

const PHONE_LENGTH = 9

const initialState = {
  loading: false,
  phone: { value: '', error: null },
}

const Form = ({ content }) => {
  const { code, form, button, message } = content
  const [state, setState] = useState(initialState)

  const matchPhone = (value) => {
    const isMatched = value.length === PHONE_LENGTH
    return isMatched ? null : form.phone.message.incorrect
  }

  const formatPhoneNumber = (value) => {
    return code + value.toString()
  }

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (state.phone.error) {
      return console.error('incorrect input')
    }

    if (!state.phone.value) {
      return setState((prev) => ({
        ...prev,
        phone: { ...prev.phone, error: form.phone.message.required },
      }))
    }

    setState((prev) => ({ ...prev, loading: true }))

    try {
      const response = await fetch(getUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: formatPhoneNumber(state.phone.value),
        }),
      })

      if (!response.ok) {
        const error = await response.json()

        if (phoneMsgRegexp.test(error.message)) {
          return setState((prev) => ({
            ...prev,
            phone: { ...prev.phone, error: form.phone.message.incorrect },
          }))
        }

        return Promise.reject(error)
      }

      console.log(response, 'success')
      setState(initialState)
      alert(message.success.applicationSent)
    } catch (error) {
      return alert(message.error.default)
    } finally {
      setState((prev) => ({ ...prev, loading: false }))
    }
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
              {code}
            </span>
            <input
              className={`input-text ${state.phone.error ? 'error' : ''}`}
              id="input-phone"
              name="phone"
              onBlur={handleBlur}
              onChange={handleChangePhone}
              placeholder={'Телефон...'}
              type="text"
              value={state.phone.value}
            />
          </div>
          <span className="input-msg" data-name="phone">
            {state.phone.error}
          </span>
        </label>
      </div>

      <div className="form__submit-wrapper">
        <Button
          loading={state.loading}
          type="submit"
          className="form__submit-btn btn btn--filled btn--green btn--large btn--uppercased"
        >
          {button.orderCall}
        </Button>
      </div>
    </form>
  )
}

export const useCallOrderDialog = ({ content }) => {
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

  const dialog = <CallOrderDialog anchorEl={anchorEl} content={content} />
  return [dialog, handleClick]
}

export const CallOrderDialog = ({ anchorEl, content }) => {
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

    if (window.innerWidth <= 600) {
      modal.current.style.right = `20px`
      arrow.current.style.right = `${window.innerWidth - rect.right - 20 + rect.width / 2}px`
    } else {
      const isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
      const scrollbarWidth = !isMacLike ? 15 : 0
      modal.current.style.right = `${window.innerWidth - rect.right - scrollbarWidth}px`
      arrow.current.style.right = `${rect.width / 2}px`
    }

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
          <Form content={content} />
        </div>
      </CSSTransition>
    </Modal>
  )
}
