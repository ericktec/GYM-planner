import WorkoutCard from '../../components/workoutCard/WorkoutCard';
import "./TodaysWorkout.scss";

import workoutData from '../../Data/workoutData';

const TodaysWorkout = () => {

    return (
        <div className="app__container">
            <h1>Today's Workout</h1>
            <WorkoutCard workoutData={workoutData} />
            <div className='btn__container small-margin-top'>
                <a className="btn btn--primary btn--big" href='#'>
                    Start now
                </a>
            </div>
        </div>
    )
}

export default TodaysWorkout;