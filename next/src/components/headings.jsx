import React from 'react'

export const SectionHeading = ({ className = '', text = '' }) => {
  reutrn(
    <div className={'section-heading ' + className}>
      <div className="section-heading__dash" />
      <h3 className="section-heading__text">{text}</h3>
    </div>,
  )
}
