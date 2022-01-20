import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Timers.scss";

const Timer = ({ time }) => {
    const [timeRemaining, setTimeRemaining] = useState(time);
    const wave = useRef();
    const navigate = useNavigate();
    if (wave.current) wave.current.style.top = `${100 - (timeRemaining / time * 100)}%`
    const intervalHandler = () => {
        setTimeRemaining(timeRemaining => {
            return timeRemaining - 1
        });
    }

    useEffect(() => {
        const interval = setTimeout(intervalHandler, 1000);
        return () => clearTimeout(interval);
    });

    if (timeRemaining < 0) {
        navigate("/workout/exercise-list/exercise");
    }

    return (
        <div className='timer'>
            <div ref={wave} className="timer__wave"></div>
            <p className="timer__seconds">{timeRemaining}</p>
        </div>
    )
}

Timer.defaultProps = {
    time: 60
}

export default Timer;