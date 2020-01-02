import React from 'react'
import { GiveStepOne } from '../GiveStepOne/GiveStepOne';
import {useSelector} from 'react-redux';
import { GiveStepTwo } from '../GiveStepTwo/GiveStepTwo';
import {GiveStepThree} from '../GiveStepThree/GiveStepThree'
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
    default:
    return <GiveStepThree/>
}


}

export {GiveSteps}