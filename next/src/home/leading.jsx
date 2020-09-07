import React, { useState } from 'react'

import { SectionHeading } from '../components/headings'
import { Button } from '../components/buttons'

const getUrl = () => `${window.location.protocol}//${window.location.host}/api/create`

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const PHONE_LENGTH = 9
const NAME_MIN_LENGTH = 2

const phoneMsgRegexp = new RegExp(/phone/, 'igm')
const emailMsgRegexp = new RegExp(/email/, 'igm')
const nameMsgRegexp = new RegExp(/name/, 'igm')

const initialState = {
  loading: false,
  phone: {
    value: '',
    error: null,
  },
  name: {
    value: '',
    error: null,
  },
  email: {
    value: '',
    error: null,
  },
}

const Form = ({ content }) => {
  const { code, button, message, form } = content
  const { name, email, phone } = form

  const [state, setState] = useState(initialState)

  const formatPhoneNumber = (value) => {
    return code + value.toString()
  }

  const matchName = (value) => {
    const isMatched = value.trim().length >= NAME_MIN_LENGTH
    return isMatched ? null : name.message.incorrect
  }

  const matchEmail = (value) => {
    const isMatched = EMAIL_REGEX.test(value.trim())
    return isMatched ? null : email.message.incorrect
  }

  const matchPhone = (value) => {
    const isMatched = value.length === PHONE_LENGTH
    return isMatched ? null : phone.message.incorrect
  }

  const match = {
    name: matchName,
    email: matchEmail,
    phone: matchPhone,
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

  const handleChange = ({ target }) => {
    const { name, value } = target
    const error = state[name].error ? match[name](value) : state[name].error
    setState((prev) => ({ ...prev, [name]: { value, error } }))
  }

  const handleBlur = ({ target }) => {
    const { name, value } = target
    const error = match[name](value)
    setState((prev) => ({ ...prev, [name]: { ...prev[target.name], error } }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (state.loading) return

    if (!state.name.value) {
      return setState((prev) => ({
        ...prev,
        name: { ...prev.name, error: name.message.required },
      }))
    }

    if (!state.email.value) {
      return setState((prev) => ({
        ...prev,
        email: { ...prev.email, error: email.message.required },
      }))
    }

    if (!state.phone.value) {
      return setState((prev) => ({
        ...prev,
        phone: { ...prev.phone, error: phone.message.required },
      }))
    }

    if (state.email.error || state.name.error || state.phone.error) {
      return console.error('incorrect input')
    }

    setState((prev) => ({ ...prev, loading: true }))

    try {
      const response = await fetch(getUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: state.email.value,
          name: state.name.value,
          phone: formatPhoneNumber(state.phone.value),
        }),
      })

      if (!response.ok) {
        const error = await response.json()

        if (phoneMsgRegexp.test(error.message)) {
          return setState((prev) => ({
            ...prev,
            phone: { ...prev.phone, error: phone.message.incorrect },
          }))
        }

        if (emailMsgRegexp.test(error.message)) {
          return setState((prev) => ({
            ...prev,
            email: { ...prev.email, error: email.message.incorrect },
          }))
        }

        if (nameMsgRegexp.test(error.message)) {
          return setState((prev) => ({
            ...prev,
            name: { ...prev.name, error: name.message.incorrect },
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
    <form onSubmit={handleSubmit} className="leading__form form">
      <div className="form__item success">
        <label className="input-label" htmlFor="input-name">
          {name.label}
        </label>
        <input
          className={`input-text ${state.name.error ? 'error' : ''}`}
          id="input-name"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={name.placeholder}
          type="text"
          value={state.name.value}
        />
        <span className="input-msg" data-name="name">
          {state.name.error}
        </span>
      </div>

      <div className="form__item">
        <label className="input-label" htmlFor="input-email">
          {email.label}
        </label>
        <input
          className={`input-text ${state.email.error ? 'error' : ''}`}
          id="input-email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={email.placeholder}
          type="text"
          value={state.email.value}
        />

        <span className="input-msg" data-name="email">
          {state.email.error}
        </span>
      </div>

      <div className="form__item error">
        <label className="input-label" htmlFor="input-phone">
          {phone.label}
        </label>

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
            placeholder={phone.placeholder}
            type="text"
            value={state.phone.value}
          />
        </div>

        <span className="input-msg" data-name="phone">
          {state.phone.error}
        </span>
      </div>

      <div className="form__submit-wrapper">
        <Button
          loading={state.loading}
          className="form__submit-btn btn btn--filled btn--red btn--large btn--uppercased"
          type="submit"
        >
          {button.submit}
        </Button>
      </div>
    </form>
  )
}

export const Leading = ({ content }) => {
  const { main, common } = content

  const { title, optionsTitle, options, subscription, postscriptum } = main

  return (
    <section id="leadform-section" className="leading section">
      <div className="leading__inner container">
        <div className="heading-wrapper">
          <SectionHeading className="--center --light" text={title} />
        </div>

        <div className="leading__content">
          <div className="left-side">
            <h4 className="content__heading">{optionsTitle}</h4>
            <ul className="list">
              <div className="content__line">
                <svg width="3" height="100%">
                  <line
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeDasharray="3 8"
                  ></line>
                </svg>
              </div>
              {options.map((item, idx) => {
                return (
                  <li key={idx} className="list__item">
                    <span className="item__number">{item.number}</span>
                    <p className="item__text">{item.text}</p>
                  </li>
                )
              })}
            </ul>
            <div className="postcriptum">
              <span className="postscriptum__text">{postscriptum}</span>
            </div>
          </div>

          <div className="right-side">
            <div className="leading__card">
              <div className="card-layer"></div>
              <div className="card__inner">
                <Form content={common} />
              </div>
            </div>

            <div className="additional-msg">
              <div className="additional-msg__arrow">
                <svg fill="none" width="116" height="115">
                  <use xlinkHref="./assets/sprite.svg#leading-arrow" />
                </svg>
              </div>
              <span className="additional-msg__text">{subscription}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
