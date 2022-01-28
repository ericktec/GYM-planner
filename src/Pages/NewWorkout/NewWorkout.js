import "./NewWorkout.scss";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from 'react';
import InputText from '../../components/Inputs/InputText/InputText';
import InputNumber from '../../components/Inputs/InputNumber/InputNumber';
import InputSelectMany from '../../components/Inputs/InputSelectMany/InputSelectMany';

import { muscles } from './muscles';
import InputDragFile from '../../components/Inputs/InputNumber/InputDragFile/InputDragFile';
import AddButton from '../../components/Buttons/AddButton/AddButton';
import RemoveButton from '../../components/Buttons/RemoveButton/RemoveButton';

const NewWorkout = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [days, setDays] = useState("1");
    const [exercisesDays, setExercisesDays] = useState
        ([
            {
                exercises: [{
                    name: "",
                    series: "",
                    repsMin: "",
                    repsMax: "",
                    image: undefined,
                    videoUrl: ""
                }],
                muscles: []
            }
        ]);


    const setExercisesArray = (value) => {
        value = +value;
        setExercisesDays(prevState => {
            const length = prevState.length;
            let temp = []
            if (value > length) {
                temp = [...prevState];
                for (let i = 0; i < value - length; i++) {
                    temp.push(
                        {
                            exercises: [{
                                name: "",
                                series: "",
                                repsMin: "",
                                repsMax: "",
                                image: undefined,
                                videoUrl: ""
                            }],
                            muscles: []
                        }
                    );
                }
            }
            else {
                temp = prevState.slice(0, value);
            }
            return temp;
        });
    }

    const setInternalValues = (value, i, j, field) => {
        setExercisesDays(prev => {
            let temp = [...prev]
            if (typeof value === "function") {
                value = value(temp[i].exercises[j][field]);
            }
            temp[i].exercises[j][field] = value;
            return temp;
        });
    }

    const setNumberOfExercises = (value, i) => {
        setExercisesDays(prev => {
            let temp = [...prev];
            if (typeof value === 'function') {
                value = value(temp[i].exercises);
            }
            console.log(value)
            temp[i].exercises = value;
            return temp;
        });
    }

    useEffect(() => {
        setExercisesArray(days)
    }, [days]);


    return (
        <div className="app__container">
            <NavBar />
            <h1>New workout</h1>
            <form action="#" className="form__layout">
                <InputText value={name} setValue={setName} id="name" label="Name" placeholder="Workout's name" />
                <InputText value={type} setValue={setType} id="type" label="Type" placeholder="Example: Top/bottom" />
                <InputNumber value={days} setValue={setDays} label="Days" placeholder="How many days of workout" min="1" max="7" />
                {exercisesDays.map((day, i) => (
                    <div key={i} className="exercises__section form__layout">
                        <h4 className="small-margin-bottom">Day {i + 1}</h4>
                        <InputSelectMany placeholder="Muscle groups" label="Muscles" id="muscles" options={muscles}
                            optionsSelected={day.muscles}
                            setOptionsSelected={(optionsSelected) => {
                                setExercisesDays(prev => {
                                    let temp = [...prev]
                                    if (typeof optionsSelected === "function") {
                                        optionsSelected = optionsSelected(temp[i].muscles)
                                    }
                                    temp[i].muscles = optionsSelected;
                                    return temp;
                                });
                            }} />
                        <h6 className="small-margin-bottom small-margin-top">Exercises</h6>
                        {day.exercises.map((exercise, j) => (
                            <div key={j * 10} className="exercise__form form__layout">
                                <InputText value={exercise.name}
                                    setValue={(value) => setInternalValues(value, i, j, "name")} label="Name" placeholder="Exercise's name" />
                                <InputNumber value={exercise.series} setValue={(value) => setInternalValues(value, i, j, "series")} label="Series" placeholder="How many series" min="1" max="1000" />
                                <div>
                                    <label className="input__label">Reps</label>

                                    <InputNumber label="Min" value={exercise.repsMin} setValue={(value) => setInternalValues(value, i, j, "repsMin")} placeholder="Min reps" min="0" max="1000" />
                                    <InputNumber value={exercise.repsMax} setValue={(value) => setInternalValues(value, i, j, "repsMax")} label="Max" placeholder="Max reps" min="0" max="1000" />

                                </div>
                                <InputDragFile label="Image" inputFile={exercise.image} setInputFile={(value) => setInternalValues(value, i, j, "image")} />
                                <InputText value={exercise.videoUrl} setValue={(value) => setInternalValues(value, i, j, "videoUrl")} label="Video url" placeholder="embedded vide url" />
                            </div>
                        ))}
                        <RemoveButton label="Remove exercise" inputArray={day.exercises} setInputArray={(value) => setNumberOfExercises(value, i)} />
                        <AddButton label="Add exercise" inputArray={day.exercises} setInputArray={(value) => setNumberOfExercises(value, i)} newValue={{
                            name: "",
                            series: "",
                            repsMin: "",
                            repsMax: "",
                            image: undefined,
                            videoUrl: ""
                        }} />
                    </div>
                ))}

            </form>
        </div>
    );
}

export default NewWorkout;