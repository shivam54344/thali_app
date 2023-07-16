import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import AddToCart from './Pages/AddToCart'
import Checkout from './Pages/Checkout'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ReduxStore from './DataManagement/ReduxStore'
import {Provider} from 'react-redux'

function App() {
  return (
    <>
      <Provider store={ReduxStore}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<AddToCart />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
