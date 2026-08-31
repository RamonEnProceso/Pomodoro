export const timeNow = () : number => {
    return Date.now();
}

export const calcFinishTime = (min:number) : number => {
    const startTime = timeNow();
    const finishTime = startTime + min;
    return finishTime;
}

export const calcTimeMs = (finishTime:number) : number => {
    return finishTime - timeNow();
}