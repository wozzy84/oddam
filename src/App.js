import React from 'react'
import {Home} from './components/Home/Home'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    } from 'react-router-dom';
import { Login } from './components/LogIn/Login';
import { Register } from './components/register/register';

const App = (props) => {

return (
    <>
        <HashRouter>
            <Route exact path= "/" component={Home} />
            <Route path ='/logowanie' component= {Login}/>
            <Route path = '/rejestracja' component={Register}/>
        </HashRouter>

    </>
)
}

export  {App}