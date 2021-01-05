import {pipe} from './pipe'
import {squaredMap} from './squaredMap'

const fourSqure=pipe(
    squaredMap,
    squaredMap
)
console.log(
    fourSqure([3,4])
)