import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { DataProvider } from './Components/DataContext'
import Details from './Components/Details'
import Form from './Components/Form'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Order from './Components/Order'
const App = () => {
  return (
    <div>
      <DataProvider> 
      <Router>
        <Navbar/>
        <Routes>
        <Route path='*' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </Router>
      </DataProvider>
    </div>
  )
}

export default App