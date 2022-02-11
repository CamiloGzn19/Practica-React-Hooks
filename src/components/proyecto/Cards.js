import React from 'react'

const Cards = ({ categoria }) => {
  return (
    <div>
        <h3>{categoria.title}</h3>
        <img src={categoria.url} alt="imagen"/>
    </div>
  )
}

export default Cards
