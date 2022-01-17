import WorkoutCard from '../../components/workoutCard/WorkoutCard';
import "./TodaysWorkout.scss";

import workoutData from '../../Data/workoutData';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';

const TodaysWorkout = () => {

    return (
        <div className="app__container">
            <NavBar />
            <h1>Today's Workout</h1>
            <WorkoutCard workoutData={workoutData} />
            <div className='btn__container small-margin-top'>
                <Link className="btn btn--primary btn--big" to='/workout/exercise-list'>
                    Start now
                </Link>
            </div>
        </div>
    )
}

export default TodaysWorkout;