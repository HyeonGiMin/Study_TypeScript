import { rejects } from 'assert'
import { resolve } from 'path'
import rimraf from 'rimraf'
import {fileExists} from './fileExists'

export const rmdir =(dirname:string):Promise<string>=> 
    new Promise(async(resolve,resject)=>{
            const alreadyExists=await fileExists(dirname)
            !alreadyExists ? resolve(dirname):
            rimraf(dirname,error=>error?resject(error):resolve(dirname))
    })