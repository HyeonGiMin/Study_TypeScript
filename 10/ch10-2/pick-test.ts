import {pick} from './pick'

const obj={name:'Jane',age:22,city:'Seoul',country:'Korea'}
console.log(
    pick(obj,['age','age']),    //{name:'Jane',age:22}
    pick(obj,['nam','agge'])    //{name:undefined,agge:undefined}
)