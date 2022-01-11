import { useState, useEffect, useRef } from 'react';
import "./Timers.scss";

const Timer = ({ time }) => {
    const [timeRemaining, setTimeRemaining] = useState(time);
    const wave = useRef();
    if (wave.current) wave.current.style.top = `${100 - (timeRemaining / time * 100)}%`

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(timeRemaining => timeRemaining - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


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