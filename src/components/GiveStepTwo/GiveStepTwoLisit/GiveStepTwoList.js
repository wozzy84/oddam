import React from 'react'
import {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {SvgIconArrowUp} from '../../../assets/Icons/IconArrowUp'
import {SvgIconArrowDown} from '../../../assets/Icons/IconArrowDown'
import OutsideClickHandler from 'react-outside-click-handler';

const  GiveStepTwoList = () => {

    const dispatch = useDispatch()
    const bags = useSelector(state => state.bags)
    const [activeList, setActiveList] = useState(null)
    const handleAcive = (e) => {
        setActiveList(true)
    }
    const handleClick = (e) => {
        dispatch({
            type: "BAGS_NUMBER",
            payload: {
              bags: e.currentTarget.value  
            }
        })
        setActiveList(false)

    }


    return(
        <>
                   

                      
              
                <p className="bagLabel">Liczba 60l worków: <span className="selectAction" onClick={handleAcive} >-- {bags.bags} --<span className="arrowIcon">{activeList? <SvgIconArrowUp/>:<SvgIconArrowDown/>}</span></span></p>
                <ul className="StepTwoList" style={activeList? {display:"flex"}: {display:"none"}}>
                <OutsideClickHandler
                        onOutsideClick={() => {
                         setActiveList(false);
                         }}>
                
                <li className="StepTwoListElement" value={1} onClick={handleClick}>1</li>
                <li className="StepTwoListElement" value={2} onClick={handleClick}>2</li>
                <li className="StepTwoListElement" value={3} onClick={handleClick}>3</li>
                <li className="StepTwoListElement" value={4} onClick={handleClick}>4</li>
                <li className="StepTwoListElement" value={5} onClick={handleClick}>5</li>
                </OutsideClickHandler>
                </ul>   
                
           


        </>
    )
}

export {GiveStepTwoList}