import React from 'react'
import { Spinner } from './spinner'

const ArrowLeft = () => {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24">
      <path
        className="slider-arrow"
        d="M0.939339 10.9393C0.353552 11.5251 0.353552 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM32 10.5L2 10.5V13.5L32 13.5V10.5Z"
      />
    </svg>
  )
}

const ArrowRight = () => {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24">
      <path
        className="slider-arrow"
        d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807613 19.9792 0.807613 19.3934 1.3934C18.8076 1.97919 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM-1.31134e-07 13.5L30 13.5L30 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
      />
    </svg>
  )
}

export const Button = ({ children, className, onClick, type, loading, style }) => {
  return (
    <button onClick={onClick} type={type || 'button'} className={className} style={style}>
      <span className="btn__label">
        {loading && <Spinner />}
        {children}
      </span>
    </button>
  )
}

export const IconButton = ({ children, icon, className, onClick }) => {
  return (
    <button onClick={onClick} type="button" className={className}>
      {children && <span className="btn__label">{children}</span>}
      <span className="btn__icon">{icon}</span>
    </button>
  )
}

export const SliderButtons = ({ className, onNext, onPrev }) => {
  return (
    <div className="slider-buttons">
      <Button
        onClick={onPrev}
        className={'slider-btn prev-btn btn--square btn--medium btn--outlined ' + className}
      >
        <ArrowLeft />
      </Button>
      <Button
        onClick={onNext}
        className={'slider-btn next-btn btn--square btn--medium btn--outlined ' + className}
      >
        <ArrowRight />
      </Button>
    </div>
  )
}
