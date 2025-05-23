import "./ExerciseCard.scss";
import { ReactComponent as EditIcon } from "../../assets/images/EditIcon.svg";
import { Link } from 'react-router-dom';

const ExerciseCard = ({ name, sets, setsCompleted, setSetsCompleted }) => {

    return (
        <div className="exercise-card">
            <img src="https://picsum.photos/300/200?random=1" alt="exercise" className="exercise-card__img" />
            <div className="exercise-card__description">
                <p>{name}</p>
                <p>Sets {setsCompleted}/{sets}</p>
            </div>
            <Link to={"/editWorkout"}>
                <EditIcon className="exercise-card__edit" />
            </Link>
            {setsCompleted < sets ? <p className="exercise-card__status exercise-card__status-incomplete">Incomplete</p> :
                <p className="exercise-card__status exercise-card__status-complete">Complete</p>
            }

        </div>
    );
}

export default ExerciseCard;