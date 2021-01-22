import * as fs from 'fs'
import {fileExists} from './fileExists'

export const deleteFile=(filename:string):Promise<string>=>
    new Promise<any>(async(resolve,rejeect)=>{
        const alreadExists= await fileExists(filename)
        !alreadExists?resolve(filename):
            fs.unlink(filename,(error)=> error? rejeect(error):resolve(filename))
    })