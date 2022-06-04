import React from 'react'
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
        <img onClick={() => history('/')} className='header--logo' src={logoMeli} alt='logomeli' />
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
        />
        <button 
          className='header--form-button' 
          type="submit" 
        />
      </form>
    </header>
  )
}

export default Index