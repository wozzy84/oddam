import React from 'react'
import { HomeContainer } from '../HomeContainer/HomeContainer';
import { HomeMainPic } from '../HomeMainPic/HomeMainPic';
import {Test} from '../test'
import { HomeThreeCol } from '../HomeThreeCol/HomeThreeCol';


const Home = (props) => {
    return (
      <>
            <HomeContainer/>
            <HomeThreeCol/>
            <Test/>
      </>      
          )
}


export {Home}