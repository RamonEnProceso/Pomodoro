import { toDisplayTwo } from "../../logic/toDisplayTwo";
import type { Timer } from "../../models/timer";

const DisplayTimer = ({timer}:{timer:Timer}) =>{
    return <div>
        <p>
            <span>{toDisplayTwo(timer.minutes)}</span>
            <span>:</span>
            <span>{toDisplayTwo(timer.seconds)}</span>
        </p>
    </div>
}

export default DisplayTimer;