import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SvgIconArrowUp from '../../../assets/Icons/IconArrowUp'
import SvgIconArrowDown from '../../../assets/Icons/IconArrowDown'
import OutsideClickHandler from 'react-outside-click-handler';


const  GiveStepTwoList = (props) => {

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
        if(typeof e.currentTarget.value ==="number") {
            props.pass(false)
        }
    }

    return(
        <>
            <p className="step-two__bag-label">
                Liczba 60l worków: 
                <span className="step-two__select-action" onClick={handleAcive}>
                    -- {bags.bags} --
                    <span className="arrow-icon">{activeList? <SvgIconArrowUp/>:<SvgIconArrowDown/>}
                    </span>
                </span>
            </p>
            <ul className="step-two__list" style={activeList? {display:"flex"}: {display:"none"}}>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setActiveList(false);
                }}>
                <li className="step-two__list-element" value={1} onClick={handleClick}>1</li>
                <li className="step-two__list-element" value={2} onClick={handleClick}>2</li>
                <li className="step-two__list-element" value={3} onClick={handleClick}>3</li>
                <li className="step-two__list-element" value={4} onClick={handleClick}>4</li>
                <li className="step-two__list-element" value={5} onClick={handleClick}>5</li>
            </OutsideClickHandler>
            </ul>   
        </>
    )
}

export {GiveStepTwoList}