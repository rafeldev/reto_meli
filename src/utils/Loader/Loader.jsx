import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/* Componente loader de carga  */
/*
 * @param  {} isLoading: Contiene el estado de si está o no cargando
 */


const FullPageLoader = ({ isLoading }) => {
  return (
    isLoading
      ? <div className='LoaderContainer'>
        <div className='wraper'>
          {/* <Loading /> */}
          <h1 style={{color: '#000'}}>...Loading</h1>
        </div>
      </div>
      : null
  );
};

FullPageLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default FullPageLoader;
