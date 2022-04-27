import React,{useState} from 'react'
import "./style.css";
const Trial = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const fitnessReport = (e) => {
        e.preventDefault();
        const report = { height, weight};
        
    }
    return (
        <div class="bdy">
        <div class="c1">
        <h1 id="hd">TEST YOUR FITNESS</h1>
        <form action="#" onsubmit={fitnessReport}>
            <div class="rw">
                <div class="lbl"><label for="">Height</label></div>
                <input type="text" id="hgt" placeholder='please enter your height in cm' value={height} onChange={(e) => setHeight(e.target.value)}/>
                <span id="cname"></span>
            </div>
            <div class="rw">
                <div class="lbl"><label for="">Weight</label></div>
                <input type="text" id="wgt" placeholder='please enter your weight in Kg' value={weight} onChange={(e) => setWeight(e.target.value)}/>
                <span id="cname"></span>
            </div>
            <div class="rw">
                <div class="lbl"><label for="">Age</label></div>
                <input type="text" id="age"/>
                <span id="ag"></span>
            </div>
            <div class="rw">
                <div class="lbl"><label for="">DO You walk atleast 30 minutes daily ?</label></div>
                <select id="Category" class="box" name="Category">
                    <option value="yes">YES</option>
                    <option value="no">NO</option>
                  </select>
            </div>
            <div class="rw">
                <div class="lbl"><label for="">How many Pushups You can do ?</label></div>
                <input type="text" id="psp"/>
            </div>
            <div class="rw">
                <div class="lbl"><label for="">DO You perform fitness exercises ?</label></div>
                <select id="Category" class="box" name="Category">
                    <option value="yes">YES</option>
                    <option value="no">NO</option>
                  </select>
            </div>
              
            <div class="rw">
                <input type="submit" id="smt"/>
            </div>
        </form>
    </div>
    <p id="hdl">{weight/((height/100)*(height/100))}</p>
    </div>
    )
}

export default Trial
