import type { TimerState } from "../../models/timerState";
import styles from "./timerTypes.module.css";

interface TimerTypesProps {
    timerState: TimerState;
    isRunning: boolean;
    onSetTime: (minutes: number) => void;
}

const TimerTypes = ({ timerState, isRunning, onSetTime }: TimerTypesProps) => {
    const hidden = timerState === "running" || timerState === "pause";

    return (
        <div className={`${styles.timerTypesContainer} ${hidden ? styles.hide : ""}`}>
            <p className={styles.timerTypesTitle}>Tiempo De Sesión:</p>
            <div className={styles.timeButtonContainer}>
                <button className={styles.timeButton} onClick={() => onSetTime(40)} disabled={isRunning}>40min</button>
                <button className={styles.timeButton} onClick={() => onSetTime(25)} disabled={isRunning}>25min</button>
                <button className={styles.timeButton} onClick={() => onSetTime(10)} disabled={isRunning}>10min</button>
            </div>
        </div>
    );
};

export default TimerTypes;
