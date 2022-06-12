import React from 'react'
import ProductCard from './ProductCard'
import prd from './prdoctsList'

const Mens = props => {
  console.log(props.match)
  return (
    <div>
      {prd.map((pro) => <ProductCard pro={pro} />)}
      
    </div>
  )
}

export default Mens