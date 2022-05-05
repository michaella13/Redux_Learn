const redux=require('redux')
const createStore=redux.configureStore();
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'




//action creator : creates an action, function that returns the action
function buyCake(){
    return {
//action is an object with a type property
//action describe what happens not how the state changes
        type:BUY_CAKE,
        info:'First redux action'
    }
}
function buyIceCream(){
    return {
        type:BUY_ICECREAM,
        info:'First redux action'
    }
}
// reducers accept state and action as arguments and retur next state
//  (previousState, action)=>newState
//application state is represented by a single object

const initialState={
    numofCakes:10,
    numofIcecreams:20
}

const reducer=(state=initialState,action)=> {
    switch(action.type){
        case BUY_CAKE:
            return{
            //spread operatot .. is used to make a copy of the state 
            // other properties wont be changed
            ...state,
            numberofCakes: state.numofCakes-1
        }
        case BUY_ICEREAM:
            return{
            ...state,
            numberofCakes:state.numofIcecreams-1
        }
        default: return  state
        
    }

}
// getState(), dispatch(action), subscribe(listenere)
//subscrieb to changes in the store
//store accepts the reducer which holds the current state of our app
//entire app has one store, holds app state
 const store=createStore(reducer)
 console.log('Initial state',store.getState());
 //subscribe accepts a fucntion as a parameter and it is executed whenever a state changes
 // unsubscribe is done by calling the function returned by subscribe function
 const unsubscribe=store.subscribe(()=>console.log('Updated state', store.getState()))
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIceCream())
 store.dispatch(buyIceCream())
 
 unsubscribe();

 //When the cake is bought, the icecream remiains the same and ssamw with icecram
 //To create multiple reduceres, u create different action creators