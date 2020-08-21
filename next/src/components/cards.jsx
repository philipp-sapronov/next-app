import { Avatar } from './avatar'

// flexible
const CardHeader = ({ params, className }) => {
  const { avatar, age, socials, name } = params
  return (
    <div className={'card__header ' + className}>
      <div class="header__avatar">
        <Avatar image={avatar} />
      </div>
      <div class="header__content">
        <div class="name">
          <span>{name}</span>
        </div>
        <div class="year">
          <span>{age}</span>
        </div>
        <div class="socials">
          {socials.length &&
            socials.map((social) => {
              return <span>{item}</span>
            })}
        </div>
      </div>
    </div>
  )
}

const Card = ({ header, content }) => {
  return (
    <div class="personality__card">
      <div class="card-layer"></div>
      <div class="card__inner">
        {header}
        <div class="card__divider"></div>
        <div class="card__content">{content}</div>
      </div>
    </div>
  )
}

export const FeedbackContent = ({ params }) => {
  const { text, course } = params
  return (
    <div class="feedback-card__content">
      <p class="text">{text}</p>
      <span class="details">Курс: {course}</span>
    </div>
  )
}

export const TeacherContent = ({ params }) => {
  const { education, experience, hobbies } = params
  return (
    <div class="teacher-card__content">
      <div class="item">
        <b class="heading">{education.title}:</b>
        <span>{education.text}</span>
      </div>
      <div class="item">
        <b class="heading">{experience.title}:</b>
        <span>{experience.text}</span>
      </div>
      <div class="item">
        <b class="heading">{hobbies.title}:</b>
        <span>{hobbies.text}</span>
      </div>
    </div>
  )
}

export const FeedbackCard = ({ params }) => {
  return (
    <Card
      header={<CardHeader params={params.header} />}
      content={<CardContent params={params.content} />}
    />
  )
}

export const TeacherCard = ({ params }) => {
  return (
    <Card
      className="flexible"
      header={<CardHeader params={params.header} />}
      content={<CardContent params={params.content} />}
    />
  )
}
