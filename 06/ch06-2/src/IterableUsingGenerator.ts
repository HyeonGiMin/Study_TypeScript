export class IterableUsingGenerator<T> implements Iterable<T>{
    constructor(private values: T[]=[],private currnetIndex:number=0){}
    [Symbol.iterator]=function* (){
        while(this.currnetIndex<this.values.length){
            yield this.values[this.currentIndex++]
        }
    }
}