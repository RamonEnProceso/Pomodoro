import type { TimerState } from "../../models/timerState";
import styles from "./pauseButtons.module.css";

interface PauseButtonsProps {
    timerState: TimerState;
    onStop: () => void;
    onPause: () => void;
    onResume: () => void;
}

const PauseButtons = ({ timerState, onStop, onPause, onResume }: PauseButtonsProps) => {
    const hidden = timerState === "stop";
    const isPaused = timerState === "pause";
    const label = isPaused ? "Resumir" : "Pausar";

    const handlePauseClick = () => {
        isPaused?onResume():onPause();
    };

    return (
        <div className={`${styles.pauseButtonsContainer} ${hidden ? styles.hide : ""}`}>
            <button className={styles.pauseButton} disabled={timerState === "stop"} onClick={handlePauseClick}>{label}</button>
            <button className={styles.stopButton} disabled={timerState === "stop"} onClick={onStop}>X</button>
        </div>
    );
};

export default PauseButtons;
