import {Identity} from './classes/Identity'
type ISucess={isSuccess:boolean,isFailure:boolean}

const checkSuccess=(a:ISucess)=>(b:ISucess):boolean=>
    [a,b].filter(({isFailure})=>isFailure==true).length==0

const isSuccess=Identity.of(checkSuccess)
                        .ap({isSuccess:true,isFailure:false})
                        .ap({isSuccess:false,isFailure:true})
                        .value()
console.log(isSuccess)