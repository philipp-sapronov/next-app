import React from 'react'

import { Logo, LogoSmall } from '../components/logo'
import { Button } from '../components/buttons'
import { PhoneIcon } from '../components/icons'

const phone = '+38 (068) 228-08-08'

export const Header = () => {
  return (
    <header className="header header-main">
      <div className="header__inner">
        <div className="header__logo">
          <Logo variant="full" />
        </div>
        <div className="header__nav">
          <a className="phone-btn btn btn--empty btn--light" href={`tel: ${phone}`}>
            {phone}
          </a>
          <button className="call-offer-btn icon--btn btn--outlined btn--light  btn--dropdown">
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
    <div className="header header-small">
      <div className="header__inner">
        <div className="header__logo">
          <LogoSmall />
        </div>
        <div className="header__nav">
          <a className="phone-btn btn btn--empty btn--hover btn--light" href={`tel:${phone}`}>
            {phone}
          </a>
          <button className="call-offer-btn icon--btn btn--outlined btn--light  btn--dropdown">
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
