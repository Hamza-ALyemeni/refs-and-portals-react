import { useRef, useState } from "react";
import ResultModel from "./ResultModel.jsx";

// let timer;
export default function TimerChallenge({title ,targetTime}) {
    let timer = useRef();

    const [timerStarted , setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(()=>
        {setTimerExpired(true)},
        targetTime * 1000);
        setTimerStarted(true);
    }    
    function handleStop() {
        clearTimeout(timer.current);
    }
    return (
    <>
        {timerExpired && <ResultModel result="Lost" targetTime={targetTime} />}
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "End Challange" : "Start Challenge"}
                </button>
            </p>
            <p className={targetTime ? "active" : undefined}>
                {timerStarted ? 'Timer is running...' :  '/ Timer inactive'}
            </p>
        </section>
    </>
    )
}