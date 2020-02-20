import React from 'react'
import {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import SvgIconArrowUp from '../../../assets/Icons/IconArrowUp'
import SvgIconArrowDown from '../../../assets/Icons/IconArrowDown'
import OutsideClickHandler from 'react-outside-click-handler';

const  GiveStepThreeList = (props) => {

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
        props.pass(false)
    }

    return(
        <>        
            <OutsideClickHandler
                onOutsideClick={() => {
                setActiveList(false);
            }}>     
            <span onClick={handleAcive} className="step-three__select">
                -- {Localization.Localization} --
                <span className="arrow-icon">{activeList? <SvgIconArrowUp/>:<SvgIconArrowDown/>}
                </span>
            </span>
            <ul className="step-three__list" style={activeList? {display:"flex"}: {display:"none"}}>
                <li className="step-three__list-element" id="Poznań" onClick={handleClick}>Poznań</li>
                <li className="step-three__list-element" id="Warszawa" onClick={handleClick}>Warszawa</li>
                <li className="step-three__list-element" id="Kraków" onClick={handleClick}>Kraków</li>
                <li className="step-three__list-element" id="Wrocław" onClick={handleClick}>Wrocław</li>
                <li className="step-three__list-element" id="Katowice" onClick={handleClick}>Katowice</li>
            </ul>   
            </OutsideClickHandler>
        </>
    )
}

export {GiveStepThreeList}