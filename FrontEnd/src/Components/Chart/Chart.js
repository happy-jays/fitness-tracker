import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'
function Chart(props){
    console.log(props.dataPoints)
    
    let max=0
    for( let i=0;i<props.dataPoints.length;i++)
    {
        max=Math.max(max,props.dataPoints[i].value)
    }
    console.log(max)
    
    return(
        <div className="chart">
            {
                props.dataPoints.map(
                    (dataPoint) => (<ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    max={max}
                    value={dataPoint.value}
                    
                    ></ChartBar>)
                )
            }
        </div>
    )

}
export default Chart