import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Logo, LogoSmall } from '../components/logo'
import { IconButton } from '../components/buttons'
import { PhoneIcon } from '../components/icons'
import { useCallOrderDialog } from '../components/callOrderDialog'

const phone = '+38 (068) 228-08-08'
const heroSectionClassName = 'hero'

const useHeader = () => {
  const [isShow, setIsShow] = useState(false)

  const handleScroll = () => {
    const heroSection = document.querySelector(`.${heroSectionClassName}`)
    if (!heroSection) return

    const rect = heroSection.getBoundingClientRect()

    if (window.pageYOffset <= (rect.height || 0)) return setIsShow(false)
    setIsShow(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return { isShow }
}

export const Header = () => {
  const { isShow } = useHeader()

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
  const [dialog, toggleDialog] = useCallOrderDialog()

  return (
    <header className="header header-main">
      <div className="header__inner">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__nav">
          <a className="phone-btn btn btn--empty btn--light" href={`tel: ${phone}`}>
            {phone}
          </a>
          <IconButton
            onClick={toggleDialog}
            variant="primary"
            icon={<PhoneIcon />}
            className="call-offer-btn btn btn--outlined btn--light btn--small btn--icon-sm"
          >
            Заказать звонок
          </IconButton>
        </div>
      </div>
      {dialog}
    </header>
  )
}

export const HeaderFloat = () => {
  const [dialog, toggleDialog] = useCallOrderDialog()

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
          <IconButton
            onClick={toggleDialog}
            variant="primary"
            icon={<PhoneIcon />}
            className="call-offer-btn btn btn--outlined btn--light btn--small btn--icon-sm"
          >
            Заказать звонок
          </IconButton>
        </div>
      </div>
      {dialog}
    </div>
  )
}
