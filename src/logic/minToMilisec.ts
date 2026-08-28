export const secToMs = (sec:number) : number => {
    return sec*1000
}

export const msToSec = (ms:number) : number =>{
    return Math.ceil(ms/1000)
}

export const minToMs = (min:number) : number => {
    return secToMs(min*60)
}