function loggedUser (state = {}, action) {
    switch (action.type) {
        case "LOGGED_USER":
            return action.payload
    }
    return state
}

function currentStep (state = {currentStep:1}, action) {
    switch (action.type) {
        case "CURRENT_STEP":
            return action.payload 

    }
    return state
}

export {loggedUser, currentStep}