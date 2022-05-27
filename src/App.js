import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { DataProvider } from './Components/DataContext'
import Display from './Components/Display'
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
          <Route path='/display/:id' element={<Display/>}/>
        </Routes>
      </Router>
      </DataProvider>
    </div>
  )
}

export default App