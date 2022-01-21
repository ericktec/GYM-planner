import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputImageBtn from '../../components/Inputs/InputImageBtn/InputImageBtn';
import InputNumber from '../../components/Inputs/InputNumber/InputNumber';
import InputSelect from '../../components/Inputs/InputSelect/InputSelect';
import InputText from '../../components/Inputs/InputText/InputText';
import NavBar from '../../components/NavBar/NavBar';
import "./EditWorkout.scss";

import exerciseImg from "./EditWorkout.svg";

const EditWorkout = () => {

    const [img, setImg] = useState(exerciseImg)
    const [exerciseName, setExerciseName] = useState("");
    const [weight, setWeight] = useState("");
    const [units, setUnits] = useState("");
    const [minReps, setMinReps] = useState("");
    const [maxReps, setMaxReps] = useState("");
    const [sets, setSets] = useState("");
    return (
        <div className="app__container">
            <NavBar />
            <InputImageBtn img={img} setImg={setImg} />
            <form action="#" className="form__layout">
                <InputText value={exerciseName} setValue={setExerciseName} id="exercise-name" label="Name" placeholder="Exercise name" />
                <div className="input__group">
                    <InputNumber value={weight} setValue={setWeight} label="Weight" placeholder="Weight?" min="0" max="1000" />
                    <InputSelect value={units} setValue={setUnits} id="units" label="Units" placeholder="Select the weight units">
                        <option value="" disabled>Select your option</option>
                        <option value="pounds">Pounds</option>
                        <option value="kgs">Kilos</option>
                    </InputSelect>
                </div>
                <label className="input__label">Reps</label>
                <div className="input__group">
                    <InputNumber value={minReps} setValue={setMinReps} label="Min" placeholder="Min reps" min="0" max="1000" />
                    <InputNumber value={maxReps} setValue={setMaxReps} label="Max" placeholder="Max reps" min="0" max="1000" />
                </div>
                <InputNumber value={sets} setValue={setSets} label="Sets" placeholder="Number of sets" min="1" max="100" />
                <div className='btn__container small-margin-top'>
                    <Link className="btn btn--primary btn--big" to='/workout/exercise-list/'>
                        Save changes
                    </Link>
                    <Link className="btn btn--secondary btn--big" to="/workout/exercise-list/">
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default EditWorkout;