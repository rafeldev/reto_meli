import React from 'react'

import { formatCurrency } from '../../utils/formatCurrency'

import './style.scss'

import tag from '../../assets/img/ic_shipping.png'

const Index = ({ item, handleIdClick }) => {
  return (
    <>
        <div className='item--container' onClick={() => handleIdClick(item.id)}>
          <figure className='item--container-img'>
            <img className='item--img' src={item?.picture} alt='img90x90' />
          </figure>
          <div className='item--container-text'>
            <div className='item--description'>
              <div className='item--container-tag'>
                <h2>{formatCurrency(item?.price.amount)}</h2>
                {
                  item?.free_shipping && <img className='item--tag' src={tag} alt='tag' />
                }
              </div>
              <p>{item?.title}</p>
            </div>
            <div className='item--city'>
              {/* <span>{item.}</span> */}
            </div>
          </div>
        </div>
        <hr className='separador' />

    </>
  )
}

export default Index