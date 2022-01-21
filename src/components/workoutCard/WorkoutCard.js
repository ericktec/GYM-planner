import React from 'react';
import "./WorkoutCard.scss";

const WorkoutCard = ({ workoutData }) => {

    return (
        <div className="workout-card__container">
            <h3>{workoutData.name}</h3>
            <div className="workout-card__exercise-table">
                <p>Exercise</p>
                <p className="text-align-center" >Reps</p>
                <p className="text-align-center" >Series</p>
                <p className="text-align-center" >Weight</p>
                {workoutData.exercises.map((exercise, i) =>
                    <React.Fragment key={i}>
                        <p >{exercise.name}</p>
                        <p className="text-align-center">{`${exercise.reps.min}${exercise.reps.max ? " - " + exercise.reps.max : ""}`}</p>
                        <p className="text-align-center">{exercise.series}</p>
                        <p className="text-align-center">{exercise.weight} lbs</p>
                    </React.Fragment>)}
            </div>
        </div>
    )
}

export default WorkoutCard;