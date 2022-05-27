import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { DataProvider } from './Components/DataContext'
import Details from './Components/Details'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div>
      <DataProvider> 
      <Router>
        <Navbar/>
        <Routes>
        <Route path='*' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </Router>
      </DataProvider>
    </div>
  )
}

export default App