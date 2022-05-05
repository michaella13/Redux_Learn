const redux=require('redux')
// const reduxToolkit=require('@reduxjs/toolkit')

// const createStore=reduxToolkit.configureStore()
const createStore=redux.createStore()
const applyMiddleware= reduxToolkit.applyMiddleware()
const thunk=require('redux-thunk').default
const axios=require('axios')
const initialState={
    loading:false,
    users:[],
    error:''
}
const FETCH_USERS_REQUEST="FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILED="FETCH_USERS_FAILED"

const fecthUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
const fecthUsersSuccess=users=>{
    return{
type:FETCH_USERS_SUCCESS,
payload:users
    }
}
const fecthUsersFailed=error=>{
    return{
        type:FETCH_USERS_FAILED,
        payload:error
    }
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
            ...state,
            loading:true
            }
            case FETCH_USERS_SUCESS:
                return{
            
                loading:false,
                users:action.payload,
                error:''
                }
                case FETCH_USERS_FAILED:
                    return{
                
                    loading:false,
                    users:[],
                    error:action.payload
                    }
    }
   
}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fecthUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            //response.data is arrya of users
            const users=response.data.map(user=>user.id)
            dispatch(fecthUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fecthUsersFailed(error.message))
        //    error.message 
        })
    }
    //thunk allows action creators to return functions instead of objects
    // it can dispatch an action because it receives dispatch as its argument

}
const store=createStore(reducer,applyMiddleware=thunk)
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())
