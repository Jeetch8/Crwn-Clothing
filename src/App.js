import './App.css';
import Content from './Components/Content';
import NavBar from './Components/NavBar';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Mens from './Components/Mens';
import { useEffect, useState } from 'react';

const pages = () => {
  return (
    <div>Hello</div>
  )
}
function App() {
  const [cart, setCart] = useState(0)

  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem('cart')))
  },[])

  useEffect(() => {
    window.localStorage.setItem('cart',cart)
  },[cart])

    


  return (
    <div className="App">
      <NavBar cart={cart} />
        <Routes>
          <Route exact path='/' element={<Content setCart={setCart} cart={cart} />} />
          <Route exact path='/path' element={<Mens setCart={setCart} cart={cart} />} />
          <Route exact path='/trial' element={pages} />
        </Routes>
    </div>
  );
}

export default App;
