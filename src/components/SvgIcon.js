import React from 'react'

export default props => {
  const { name } = props
  return (
    <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}