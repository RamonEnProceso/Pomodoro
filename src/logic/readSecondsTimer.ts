import type { Timer } from "../models/timer"

export const readSecondsTimer = (sec : number): Timer => {
    const minutes = Math.floor(sec/60);
    const seconds = sec%60;
    return{minutes,seconds}
}