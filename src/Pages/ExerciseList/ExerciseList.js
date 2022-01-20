import "./ExerciseList.scss";
import "../../components/NavBar/NavBar";
import NavBar from '../../components/NavBar/NavBar';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import { Link } from 'react-router-dom';

import workoutData from "../../Data/workoutData.js";

const ExerciseList = () => {

    return (
        <div className="app__container">
            <NavBar />
            <h1>Exercise list</h1>
            <div className="exercise-list">
                {workoutData.exercises.map((exercise, i) => <ExerciseCard key={i} name={exercise.name} sets={exercise.series} setsCompleted={4} />)}
            </div>
            <div className='btn__container small-margin-top'>

                <Link className="btn btn--primary btn--big" to='/workout/exercise-list/exercise'>
                    Start workout
                </Link>
                <Link className="btn btn--secondary btn--big" to="/todays-workout">
                    Complete workout
                </Link>
            </div>
        </div>
    );
}

export default ExerciseList;