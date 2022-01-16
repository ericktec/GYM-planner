import rectangle1 from "./Rectangle 11.svg";
import rectangle2 from "./Rectangle 12.svg";
import people from "./Academia Png 1.svg";

import "./Home.scss";


const Home = () => {

    return (
        <div>
            <div className="title">
                <h1 className="title--small">Welcome to</h1>
                <h1 className="title--big">GYM Planning</h1>
            </div>
            <div className="logo">
                <img src={rectangle2} alt="" className="logo__image" />
                <img src={rectangle1} alt="" className="logo__image" />
                <img src={people} alt="" className="logo__image" />
            </div>

            <div className='btn__container small-margin-top'>
                <a className="btn btn--primary btn--big" href='#'>
                    Log in
                </a>
                <a className="btn btn--secondary btn--big" href='#'>
                    Sign up
                </a>
            </div>

        </div>
    )
}


export default Home;