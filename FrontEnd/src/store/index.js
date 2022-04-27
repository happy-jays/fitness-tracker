import { createStore} from 'redux'


const authReducer = (state={isAuth:false},action) =>{
    if(action.type ==='setAuth'){
        return {
            isAuth:true
        }
    }
    return state
}
const store=createStore(authReducer)
export default store
