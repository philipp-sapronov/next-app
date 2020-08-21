import React from 'react'

import { Button } from './buttons'

const Modal = () => {
  return (
    <div class="modal modal-call-offer">
      <div class="modal__arrow" />
      <form class="form">
        <div class="form__item">
          <label class="input-label">
            Телефон
            <span style="color: var(--color-red, red);">*</span>
            <input class="input-text" placeholder="Телефон..." type="text" />
          </label>
        </div>

        <div class="form__submit-wrapper">
          <Button className="form__submit-btn btn btn--filled btn--green btn--large btn--uppercased">
            Перезвоните мне
          </Button>
        </div>
      </form>
    </div>
  )
}
