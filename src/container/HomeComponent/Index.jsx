import React from 'react'

import './style.scss'
import Logo from '../../assets/img/undraw_add_to_cart_re_wrdo.svg'

const Index = () => {
  return (
    <div className='containerHome'>
      <img width='600' src={Logo} alt='logo add to cart' />
      <h3>Bienvenidos al reto_meli</h3>
    </div>
  )
}

export default Index