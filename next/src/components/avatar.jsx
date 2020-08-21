import React from 'react'

export const Avatar = ({ image }) => {
  return (
    <div class="avatar">
      <img class="avatar__image" src={image} alt="photo" />
    </div>
  )
}
