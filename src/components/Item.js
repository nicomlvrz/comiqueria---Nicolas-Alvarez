import React from 'react'

const Item = ({id, title, description, price, pictureUrl}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <img src={pictureUrl} alt={title} />
    </div>
  )
}

export default Item;