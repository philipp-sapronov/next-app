import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Logo, LogoSmall } from '../components/logo'
import { Button } from '../components/buttons'
import { PhoneIcon } from '../components/icons'

const phone = '+38 (068) 228-08-08'
const heroSection = 'hero'

const useHeader = () => {
  const [isShow, setIsShow] = useState(false)

  const handleScroll = () => {
    const $heroSection = document.querySelector(`.${heroSection}`)

    if (!heroSection) return

    const rect = $heroSection.getBoundingClientRect()

    if (window.pageYOffset <= (rect.height || 0)) {
      return setIsShow(false)
    }

    setIsShow(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return { isShow }
}

export const Header = () => {
  const { isShow } = useHeader()

  console.log(isShow)

  return (
    <>
      <HeaderMain />
      <CSSTransition in={isShow} classNames="fade" mountOnEnter unmountOnExit timeout={500}>
        <HeaderFloat />
      </CSSTransition>
    </>
  )
}

export const HeaderMain = () => {
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
