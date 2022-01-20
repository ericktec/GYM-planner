import { useState } from 'react';
import InputText from '../../components/Inputs/InputText/InputText';
import "./LogIn.scss";

import logInPhoto from "./LogInPhoto.png";
import { ReactComponent as BackIcon } from "./../../assets/images/backIcon.svg";
import { Link } from 'react-router-dom';

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login__container">
            <BackIcon className="btn-back login__back-btn" />
            <img className="login__image" src={logInPhoto} />
            <div className="app__container">
                <form action="#" className="form__layout">
                    <InputText id="email" label="Email" name="email" placeholder="Introduce your email" value={email} setValue={setEmail} />
                    <InputText id="password" label="Password" name="password" placeholder="Introduce your password" value={password} setValue={setPassword} ofType="password" />
                    <div>
                        <Link className="btn btn--primary btn--large" to="/todays-workout">Log in</Link>
                        <p className="form__message">Don't have an account? <a className="link">Sign-up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;