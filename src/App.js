import { useEffect, useState } from 'react';
import axios from 'axios'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';

//componentes
import Header from './components/Header/Index';
import ItemContainer from './container/ItemContainer/Index';
import DetailContainer from './container/DetailContainer/Index';
import Home from './container/HomeComponent/Index';


function App() {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState({});
  const [idItem, setIdItems] = useState({});
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useNavigate();
  const URL = 'http://localhost:3001/'

  const fetchData = async (query) => {
    setLoading(true)
    const response = await axios.get(`${URL}api/items?q=${query}`)
    setLoading(false)
    setItems(response.data)
  }
  
  const fetchDataId = async (id) => {
    setLoading(true)
    const response = await axios.get(`${URL}api/items/${id}`)
    setLoading(false)
    setIdItems(response.data)

  }


  const handleIdClick = (id) => {
    setId(id)
    fetchDataId(id)
    history(`/items/${id}`)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(query)
    history(`/items/${query}`)
  }

  // console.log(items ? items.author.name === 'Rafael' : 'hola', 'bool')
  return (
    <div className="App">
      <Header
        history={history}
        setQuery={setQuery}
        query={query}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Routes>
        <Route
          path={'/'}
          element={<Home />}
        />
        <Route
          path={`/items/${query}`}
          element={items?.author?.name === 'Rafael' && <ItemContainer loading={loading} handleIdClick={handleIdClick} query={query} items={items} />} 
        />
        <Route
          path={`/items/${id}`}
          element={items?.author?.name === 'Rafael' && <DetailContainer loading={loading} idItem={idItem} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
