import './ExerciseItem.css'
import React , {useState} from 'react'
import ExerciseDate from './ExerciseDate';
import Card from './Card';
function ExerciseItem(props){
   console.log(props.filtkey)
    console.log(props.date)
    
    return (
        <Card className='expense-item'>
            <ExerciseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <h2>{props.Category}</h2>
                <h2>{props.calories} Kcal</h2>
                <div className='expense-item__price'>{props.distance}KM</div>
                
            </div>
        </Card>

    )
}

export default ExerciseItem;