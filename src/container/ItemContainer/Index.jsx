import Item from '../../components/Item/Index'
import PropTypes from 'prop-types';

import './style.scss'

//loading
import Loading from '../../utils/Loader/Loader'

const Index = ({items, handleIdClick, loading}) => {
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


Index.propTypes = {
  items: PropTypes.object.isRequired,
  handleIdClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Index