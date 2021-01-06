import * as R from 'ramda'
import {square} from './quadratic'

const input : number[]=R.range(1,10+1)
const squareAterInc=R.pipe(
    R.inc,  //(x+1)
    square   //(x+1)**2
)

const squareResult=R.pipe(
    R.map(squareAterInc),
    R.tap(a=>console.log(a))
)(input)