import React from "react"
 import {SvgFacebook} from '../../assets/Icons/Facebook'
 import {SvgInstagram} from '../../assets/Icons/Instagram'

const HomeFooter = () => {



    return (
        <>
            <footer className="FooterSec">
            <p>Copyright by Coders Lab</p>
            <div>
                <span><a href="https://www.facebook.com"><SvgFacebook/></a></span>
                <span><a href="https://www.instagram.com"><SvgInstagram/></a></span>  
            </div>
       
            </footer>
        </>
    )
}


export {HomeFooter}