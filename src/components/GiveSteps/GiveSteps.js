import React from 'react'
import { GiveStepOne } from '../GiveStepOne/GiveStepOne';
import {useSelector} from 'react-redux';

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
        <h1>2</h1>
    )
}


}

export {GiveSteps}