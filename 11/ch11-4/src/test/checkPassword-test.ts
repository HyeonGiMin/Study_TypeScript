import {checkPassword} from '../checkPassword'

[
    {password: '123456'},
    {password: '1234'},
    {},
    {pa:'123456'}
]
.forEach((target,index)=>{
    const [value,failureReson]=checkPassword(target)
    if(failureReson){
        console.log(index, 'validtaion fail.', JSON.stringify(failureReson))
    }else{
        console.log(index,'validation ok',JSON.stringify(value))
    }
})