import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import Logout from './logout';
import { useState } from 'react';


const Header = () => {
    const [isAuth,setAuth]=useState(false)
    const logoutHandler =(e) =>{
        localStorage.setItem('isAuth',false)
        localStorage.setItem('token','')
        localStorage.setItem('userId','')
        setAuth(false)
    }
    return (
        <>
            <ul className="ul1">
                <li className="li1 logo">UFIT</li>
                <li className="li1"><Link className="active" to="/">Home</Link></li>
                <li className="li1"><Link to= "/yoga">Yoga</Link></li>
                <li className="li1"><Link to= "/blogs">Blog</Link></li>
                <li className="li1"><Link to= "/writeblog">Write blog</Link></li>
               {!isAuth && <li className="li1 sgn"><Link to="/login">Login</Link></li> }
                {!isAuth &&<li className="li1 sgn"><Link to="/signup">Signup</Link></li>}
                {isAuth && <li className="li1 sgn"><button onClick={logoutHandler}></button></li>}
               
                <li className="li1 sgn"><Link to="/Planner">Workout Planner</Link></li>
                <li className="li1 sgn"><Link to="/Bmi">Check Your BMI</Link></li>
            </ul>
        </>
    )
}

export default Header
