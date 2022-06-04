import React from 'react'
import PropTypes from 'prop-types';

import './style.scss'
import { formatCurrency } from '../../utils/formatCurrency'


const Index = ({idItem}) => {
  return (
    <div className='container--detail'>
      <div className='container--detail-top'>
        <figure>
          <img src={idItem.picture} alt=""/>
        </figure>
        <div className='container--detail-right'>
          <span>{idItem.condition === 'new' ? 'Nuevo' : 'Usado'} - {idItem.sold_quantity} vendidos</span>
          <h1>{idItem.title}</h1>
          <p>{formatCurrency(idItem.price?.amount)}</p>
          <button>Comprar</button>
        </div>
      </div>
      <div className='container--detail-bottom'>
        <h2>Descripción del producto</h2>
        <p>{idItem.description}</p>
      </div>
    </div>
  )
}


Index.propTypes = {
  idItem: PropTypes.object.isRequired
}


export default Index