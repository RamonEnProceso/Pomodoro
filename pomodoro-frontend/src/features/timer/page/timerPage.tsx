import { useEffect, useState } from "react";
import DisplayTimer from "../displayTimer";
import TimerTypes from "../timerTypes";
import PauseButtons from "../pauseButtons";
import { readSecondsTimer } from "../../../logic/readSecondsTimer";
import { calcFinishTime, calcTimeMs, calcNewFinishTime} from "../../../logic/calcTime";
import { minToMs } from "../../../logic/minToMilisec";
import type { TimerState } from "../../../models/timerState";
import styles from "./timerPage.module.css"

var WORK_MINUTES = 10;
var PENDING_TIME = 10;

const TimerPage = () => {
    const [finishTime, setFinishTime] = useState<number | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [timerState, setTimerState] = useState<TimerState>("stop");
    const [timer, setTimer] = useState(readSecondsTimer(minToMs(10)));

    useEffect(() => {
        if (!isRunning || finishTime === null) return;

        const interval = setInterval(() => {
            const remaining = calcTimeMs(finishTime);

            if (remaining <= 0) {
                setTimer(readSecondsTimer(0));
                setIsRunning(false);
                setTimerState("stop");
                return;
            }

            setTimer(readSecondsTimer(remaining));
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, finishTime]);

    const start = () => {
        setFinishTime(calcFinishTime(WORK_MINUTES));
        setIsRunning(true);
        setTimerState("running");
    };

    const setTime = (e:number) => {
        WORK_MINUTES = e;
        setTimer(readSecondsTimer(minToMs(e)));
    };

    const stopTimer = () =>{
        setTimer(readSecondsTimer(minToMs(WORK_MINUTES)));
        setIsRunning(false);
        setTimerState("stop");
    }

    const pauseTimer = () => {
        const pendingTime = calcTimeMs(finishTime??0);
        PENDING_TIME = pendingTime;
        setIsRunning(false);
        setTimerState("pause");
    };

    const resumeTimer = () => {
        setTimer(readSecondsTimer(PENDING_TIME));
        setFinishTime(calcNewFinishTime(PENDING_TIME));
        setIsRunning(true);
        setTimerState("running");
    };

    const startHidden = timerState === "running" || timerState === "pause";

    return (
        <section className={styles.timerSection}>
            <DisplayTimer timer={timer}/>
            <TimerTypes timerState={timerState} isRunning={isRunning} onSetTime={setTime}/>
            <div className={styles.buttonContainer}>
                <button className={`${styles.startButton} ${startHidden ? styles.hide : ""}`} onClick={start} disabled={isRunning}>Iniciar</button>
                <PauseButtons timerState={timerState} onStop={stopTimer} onPause={pauseTimer} onResume={resumeTimer}/>
            </div>
        </section>
    );
};

export default TimerPage;
