import React, { useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "./Header";

const Home = (props) => {
    const url="http://localhost:8080/images/paris.jpg"
    const [authData,setAuthData]=useState()
    const location=useLocation()
    console.log(location)
    return (
        <body>
           <Header  />
           <div className="row1">
           <div className="col">
                <h1 id="hm-hd">Welcome To UFIT</h1>
                <p id="hd1">Take your fitness to a new level with us .</p>
                <p id="ab1">UFIT helps you keep yourself fit and active. Whether you have an access to a world class gym or looking to get shredded at home. We offer customizable workouts to choose when and what you want to workout. Get access to world class fitness training programs. Also included is the new athletic training problem which offers the training and diet plans of real life athletes.  Challenge yourself by participating in a 30 day fitness challenge.</p>
                


                <p id="tyf"><a href= "/trial">TEST Your Fitness</a></p>
           </div>
            <img id="img1" src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX31340884.jpg' alt="img1"/>
           </div>
        </body>
    )
}

export default Home
