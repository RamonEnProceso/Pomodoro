import type { Timer } from "../models/timer"
import { msToSec } from "./minToMilisec";

export const readSecondsTimer = (ms : number): Timer => {
    const sec = msToSec(ms);
    const minutes = Math.floor(sec/60);
    const seconds = sec%60;
    return{minutes,seconds}
}