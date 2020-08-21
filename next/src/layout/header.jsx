import React from 'react'

import { Logo } from '../components/logo'
import { Button } from '../components/buttons'
import { PhoneIcon } from '../components/icons'

export const Header = () => {
  return (
    <header class="header header-main">
      <div class="header__inner">
        <div class="header__logo">
          <Logo variant="full" />
        </div>
        <div class="header__nav">
          <a class="phone-btn btn btn--empty btn--light" href="tel: +38 (068) 228-08-08">
            +38 (068) 228-08-08"
          </a>
          <button class="call-offer-btn icon--btn btn--outlined btn--light  btn--dropdown">
            <PhoneIcon />
          </button>
          <Button
            variant="primary"
            className="call-offer-btn btn btn--outlined btn--light btn--small btn--dropdown default"
          >
            Заказать звонок
          </Button>
          <Button
            variant="primary"
            className="language-menu-btn btn btn--empty btn--hover btn--light btn--small btn--square btn--uppercased btn--dropdown"
          >
            ru
          </Button>
        </div>
      </div>
    </header>
  )
}

export const HeaderFloat = () => {
  return (
    <div class="header header-small">
      <div class="header__inner">
        <div class="header__logo">{logo.small()}</div>
        <div class="header__nav">
          <a
            class="phone-btn btn btn--empty btn--hover btn--light"
            href={'tel:' + '+38 (068) 228-08-08'}
          >
            {'+38 (068) 228-08-08'}
          </a>
          <button class="call-offer-btn icon--btn btn--outlined btn--light  btn--dropdown">
            <PhoneIcon />
          </button>
          <Button
            variant="primary"
            className="call-offer-btn btn btn--outlined btn--light  btn--dropdown"
          >
            Заказать звонок
          </Button>
          <Button
            variant="primary"
            className="language-menu-btn btn btn--empty btn--hover btn--light btn--square btn--uppercased btn--dropdown"
          >
            ru
          </Button>
        </div>
      </div>
    </div>
  )
}
