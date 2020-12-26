import React from 'react'
import { Picture } from "./Picture";

export const Avatar = ({ image }) => {
  return (
    <div className="avatar">
      <Picture className="avatar__image" image={image.jpg} webp={image.webp} alt="avatar"/>
    </div>
  )
}
