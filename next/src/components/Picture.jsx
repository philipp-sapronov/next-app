import React from 'react'

export const Picture = ({ image, webp, alt, className }) => {
  if (!webp) return <img className={className} src={image} alt={alt || ''} />
  return (
    <picture className={className}>
      <source className={className} srcSet={webp} type="image/webp" />
      <img className={className} src={image} alt={alt || ''} />
    </picture>
  )
}
