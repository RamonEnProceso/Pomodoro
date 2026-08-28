export const toDisplayTwo = (num:number) : string =>{
    if(num>=10){
        return `${num}`;
    }
    return `0${num}`
}