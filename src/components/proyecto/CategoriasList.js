import React from 'react'
import Cards from './Cards'

const CategoriasList = ({ categorias }) => {
  return (
    <div>
      {
          categorias.map((cate, index) => (
            <li key={index}>
              <Cards categoria={cate}/>
            </li>
          ))
      }
    </div>
  )
}

export default CategoriasList