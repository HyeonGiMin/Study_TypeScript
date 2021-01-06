import * as R from 'ramda'

const input : number[]=R.range(1,10_1),halfvalue=input[input.length/2]

const subtractOrAdd=R.pipe(
    R.map(R.ifElse(
        R.lte(halfvalue),
        R.inc,
        R.dec
    )),
    R.tap(a=>console.log(a))
)
const result=subtractOrAdd(input)