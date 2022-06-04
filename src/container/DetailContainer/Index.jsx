import React from 'react'
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

export default Index