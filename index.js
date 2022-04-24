const BUY_CAKE='BUY_CAKE'




//action creator : creates an action, function that returns the action
function buyCake(){
    return {
//action is an object with a type property
//action describe what happens not how the state changes
        type:BUY_CAKE,
        info:'First redux action'
    }
}
// reducers accept state and action as arguments and retur next state
//  (previousState, action)=>newState
//application state is represented by a single object

const initialState={
    numofCakes:10
}

const reducer=(state=initialState,action)=> {
    switch(action.type){
        case BUY_CAKE:return {
            //spread operatot .. is used to make a copy of the state 
            // other properties wont be changed
            ...state,
            numberofCakes: state.numofCakes-1
        }
        default: return state
    }
}
 