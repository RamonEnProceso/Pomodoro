import { minToMs } from "./minToMilisec";

export const timeNow = () : number => {
    return Date.now();
}

export const calcFinishTime = (min:number) : number => {
    const startTime = timeNow();
    const finishTime = startTime + minToMs(min);
    return finishTime;
}

export const calcTimeMs = (finishTime:number) : number => {
    return finishTime - timeNow();
}

export const calcNewFinishTime = (pauseTime:number,finishTime:number) : number => {
    const pendingTime = finishTime - pauseTime;
    return timeNow() + pendingTime;
}