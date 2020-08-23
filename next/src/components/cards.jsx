import React from 'react'

import { Avatar } from './avatar'

// flexible
const CardHeader = ({ avatar, age, socials, name, flexible }) => {
  return (
    <div className={`card__header ${flexible ? 'flexible' : ''}`}>
      <div className="header__avatar">
        <Avatar image={avatar} />
      </div>
      <div className="header__content">
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="year">
          <span>{age}</span>
        </div>

        {!!socials.length && (
          <div className="socials">
            {socials.map((social) => {
              return <span key={social}>{social}</span>
            })}
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
        <div className="card__content">{content}</div>
      </div>
    </div>
  )
}

export const FeedbackContent = ({ text, course }) => {
  return (
    <div className="feedback-card__content">
      <p className="text">{text}</p>
      <span className="details">Курс: {course}</span>
    </div>
  )
}

export const TeacherContent = ({ options }) => {
  return (
    <div className="teacher-card__content">
      {options.map((option, idx) => {
        return (
          <div key={idx} className="item">
            <b className="item__title">{option.title}:</b>
            <span className="item__text">{option.text}</span>
          </div>
        )
      })}
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
  return (
    <Card
      className="teachers-card"
      header={<CardHeader {...card} />}
      content={<TeacherContent {...card} />}
    />
  )
}
