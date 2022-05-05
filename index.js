const redux=require('@reduxjs/toolkit')
const reduxLogger=require('redux-logger')
const logger= reduxLogger.createLogger();
const configureStore=redux.configureStore();
const combineReducers=redux.combineReducers();
const applyMiddleware=redux.applyMiddleware();
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'





function buyCake(){
    return {

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


const initialCakeState={
    numofCakes:10,

}
const initialIceCreamState={
    numofCakes:20,

}


const cakeReducer=(state=initialCakeState,action)=> {
   
            return{
            
            ...state,
            numberofCakes: state.numofCakes-1
            }
        }
            const iceCreamReducer=(state=initialIceCreamState,action)=> {
   
                return{
                    ...state,
                    numberofCakes:state.numofIcecreams-1
                }
            }
            //combine reducer takes an object as a parameter
   const rootReducer  =combineReducers({
cake:cakeReducer,
iceCream:iceCreamReducer

   });



 const store=configureStore(rootReducer,applyMiddleware(logger))
 console.log('Initial state',store.getState());
 
 const unsubscribe=store.subscribe(()=>{})
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIceCream())
 store.dispatch(buyIceCream())
 
 unsubscribe();
//Middleware: redux with extra feature
//logging, crash reporting, performing asynchronous


 