import React from 'react'
import "./Content.css"

const Content = ({cart,setCart}) => {
  return (
    <div className='Main__Content'>
        <div className='outerArea__box' onClick={() => setCart(cart +1)} >
            <div className='inner__box'>
                <div>Men</div>
                <div>SHOP NOW</div>
            </div>
        </div>
        <div className='outerArea__box'>
            <div className='inner__box'>
                <div>Woemen</div>
                <div>SHOP NOW</div>
            </div>
        </div>
        <div className='outerArea__box'>
            <div className='inner__box'>
                <div>SNEAKERS</div>
                <div>SHOP NOW</div>
            </div>
        </div>
    </div>
  )
}

export default Content