import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'

import { Logo, LogoSmall } from '../components/logo'
import { IconButton } from '../components/buttons'
import { PhoneIcon } from '../components/icons'
import { useCallOrderDialog } from '../components/callOrderDialog'

const TIMEOUT = 300
const heroSectionClassName = 'hero'

let position

const useHeader = () => {
  const [isShow, setIsShow] = useState(false)

  // should start at 0

  const showHeader = () => {
    const heroSection = document.querySelector(`.${heroSectionClassName}`)
    if (!heroSection) return

    const rect = heroSection.getBoundingClientRect()

    if (window.pageYOffset <= (rect.height || 0)) return setIsShow(false)
    setIsShow(true)
  }

  const hideHeader = () => {
    return setIsShow(false)
  }

  const handleScroll = () => {
    const scroll = window.pageYOffset
    if (scroll > position) {
      hideHeader()
    }

    if (scroll < position) {
      showHeader()
    }

    position = scroll
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return { isShow }
}

export const Header = ({ content }) => {
  const { isShow } = useHeader()

  return (
    <>
      <HeaderMain content={content} />
      <CSSTransition in={isShow} classNames="fade" mountOnEnter unmountOnExit timeout={TIMEOUT}>
        <HeaderFloat content={content} />
      </CSSTransition>
    </>
  )
}

export const HeaderMain = ({ content }) => {
  const { phone, button, link } = content
  const [dialog, toggleDialog] = useCallOrderDialog({ content })

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
            {button.orderCall}
          </IconButton>
          <Link href={link.href}>
            <a className="btn-lang btn btn--empty btn--light">{link.text}</a>
          </Link>
        </div>
      </div>
      {dialog}
    </header>
  )
}

export const HeaderFloat = ({ content }) => {
  const { phone, button } = content
  const [dialog, toggleDialog] = useCallOrderDialog({ content })

  return (
    <div className="header header-small">
      <div className="header__inner">
        <div className="header__logo">
          <LogoSmall />
        </div>
        <div className="header__nav small">
          <a
            className="phone-btn btn btn--empty btn--hover btn--dark"
            href={`tel:${phone}`}
            style={{ marginRight: 15 }}
          >
            {phone}
          </a>
          <IconButton
            onClick={toggleDialog}
            variant="primary"
            icon={<PhoneIcon />}
            className="call-offer-btn btn btn--filled btn--green btn--small btn--icon-sm"
          >
            {button.orderCall}
          </IconButton>
        </div>
      </div>
      {dialog}
    </div>
  )
}
