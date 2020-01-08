const initial = {
    city: "",
    street:"" 
}

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
function selectedOption (state = "", action) {
    switch (action.type) {
        case "SELECTED_OPTION":
            return action.payload 

    }
    return state
}

function bags (state = {bags:"wybierz"}, action) {
    switch (action.type) {
        case "BAGS_NUMBER":
            return action.payload
    }
    return state
}

function Localization (state = {Localization:"wybierz"}, action) {
    switch (action.type) {
        case "LOCALIZATION":
            return action.payload
    }
    return state
}

function reciever (state = '', action) {
    switch (action.type) {
        case "SELECT_RECIEVER":
            return action.payload
    }
    return state
}

function organizationName (state = "", action) {
    switch(action.type) {
        case "TYPE_ORGANIZATION":
            return action.organizationName
    }
    return state
}


function controledForm (state={},action) {
    switch (action.type) {
        case "STREET":   
            return    {
                ...state,
                street: action.street
            }
        case "CITY":
            return    {
                ...state,
                city: action.city
            }
        case "ZIP_CODE":
            return    {
                ...state,
                zipCode: action.zipCode
            }
        case "PHONE":
            return {
                ...state,
                phone: action.phone
            } 
       
        case "RECIEVE_DATA":
            return {
                ...state,
                recieveData: action.recieveData
            }          
        case "RECIEVE_HOUR":
            return {
                ...state,
                recieveHour: action.recieveHour
            }
        case "REMARKS":
            return {
                ...state,
                remarks: action.remarks
            }
        
    }
    return state
} 



export {loggedUser, currentStep, selectedOption, bags, Localization, reciever, organizationName ,controledForm}