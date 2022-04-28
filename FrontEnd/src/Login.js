import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import { useSelector, useDispatch}from 'react-redux'
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const Login = () => {
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')
	const [message,setMessage]=useState('')
	const [isAuth,setAuth]=useState(false)
	const location=useLocation()
	const SubmitHandler = (e) =>{
		e.preventDefault()
		const details = { email ,password};
		fetch('http://ec2-3-110-0-121.ap-south-1.compute.amazonaws.com:8080/auth/login',{
			method:"POST",
			headers:{
				"Content-Type":"application/json",
				
			},
			body:JSON.stringify(details)
		}).then((res) => {
			console.log(res.status)
            if(res.status =='401'){
				setMessage('Password incorrect')
				alert('Password Incorrect Try again')
				
			}
			if(res.status =='402'){
				setMessage('check your email or user does not exist')
			}
			if (res.status=='200'){
				res.json().then((response)=>{
					localStorage.setItem('token',response.token)
					localStorage.setItem('userId',response.userId)
					localStorage.setItem('userName',response.userName)
				})
				setAuth(true)
			}
		
	})
}
    return (
		<div>
		{isAuth && <Redirect to="/home" state={{isAuth:true}}></Redirect>}
        <div class="loginbox">
		<h1 id="hdl">WELCOME BACK</h1>
		<h1 id="hdl">Login</h1>
		<h1 id="messagehdr">{message}</h1>
		<div class="lgform">
		<form class="lgcol lgclm" onSubmit={SubmitHandler}>
          <div class="rw">
          {/* <div>
	      <label for="lname" class="lbl">Email Id</label>
          </div> */}
		  <input type="text" id="inpt" name="email" placeholder="Email Id.."  value={email}onChange={(e) => setEmail(e.target.value)}/>
	      </div>
          <div class="rw">
		  {/* <div>
              <label for="" class="lbl">Password</label>
          </div> */}
		  <input type="password" id="inpt" name="password" placeholder="Password.." value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
		  
		  <input id="smt" type="submit"  value="Login"/>
		</form>
         <div class="lgcol">
			 <img id="lgimg" src="https://images.unsplash.com/photo-1570691079236-4bca6c45d440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt=""/>
		 </div>
		</div>
		<p id="sglg"><a id="lg"href="signup">Register</a> if already not registered</p>
		<p id="sglg"><Link id="lg" to='/home'>Back To Home Page</Link> </p>
	  </div>
	  </div>
    )
}

export default Login