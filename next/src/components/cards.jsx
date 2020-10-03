import React from 'react'

import { Avatar } from './avatar'
import { Button } from './buttons'
import { useDialog } from './TeacherDialog'

// flexible
const CardHeader = ({ avatar, age, social, name, flexible }) => {
  return (
    <div className={`card__header ${flexible ? 'flexible' : ''}`}>
      <div className="header__avatar">
        <Avatar image={avatar} />
      </div>
      <div className="header__content">
        <div className="name">
          <span>{`${name}${age ? ', ' : ''}${age || ''}`}</span>
        </div>

        {social && (
          <div className="socials">
            <a target="__blank" href={social.link}>
              {social.text}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

const Card = ({ header, content, className }) => {
  return (
    <div className={'personality__card ' + className}>
      <div className="card-layer"></div>
      <div className="card__inner">
        {header}
        <div className="card__divider"></div>
        {content}
      </div>
    </div>
  )
}

export const FeedbackContent = ({ text }) => {
  return (
    <div className="card__content feedback-card__content">
      <p className="text">{text}</p>
      {/* <span className="details">Курс: {course}</span> */}
    </div>
  )
}

export const TeacherContent = ({ options, onClick }) => {
  return (
    <div className="card__content teacher-card__content">
      <div className="items">
        {options.map((option, idx) => {
          return option.additional ? null : (
            <div key={idx} className="item">
              <b className="item__title">{option.title}:</b>
              {Array.isArray(option.text) ? (
                option.text.map((item, idx) => (
                  <p className="item__text" key={idx}>
                    {item}
                  </p>
                ))
              ) : (
                <span className="item__text">{option.text}</span>
              )}
            </div>
          )
        })}
      </div>
      <div className="card_button-wrapper">
        <Button
          onClick={onClick}
          variant="primary"
          className="btn btn--outlined btn--green btn--small btn--uppercased"
        >
          Подробнее
        </Button>
      </div>
    </div>
  )
}

export const TeacherFullContent = ({ options }) => {
  return (
    <div className="card__content teacher-card__content">
      <div className="items">
        {options.map((option, idx) => {
          return (
            <div key={idx} className="item">
              <b className="item__title">{option.title}:</b>
              {Array.isArray(option.text) ? (
                option.text.map((item, idx) => (
                  <p className="item__text" key={idx}>
                    {item}
                  </p>
                ))
              ) : (
                <span className="item__text">{option.text}</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const FeedbackCard = ({ card }) => {
  return (
    <Card
      className="feedbacks-card"
      header={<CardHeader flexible {...card} />}
      content={<FeedbackContent {...card} />}
    />
  )
}

export const TeacherCard = ({ card }) => {
  const fullCard = (
    <div className={'modal-content'}>
      <CardHeader {...card} flexible />
      <div className="card__divider" style={{ marginBottom: 30 }} />
      <TeacherFullContent {...card} />
    </div>
  )

  const [dialog, toggle] = useDialog({ content: fullCard })

  return (
    <>
      <Card
        className="teachers-card"
        header={<CardHeader {...card} />}
        content={<TeacherContent {...card} onClick={toggle} />}
      />
      {dialog}
    </>
  )
}
