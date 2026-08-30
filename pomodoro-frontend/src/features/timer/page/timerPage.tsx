import { useEffect, useState } from "react";
import DisplayTimer from "../displayTimer";
import { readSecondsTimer } from "../../../logic/readSecondsTimer";
import { calcFinishTime, calcTimeMs } from "../../../logic/calcTime";
import { minToMs } from "../../../logic/minToMilisec";
import type { TimerState } from "../../../models/timerState";
import styles from "./timerPage.module.css"

var WORK_MINUTES = 1;

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

    const hideButtons = (tS : TimerState, initial:boolean) => {
        if(initial){
            if(tS === "running" || tS === "pause"){
            return styles.hide;
            }
            return "";
        }else{
            if(tS === "running" || tS === "pause"){
            return "";
            }
            return styles.hide;
        }
    }

    const stopTimer = () =>{
        setTimer(readSecondsTimer(minToMs(10)));
        setIsRunning(false);
        setTimerState("stop");
        return;
    }

    return (
        <section className={styles.timerSection}>
            <DisplayTimer timer={timer}/>
            <div className={`${styles.timerTypesContainer} ${hideButtons(timerState, true)}`}>
                <p className={styles.timerTypesTitle}>Tiempo De Sesión:</p>
                <div className={styles.timeButtonContainer}>
                    <button className={styles.timeButton} onClick={() => setTime(40)} disabled={isRunning}>40min</button>
                    <button className={styles.timeButton} onClick={() => setTime(25)} disabled={isRunning}>25min</button>
                    <button className={styles.timeButton} onClick={() => setTime(10)} disabled={isRunning}>10min</button>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={`${styles.startButton}  ${hideButtons(timerState, true)}`} onClick={start} disabled={isRunning}>Iniciar</button>
                <div className={`${styles.pauseButtonsContainer} ${hideButtons(timerState, false)}`}>
                    <button className={styles.pauseButton} disabled={!isRunning}>Pausar</button>
                    <button className={styles.stopButton} disabled={!isRunning} onClick={stopTimer}>X</button>
                </div>
            </div>
        </section>
    );
};

export default TimerPage;
