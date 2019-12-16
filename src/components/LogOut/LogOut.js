import React from 'react'
import {Link} from 'react-router-dom'

const LogOut= () => {

    return  (
        <>
        <section className="logOutSection">
            <h1>Wylogowanie nastąpiło <br/> pomyślnie!</h1>
            <div className="logOutDecoration"></div>
            <Link to ='/'><button className="mainPageBtn" type="button">Strona główna</button></Link>
        </section>

        </>
    )
}

export {LogOut}