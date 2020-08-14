import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/home'
import Cgpa from './screens/cgpa' 
import Sgpa from './screens/sgpa'
function App() {
    return ( 
        <div>
            <BrowserRouter>
            <NavBar />
            <Route exact path = '/' > <Home /> </Route> 
            <Route path = '/cgpa' > <Cgpa /> </Route> 
            <Route path = '/sgpa'> <Sgpa /> </Route> 
            </ BrowserRouter >
        </div>
    )
}
export default App;