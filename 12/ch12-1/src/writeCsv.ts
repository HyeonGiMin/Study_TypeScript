import {writeCsvFormatFakeData} from './fake'
import {getFileNameAndNumber} from './utils/getFileNameAndNumber'

const [filename,numberOfFakeData]= getFileNameAndNumber('./dta/fake',1)
const csvFilename= `${filename}-${numberOfFakeData}.csv`
writeCsvFormatFakeData(csvFilename,numberOfFakeData)
    .then(result=>console.log(result))
    .catch((e:Error)=> console.log(e.message))