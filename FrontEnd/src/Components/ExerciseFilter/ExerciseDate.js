import './ExerciseDate.css'
import React  from 'react'
function ExerciseDate(props){
    const month=props.date.toLocaleString('en-US',{month : 'long'})
    console.log(month)
    const day=props.date.toLocaleString('en-US',{day : '2-digit'})
    console.log(day)
    const newdate=new Date(props.date)
    console.log(year)
    const year=newdate.getFullYear()

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}
export default ExerciseDate