import React from 'react'

export const Avatar = ({ image }) => {
  return (
    <div className="avatar">
      <img className="avatar__image" src={image} alt="photo" />
    </div>
  )
}
