import Item from '../../components/Item/Index'

import './style.scss'

//loading
import Loading from '../../utils/Loader/Loader'

const Index = ({items, query, handleIdClick, loading}) => {
  return (
    <div className='container--item'>
      {
        items && items?.items?.map((item) => {
          return <Item handleIdClick={handleIdClick} key={item.id} item={item} />
        })
      }
      <Loading isLoading={loading} />
    </div>
  )
}

export default Index