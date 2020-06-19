import React from 'react'
import {BrowserRouter,Route, Link} from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


function App(props){
    return (
        <BrowserRouter>
        <div>
            <h1>Ticket Master</h1>
            <Link to="/">Home  |</Link>
            <Link to="/users/login">Login  |</Link>
            <Link to="/users/register">Register  |</Link>

            <Route path="/users/login" component={Login} />
            <Route path="/users/register" component={Register} />


        </div>
        </BrowserRouter>
    )
}

export default App