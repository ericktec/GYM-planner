import "./SignUp.scss";

import { ReactComponent as SignUpPhoto } from "../../assets/images/backIcon.svg";
import signUpImage from "./SignUpPhoto.svg";
import { useState } from 'react';
import InputText from '../../components/Inputs/InputText/InputText';
import InputRadioButton from '../../components/Inputs/InputRadioButton/InputRadioButton';
import InputSelect from '../../components/Inputs/InputSelect/InputSelect';
import InputNumber from '../../components/Inputs/InputNumber/InputNumber';

const SignUp = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [repeatEmail, setRepeatEmail] = useState("");
    const [genre, setGenre] = useState("male");
    const [weight, setWeight] = useState("");
    const [units, setUnits] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    return (
        <div className="signup__container">
            <SignUpPhoto className="btn-back signup__back-btn" />
            <img className="signup__image" src={signUpImage} />
            <div className="app__container">
                <form action="#" className="form__layout form-horizontal">
                    <InputText id="name" label="Name" name="name" placeholder="Introduce your name(s)" value={name} setValue={setName} />
                    <InputText id="lastName" label="Last name" name="lastName" placeholder="Introduce your last name" value={lastName} setValue={setLastName} />
                    <InputText id="email" label="Email" name="email" placeholder="Introduce your email" value={email} setValue={setEmail} ofType="email" />
                    <InputText id="repeatEmail" placeholder="Repeat your email" label="Repeat email" name="repeatEmail" value={repeatEmail} setValue={setRepeatEmail} ofType="email" />
                    <div>
                        <label className="input__label">Genre</label>
                        <InputRadioButton className="small-margin-right" value="male" label="Male" id="male" name="genre" selectedOption={genre} setSelectedOption={setGenre} />
                        <InputRadioButton value="female" label="Female" id="female" name="genre" selectedOption={genre} setSelectedOption={setGenre} />
                    </div>
                    <InputNumber min="0" max="1000" id="weight" label="Weight" name="weight" placeholder="Introduce your weight" value={weight} setValue={setWeight} />
                    <InputSelect id="units" label="Units" name="units" placeholder="Introduce your preferred units" value={units} setValue={setUnits}>
                        <option value="" disabled>Select your option</option>
                        <option value="pounds">Pounds</option>
                        <option value="kilograms">Kilograms</option>
                    </InputSelect>
                    <InputText id="password" label="Password" name="password" placeholder="Introduce your password" value={password} setValue={setPassword} hide ofType="password" />
                    <InputText id="repeatPassword" label="Repeat password" name="repeat password" placeholder="Repeat your password" value={repeatPassword} setValue={setRepeatPassword} ofType="password" />
                    <div>
                        <button className="btn btn--primary btn--large">Sign up</button>
                        <p className="form__message">I already have an account <a className="link">Sign in</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;