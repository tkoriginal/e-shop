import React from 'react'

import './styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={size ? `menu-item ${size}` : 'menu-item'}>
    <div style={{ 
      backgroundImage: `url(${imageUrl})`
    }} className='background-image'/>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem