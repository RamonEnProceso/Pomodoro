import { toDisplayTwo } from "../../logic/toDisplayTwo";
import type { Timer } from "../../models/timer";
import styles from "./displayTimer.module.css"

const DisplayTimer = ({timer}:{timer:Timer}) =>{
    return <div className={styles.timerContainer}>
        <p >
            <span className={styles.minutes}>{toDisplayTwo(timer.minutes)}</span>
            <span>:</span>
            <span className={styles.seconds}>{toDisplayTwo(timer.seconds)}</span>
        </p>
    </div>
}

export default DisplayTimer;