import React from 'react'
// import Link from 'next/link'
import { LogoSmall } from '../components/logo'

const PhoneIcon = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      height="100%"
      width="100%"
      viewBox="0 0 513.64 513.64"
      enableBackground="new 0 0 513.64 513.64"
      xmlSpace="preserve"
      className="fill--green"
    >
      <g>
        <g>
          <path
            d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72
			c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68
			c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44
			l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"
          />
        </g>
      </g>
    </svg>
  )
}

const ViberIcon = () => {
  return (
    <svg
      id="Bold"
      enableBackground="new 0 0 24 24"
      height="100%"
      viewBox="0 0 24 24"
      width="100%"
      className="fill--green"
    >
      <path d="m23.155 13.893c.716-6.027-.344-9.832-2.256-11.553l.001-.001c-3.086-2.939-13.508-3.374-17.2.132-1.658 1.715-2.242 4.232-2.306 7.348-.064 3.117-.14 8.956 5.301 10.54h.005l-.005 2.419s-.037.98.589 1.177c.716.232 1.04-.223 3.267-2.883 3.724.323 6.584-.417 6.909-.525.752-.252 5.007-.815 5.695-6.654zm-12.237 5.477s-2.357 2.939-3.09 3.702c-.24.248-.503.225-.499-.267 0-.323.018-4.016.018-4.016-4.613-1.322-4.341-6.294-4.291-8.895.05-2.602.526-4.733 1.93-6.168 3.239-3.037 12.376-2.358 14.704-.17 2.846 2.523 1.833 9.651 1.839 9.894-.585 4.874-4.033 5.183-4.667 5.394-.271.09-2.786.737-5.944.526z" />
      <path d="m12.222 4.297c-.385 0-.385.6 0 .605 2.987.023 5.447 2.105 5.474 5.924 0 .403.59.398.585-.005h-.001c-.032-4.115-2.718-6.501-6.058-6.524z" />
      <path d="m16.151 10.193c-.009.398.58.417.585.014.049-2.269-1.35-4.138-3.979-4.335-.385-.028-.425.577-.041.605 2.28.173 3.481 1.729 3.435 3.716z" />
      <path d="m15.521 12.774c-.494-.286-.997-.108-1.205.173l-.435.563c-.221.286-.634.248-.634.248-3.014-.797-3.82-3.951-3.82-3.951s-.037-.427.239-.656l.544-.45c.272-.216.444-.736.167-1.247-.74-1.337-1.237-1.798-1.49-2.152-.266-.333-.666-.408-1.082-.183h-.009c-.865.506-1.812 1.453-1.509 2.428.517 1.028 1.467 4.305 4.495 6.781 1.423 1.171 3.675 2.371 4.631 2.648l.009.014c.942.314 1.858-.67 2.347-1.561v-.007c.217-.431.145-.839-.172-1.106-.562-.548-1.41-1.153-2.076-1.542z" />
      <path d="m13.169 8.104c.961.056 1.427.558 1.477 1.589.018.403.603.375.585-.028-.064-1.346-.766-2.096-2.03-2.166-.385-.023-.421.582-.032.605z" />
    </svg>
  )
}

const TelegramIcon = () => {
  return (
    <svg
      id="Bold"
      // enableBackground="new 0 0 24 24"
      height="100%"
      viewBox="0 0 24 24"
      width="100%"
      className="fill--green"
    >
      <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" />
    </svg>
  )
}

const GmailIcon = () => {
  return (
    <svg
      version="1.1"
      height="100%"
      width="100%"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      xmlSpace="preserve"
      className="fill--green"
    >
      <g>
        <g>
          <path
            d="M464,64h-16H64H48C21.504,64,0,85.504,0,112v16v256v16c0,26.496,21.504,48,48,48h16h384h16c26.496,0,48-21.504,48-48v-16
  V128v-16C512,85.504,490.496,64,464,64z M407.488,96L256,215.616L104.512,96H407.488z M448,416H64V148.672l192,147.68L448,148.64
  V416z"
          />
        </g>
      </g>
    </svg>
  )
}

const IconWrapper = ({ children, size, style }) => {
  return <div style={{ width: size, height: size, ...style }}>{children}</div>
}
export const Footer = ({ content }) => {
  const { phone, email, phoneWithoutCountryCode, telegramUsername } = content

  return (
    <footer className="footer" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="footer__inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/*<div className="footer__logo">*/}
          {/*  <LogoSmall />*/}
          {/*</div>*/}
          <div className="contacts__grid">
            <div style={{ fontSize: 16, color: 'white' }}>Contacts:</div>
            <a style={{ display: 'flex' }} href={`mailto://${email}`}>
              <IconWrapper size={18}>
                <GmailIcon />
              </IconWrapper>
              <div style={{ marginLeft: 15 }}>{email}</div>
            </a>
            <a style={{ display: 'flex' }} href={`tel://${phone}`} target="__blank">
              <IconWrapper size={16}>
                <PhoneIcon />
              </IconWrapper>
              <div style={{ marginLeft: 10 }}>{phone}</div>
            </a>
            <div style={{ display: 'flex' }}>
              <a href={`viber://chat/?number=%2B${phoneWithoutCountryCode}`} target="__blank">
                <IconWrapper size={20}>
                  <ViberIcon />
                </IconWrapper>
              </a>
              <a href={`telegram:///${telegramUsername}`} target="__blank">
                <IconWrapper size={18} style={{ marginLeft: 20 }}>
                  <TelegramIcon />
                </IconWrapper>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 20,
          textAlign: 'center',
          fontSize: 14,
          padding: '10px 50px',
          opacity: 0.5,
        }}
      >
        Copyright In English, please © {new Date().getFullYear()}. all rights reserved
      </div>
    </footer>
  )
}
