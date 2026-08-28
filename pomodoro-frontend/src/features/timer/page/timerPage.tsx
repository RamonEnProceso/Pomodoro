import { useEffect, useState } from "react";
import DisplayTimer from "../displayTimer";
import { readSecondsTimer } from "../../../logic/readSecondsTimer";
import { calcFinishTime, calcTimeMs } from "../../../logic/calcTime";
import { minToMs } from "../../../logic/minToMilisec";

var WORK_MINUTES = 1;

const TimerPage = () => {
    const [finishTime, setFinishTime] = useState<number | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(readSecondsTimer(0));

    useEffect(() => {
        if (!isRunning || finishTime === null) return;

        const interval = setInterval(() => {
            const remaining = calcTimeMs(finishTime);

            if (remaining <= 0) {
                setTimer(readSecondsTimer(0));
                setIsRunning(false);
                return;
            }

            setTimer(readSecondsTimer(remaining));
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, finishTime]);

    const start = () => {
        setFinishTime(calcFinishTime(WORK_MINUTES));
        setIsRunning(true);
    };

    const setTime = (e:number) => {
        WORK_MINUTES = e;
        setTimer(readSecondsTimer(minToMs(e)));
    };

    return (
        <div>
            <DisplayTimer timer={timer}/> <div>
                <button onClick={() => setTime(40)} disabled={isRunning}>40min</button>
                <button onClick={() => setTime(25)} disabled={isRunning}>25min</button>
                <button onClick={() => setTime(10)} disabled={isRunning}>10min</button>
            </div>
            <button onClick={start} disabled={isRunning}>Iniciar</button>
        </div>
    );
};

export default TimerPage;
