import React from 'react'
import PropTypes from 'prop-types';

import DetailItem from '../../components/DetailItem/Index'
import './style.scss'

//loading
import Loading from '../../utils/Loader/Loader'

const Index = ({idItem, loading}) => {
  return (
    <div className='container'>
      <DetailItem idItem={idItem} />
      <Loading isLoading={loading} />
    </div>
  )
}


Index.propTypes = {
  idItem: PropTypes.object,
  loading: PropTypes.bool
}

export default Index