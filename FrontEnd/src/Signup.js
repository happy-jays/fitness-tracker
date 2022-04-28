import React ,{useState} from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAuth,setAuth]=useState(false)
	const [message,setMessage]=useState('')
    const addDetails = (e) => {
        e.preventDefault();
        const details = { name, email ,password};
        fetch('http://ec2-3-110-0-121.ap-south-1.compute.amazonaws.com:8080/auth/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
			body:JSON.stringify(details)
            
        }).then((res) => {
            if(res.status =='401'){
				setMessage('The email Already Exists.Use a differet Email')
			}
			if(res.status=='200'){
				alert('Succesfully Registered.')
				setAuth(true)
			}
            })
            
		
    }
    return (
		<div>
		{isAuth &&<Redirect to="/login"></Redirect>}
        <div class="signbox">
		<h1 id="hdl">WELCOME TO UFIT</h1>
		<h1 id="hdl">Signup</h1>
		<h1 id='messagehdr' >{message}</h1>
		<div class="form">
		<form class="sgcol" onSubmit={addDetails} >
		<div class="rw">
		  <input type="text" id="inpt" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
	      </div>
          <div class="rw">
          {/* <div>
	      <label for="lname" class="lbl">Email Id</label>
          </div> */}
		  <input type="text" id="inpt" name="email" placeholder="Your Email Id.." required value={email} onChange={(e) => setEmail(e.target.value)}/>
	      </div>
          <div class="rw">
		  {/* <div>
              <label for="" class="lbl">Password</label>
          </div> */}
		  <input type="password" id="inpt" name="password" placeholder="Password.." required value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
		  <div class="rw">
		  <input type="password" id="inpt" name="Confirmpassword" placeholder="Confirm Password" required />
	      </div>
		  <input id="smt" type="submit" value="Register"/>
		</form>
		<div class="sgcol">
			<img id="sgimg" src="https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
		</div>
		</div>
		<p id="sglg"><a id="lg"href="login">Login</a> if already registered</p>
		<p id="sglg"><Link id="lg" to='/home'>Back To Home Page</Link></p>
	  </div>
	  </div>
    )
}

export default Signup
