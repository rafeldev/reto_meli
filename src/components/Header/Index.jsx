import React from 'react'
import PropTypes from 'prop-types';
import './style.scss'

//logo
import logoMeli from '../../assets/img/Logo_ML.png'

const Index = ({
  setQuery,
  query,
  handleSubmit,
  handleChange,
  history
}) => {
  return (
    <header className='header'>
      <figure className='header--logo-container'>
        <img onClick={() => history('/', setQuery(""))} className='header--logo' src={logoMeli} alt='logomeli' />
      </figure>
      <form className='header--form' onSubmit={(e) => handleSubmit(e)}>
        <input 
          className='header--form-input' 
          type='text' 
          placeholder='Nunca dejes de buscar'
          value={query}
          onChange={(e) => handleChange(e)}
          name='query'
          id='query'
          autoComplete='off'
        />
        <button 
          className='header--form-button' 
          type="submit" 
        />
      </form>
    </header>
  )
}

Index.propTypes = {
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired
}

export default Index