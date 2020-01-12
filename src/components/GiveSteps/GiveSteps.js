import React from 'react'
import { GiveStepOne } from '../GiveStepOne/GiveStepOne';
import {useSelector} from 'react-redux';
import { GiveStepTwo } from '../GiveStepTwo/GiveStepTwo';
import {GiveStepThree} from '../GiveStepThree/GiveStepThree'
import {GiveStepFour} from '../GiveStepFour/GiveStepFour'
import {GiveSummary} from '../GiveSummary/GiveSummary'
import { GiveThankYou } from '../GiveThankYou/GiveThankYou';
import {GiveRibbon} from '../GiveRibbon/GiveRibbon'


const GiveSteps = () => {

const step = useSelector(state=>state.currentStep.currentStep)
switch(step){
    case 1:
            return (
                <>
                <GiveRibbon/>
                <GiveStepOne/>
                </>
            )

    case 2: 
        return (
            <>
            <GiveRibbon/>
            <GiveStepTwo/>
            </>
    )
    case 3:
        return (
            <>
            <GiveRibbon/>
            <GiveStepThree/>
            </>
        )
    case 4:
        return (
            <>
            <GiveRibbon/>
            <GiveStepFour/>
            </>
                )
    case 5:
        return (
            <GiveSummary/>
                )
    case 6:
        return (
            <GiveThankYou/>
                )
    
    default:  
    return <GiveStepFour/>
}


}

export {GiveSteps}