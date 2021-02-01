import MongoClient from 'mongodb'

export const connect =(mongoUrl:string ='mongodb://192.168.0.47:27017')=>
    MongoClient.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true})