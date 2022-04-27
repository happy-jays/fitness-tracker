import React from "react";
import Chart from "./Chart";
function ExerciseChart(props){
    const doneExercises=props.doneExercises
    const filter=props.filter
    const dataPoints=[
        { label : 'Sunday' , value :0 },
        { label : 'Monday' , value :0 },
        { label : 'Tuesday' , value :0 },
        { label : 'Wednesday' , value :0 },
        { label : 'Thursday' , value :0 },
        { label : 'Friday' , value :0 },
        { label : 'Saturday' , value :0 }
    ]

if(filter === 'distance'){
    console.log(doneExercises)
    for (let i=0;i<dataPoints.length;i++){
        for (let j=0;j<doneExercises.length;j++){
            if(doneExercises[j].day === dataPoints[i].label){
                console.log('yes')
                dataPoints[i].value += parseFloat(doneExercises[j].distance)
                
            }
        }
    }
    console.log(dataPoints)
}
if(filter === 'calories'){
    console.log(doneExercises)
    for (let i=0;i<dataPoints.length;i++){
        for (let j=0;j<doneExercises.length;j++){
            if(doneExercises[j].day === dataPoints[i].label){
                console.log('yes')
                dataPoints[i].value += parseFloat(doneExercises[j].calories)
                
            }
        }
    }
    console.log(dataPoints)
}if(filter === 'duration'){
    console.log(doneExercises)
    for (let i=0;i<dataPoints.length;i++){
        for (let j=0;j<doneExercises.length;j++){
            if(doneExercises[j].day === dataPoints[i].label){
                console.log('yes')
                dataPoints[i].value += parseFloat(doneExercises[j].duration)
                
            }
        }
    }
    console.log(dataPoints)
}


return (
    <div>
        <Chart dataPoints={dataPoints}></Chart>
    </div>
)
}
export default ExerciseChart