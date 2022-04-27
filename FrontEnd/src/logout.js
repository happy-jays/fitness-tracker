import React from 'react'
import { Redirect, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const Logout =() =>{
    const location=useLocation()
    const AuthHandler =(isAuth)=>{
        
    }
    if(localStorage.getItem('isAuth')){
        
        return <Redirect to={"/home"} ></Redirect>
        
    }
}
export default Logout
