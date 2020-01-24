    import React from 'react'
    import Home from './components/Home/Home'
    import {HashRouter,Route} from 'react-router-dom';
    import Login  from './components/LogIn/Login';
    import Register from './components/register/register';
    import LogOut from './components/LogOut/LogOut'
    import Give from './components/Give/Give'
    import { useDispatch } from 'react-redux';
    import {auth} from './config'
    
    

    const App = (props) => {

        
        const dispatch = useDispatch()

        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: "LOGGED_USER",
                    payload: {
                        email: user.email,
                        uid: user.uid
                    }
                })
            } else {
                dispatch({
                    type: "LOGGED_USER",
                    payload: {
                        email: null,
                        uid: null
                    }
                })
            }
        }); 


    return (
        <>
            <HashRouter>
                <Route exact path= "/" component={Home} />
                <Route path ='/logowanie' component= {Login}/>
                <Route path = '/rejestracja' component={Register}/>
                <Route path ='/wylogowano' component= {LogOut}/>
                <Route path ='/oddaj-rzeczy' component={Give}/>
            </HashRouter>

        </>
    )
    }

    export default App