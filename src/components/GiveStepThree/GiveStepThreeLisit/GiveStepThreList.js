import React from 'react'
import {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {SvgIconArrowUp} from '../../../assets/Icons/IconArrowUp'
import {SvgIconArrowDown} from '../../../assets/Icons/IconArrowDown'
import OutsideClickHandler from 'react-outside-click-handler';

const  GiveStepThreeList = () => {

    const dispatch = useDispatch()
    const Localization = useSelector(state => state.Localization)
    const [activeList, setActiveList] = useState(null)
    const handleAcive = (e) => {
        setActiveList(true)
    }
    const handleClick = (e) => {
       
        dispatch({
            type: "LOCALIZATION",
            payload: {
              Localization: e.currentTarget.id
            }
        })
        setActiveList(false)

    }


    return(
        <>        
              <OutsideClickHandler
                        onOutsideClick={() => {
                         setActiveList(false);
                         }}>     
                <span onClick={handleAcive}  className="selectThreeAction">-- {Localization.Localization} --<span className="arrowIcon">{activeList? <SvgIconArrowUp/>:<SvgIconArrowDown/>}</span></span>
                <ul className="StepThreeList" style={activeList? {display:"flex"}: {display:"none"}}>
                    <li className="StepThreeListElement" id="Poznań" onClick={handleClick}>Poznań</li>
                    <li className="StepThreeListElement" id="Warszawa" onClick={handleClick}>Warszawa</li>
                    <li className="StepThreeListElement" id="Kraków" onClick={handleClick}>Kraków</li>
                    <li className="StepThreeListElement" id="Wrocław" onClick={handleClick}>Wrocław</li>
                    <li className="StepThreeListElement" id="Katowice" onClick={handleClick}>Katowice</li>
                </ul>   
                </OutsideClickHandler>
                
           


        </>
    )
}

export {GiveStepThreeList}