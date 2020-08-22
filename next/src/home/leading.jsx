import React from 'react'

import { SectionHeading } from '../components/headings'

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
                <form className="leading__form form">
                  <div className="form__item success">
                    <label className="input-label" htmlFor="input-name">
                      {form.inputName.label}
                    </label>
                    <input
                      className="input-text"
                      name="name"
                      placeholder="{form.inputName.placeholder'}"
                      id="input-name"
                      type="text"
                    />
                    <span className="input-msg" data-name="name"></span>
                  </div>

                  <div className="form__item">
                    <label className="input-label" htmlFor="input-email">
                      {form.inputEmail.label}
                    </label>
                    <input
                      className="input-text"
                      name="email"
                      placeholder="{form.inputEmail.placeholder'}"
                      id="input-email"
                      type="text"
                    />
                    <span className="input-msg" data-name="email"></span>
                  </div>

                  <div className="form__item error">
                    <label className="input-label" htmlFor="input-phone">
                      {form.inputPhone.label}
                    </label>
                    <input
                      className="input-text"
                      name="phone"
                      placeholder="{form.inputPhone.placeholder'}"
                      id="input-phone"
                      type="text"
                    />
                    <span className="input-msg" data-name="phone"></span>
                  </div>

                  <div className="form__submit-wrapper">
                    <button
                      className="form__submit-btn btn btn--filled btn--red btn--large btn--uppercased"
                      type="submit"
                    >
                      {'buttons.sendApplication'}
                    </button>
                    <p className="confirm-msg">{form.confirmText}</p>
                  </div>
                </form>
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
