import React, { useState } from 'react'

import { SectionHeading } from '../components/headings'
import { Button } from '../components/buttons'

const getUrl = () => `${window.location.protocol}//${window.location.host}/api/applications/create`

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const PHONE_LENGTH = 9
const NAME_MIN_LENGTH = 2

const CODE_UA = '+380'

const formatPhoneNumber = (value) => {
  return CODE_UA + value.toString()
}

const matchName = (value) => {
  const isMatched = value.trim().length >= NAME_MIN_LENGTH
  return isMatched ? null : 'Incorrect name'
}

const matchEmail = (value) => {
  const isMatched = EMAIL_REGEX.test(value.trim())
  return isMatched ? null : 'Incorrect email'
}

const matchPhone = (value) => {
  const isMatched = value.length === PHONE_LENGTH
  return isMatched ? null : 'Incorrect phone'
}

const match = {
  name: matchName,
  email: matchEmail,
  phone: matchPhone,
}

const initialState = {
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

const Form = ({ inputEmail, inputName, inputPhone, confirmText }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (state.email.error || state.name.error || state.phone.error) {
      return console.error('incorrect input')
    }

    fetch(getUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: state.email.value,
        name: state.name.value,
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
    <form onSubmit={handleSubmit} className="leading__form form">
      <div className="form__item success">
        <label className="input-label" htmlFor="input-name">
          {inputName.label}
        </label>
        <input
          className="input-text"
          id="input-name"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={inputName.placeholder}
          type="text"
          value={state.name.value}
        />
        <span className="input-msg" data-name="name">
          {state.name.error}
        </span>
      </div>

      <div className="form__item">
        <label className="input-label" htmlFor="input-email">
          {inputEmail.label}
        </label>
        <input
          className="input-text"
          id="input-email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={inputEmail.placeholder}
          type="text"
          value={state.email.value}
        />

        <span className="input-msg" data-name="email">
          {state.email.error}
        </span>
      </div>

      <div className="form__item error">
        <label className="input-label" htmlFor="input-phone">
          {inputPhone.label}
        </label>

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
            placeholder={inputPhone.placeholder}
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
          className="form__submit-btn btn btn--filled btn--red btn--large btn--uppercased"
          type="submit"
        >
          {'buttons.sendApplication'}
        </Button>
        <p className="confirm-msg">{confirmText}</p>
      </div>
    </form>
  )
}

export const Leading = ({ title, optionsTitle, form, options, subscription }) => {
  return (
    <section id="leadform-section" className="leading section">
      <div className="leading__inner container">
        <div className="heading-wrapper">
          <SectionHeading className="--center --light" text={title} />
        </div>

        <div className="leading__content">
          <div className="left-side">
            <h4 className="content__heading">{optionsTitle}:</h4>
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
          </div>

          <div className="right-side">
            <div className="leading__card">
              <div className="card-layer"></div>
              <div className="card__inner">
                <Form {...form} />
              </div>
            </div>

            <div className="additional-msg">
              <div className="additional-msg__arrow">
                <svg fill="none">
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
