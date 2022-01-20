import "./Exercise.scss";

import NavBar from "../../components/NavBar/NavBar";
import TabBar from '../../components/TabBar/TabBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Exercise = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="app__container ">
            <NavBar />
            <div className="exercise__container">
                <TabBar tabNames={["Image", "Video"]} activeTab={activeTab} setActiveTab={setActiveTab}>
                    <img className="exercise__img" src="https://picsum.photos/1080/720?random=1" />
                    <div className="exercise__video__container">
                        <iframe className="exercise__video" src="https://www.youtube.com/embed/0GAdHFvfp3k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </TabBar>
                <div className="exercise__description">
                    <h1 className="exercise__name">Chest press</h1>
                    <p className="exercise__sets"><span className="font-bold">0/4</span>sets</p>
                    <p className='exercise__weight'><span className="font-bold">125</span> lbs</p>
                    <p className='exercise__reps'><span className="font-bold">13</span> reps</p>
                </div>
                <div className='btn__container small-margin-top small-margin-bottom'>

                    <Link className="btn btn--primary btn--big" to='/timer'>
                        Next set
                    </Link>
                    <Link className="btn btn--secondary btn--big" to="/workout/exercise-list">
                        Exercise List
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Exercise;