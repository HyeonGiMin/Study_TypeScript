export class Rangeiterable{
    constructor(public from:number, public to:number){}
    [Symbol.iterator](){
        const that=this
        let currnetvalue=that.from
        return{
            netxt(){
                const value=currnetvalue<that.to?currnetvalue++:undefined
                const done=value==undefined
                return {value,done}
            }
        }
    }
}