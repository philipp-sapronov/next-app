import React from 'react'

import { Button } from './buttons'

export const Modal = () => {
  return (
    <div className="modal modal-call-offer">
      <div className="modal__arrow" />
      <form className="form">
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
            <input className="input-text" placeholder="Телефон..." type="text" />
          </label>
        </div>

        <div className="form__submit-wrapper">
          <Button className="form__submit-btn btn btn--filled btn--green btn--large btn--uppercased">
            Перезвоните мне
          </Button>
        </div>
      </form>
    </div>
  )
}
