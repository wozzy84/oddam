import React from 'react'
import { GiveStepOne } from '../GiveStepOne/GiveStepOne';
import {useSelector} from 'react-redux';
import { GiveStepTwo } from '../GiveStepTwo/GiveStepTwo';
import {GiveStepThree} from '../GiveStepThree/GiveStepThree'
import {GiveStepFour} from '../GiveStepFour/GiveStepFour'
const GiveSteps = () => {

const step = useSelector(state=>state.currentStep.currentStep)
switch(step){
    case 1:
            return (
                <>
                <GiveStepOne/>
                </>
            )

    case 2: 
    return (
        <GiveStepTwo/>
    )
    case 3:
        return (
            <GiveStepThree/>
        )
    case 4:
        return (
            <GiveStepFour/>
                )
    default:
    return <GiveStepFour/>
}


}

export {GiveSteps}