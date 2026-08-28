import DisplayTimer from "../displayTimer";
import type { Timer } from "../../../models/timer";
import { readSecondsTimer } from "../../../logic/readSecondsTimer";

const timer : Timer = readSecondsTimer(0);

const TimerPage = () => {
    return <div>
        <DisplayTimer timer={timer}/>
    </div>
}

export default TimerPage;