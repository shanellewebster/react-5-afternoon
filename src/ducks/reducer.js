//Our store will need an initial state when it loads for the first time. Create a constant variable called initialState that will have all of our state's initial values.

const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: 'false',
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName:'',
    email: ''
};

//Before we create the action creators our store needs to determine how to update state, we need to create our action types. We'll put these action types in between our initialState and reducer function. 
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_AGENT = 'UPDATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_DOWNPAYMENT = 'UPDATE_DOWNPAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESSONE = 'UPDATE_ADDRESSONE';
const UPDATE_ADDRESSTWO = 'UPDATE_ADDRESSTWO';
const UPDATE_ADDRESSTHREE = 'UPDATE_ADDRESSTHREE';
const UPDATE_FIRST = 'UPDATE_FIRST';
const UPDATE_LAST = 'UPDATE_LAST';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

function reducer( state = initialState, action ){
    //The last thing we need to do is update the reducer function to use a switch statement on the action.type. This is how our reducer will determine which part of state to update. Since we need to keep state immutable we will make use of Object.assign. To add our action types to our reducer all we have to do is: case actionTypeVariableGoesHere. We'll then use Object.assign to get the previous value of state and update its loanType or propertyType property to the value on the payload.
    switch( action.type ){
        case UPDATE_LOAN_TYPE:
        return Object.assign({}, state, { loanType: action.payload });

        case UPDATE_PROPERTY_TYPE:
        return Object.assign({}, state, { propertyType: action.payload });

        //Remember that we need to keep state immutable, so we'll make use of Object.assign.
        case UPDATE_CITY:
        return Object.assign({}, state, { city: action.payload });

        case UPDATE_PROP:
        return Object.assign({}, state, {propToBeUsedOn: action.payload});

        case UPDATE_FOUND:
        return Object.assign({}, state, {found: action.payload});

        case UPDATE_AGENT:
        return Object.assign({}, state, {agent: action.payload});

        case UPDATE_COST:
        return Object.assign({}, state, {cost: action.payload});

        case UPDATE_DOWNPAYMENT:
        return Object.assign({}, state, {downPayment: action.payload});

        case UPDATE_CREDIT:
        return Object.assign({}, state, {credit: action.payload});

        case UPDATE_HISTORY:
        return Object.assign({}, state, {history: action.payload});

        case UPDATE_ADDRESSONE:
        return Object.assign({}, state, {addressOne: action.payload});

        case UPDATE_ADDRESSTWO:
        return Object.assign({}, state, {addressTwo: action.payload});

        case UPDATE_ADDRESSTHREE:
        return Object.assign({}, state, {addressThree: action.payload});

        case UPDATE_FIRST:
        return Object.assign({}, state, {firstName: action.payload});

        case UPDATE_LAST:
        return Object.assign({}, state, {lastName: action.payload});

        case UPDATE_EMAIL:
        return Object.assign({}, state, {email: action.payload});
        
        default: return state;
    }
}

export default reducer;

//Now that we have our two action types we can create action creators that use them. All an action creator does is return an object with a type and payload property. The payload will equal the value of the parameter in this case. The action creator for loan type will have a loanType parameter and the action creator for property type will have a property parameter. We also export these action creators so other components can use them.

export function updateLoanType( loanType ){
    return {
      type: UPDATE_LOAN_TYPE,
      payload: loanType
    }
  }

export function updatePropertyType( property ){
    return{
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

//This action creator should have a parameter called city. We will use the value of city for the payload property
export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp( prop ){
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateFound( found ){
    return{
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateAgent( agent ){
        return {
            type: UPDATE_FOUND,
            payload: agent
        }
}

export function updateCost(cost){
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateDownPayment (payment){
    return {
        type: UPDATE_DOWNPAYMENT,
        payload: payment
    }
}

export function updateCredit (credit){
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updateHistory( history ){
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}

export function updateAddressOne(address){
    return {
        type: UPDATE_ADDRESSONE,
        payload: address
    }
}

export function updateAddressTwo(address){
    return {
        type: UPDATE_ADDRESSTWO,
        payload: address
    }
}

export function updateAddressThree(address){
    return {
        type: UPDATE_ADDRESSTHREE,
        payload: address
    }
}

export function updateFirst(first){
    return {
        type: UPDATE_FIRST,
        payload: first
    }
}

export function updateLast(last){
    return{
        type: UPDATE_LAST,
        payload: last
    }
}

export function updateEmail(email){
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}