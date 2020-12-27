import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'

import { Logo, LogoSmall } from '../components/logo'
import { IconButton } from '../components/buttons'
import { PhoneIcon } from '../components/icons'
import { useCallOrderDialog } from '../components/callOrderDialog'
import { useRecoilValue } from 'recoil'
import { configState } from '../stores/config'
import { useTranslation } from 'react-i18next'
import { Route } from '../constants'

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
      <CSSTransition in={isShow} classNames="fade" mountOnEnter unmountOnExit timeout={400}>
        <StickyHeader />
      </CSSTransition>
    </>
  )
}

export const HeaderMain = () => {
  const { phoneFormatted: phone } = useRecoilValue(configState)
  const { t } = useTranslation()

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
            {t('button:orderCall')}
          </IconButton>
          {/*TODO: to i18next*/}
          <Link href={Route.ru.link}>
            <a className="btn-lang btn btn--empty btn--light">{Route.ru.text}</a>
          </Link>
        </div>
      </div>
      {dialog}
    </header>
  )
}

export const StickyHeader = () => {
  const { phoneFormatted: phone } = useRecoilValue(configState)
  const { t } = useTranslation()

  const [dialog, toggleDialog] = useCallOrderDialog()

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
            {t('button:orderCall')}
          </IconButton>
        </div>
      </div>
      {dialog}
    </div>
  )
}
