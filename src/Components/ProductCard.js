import React from 'react'

const ProductCard = ({pro}) => {
  return (
    <div onClick={() => console.log(pro.price)}>
        <div> <img src={`${pro.img}`} /></div>
        <div>{pro.name}</div>
        <div>{pro.price}</div>
    </div>
  )
}

export default ProductCard