import {connect} from '../mongodb/connect'

const findDocumentTest=async()=>{
    let connection ,cursor
    try{
        connection = await connect()
        const db= await connection.db('ch12-2')
        const personsCollecction =db.collection('persons')
        const addressCollection= db.collection('addresses')

        cursor=personsCollecction.find({name:'Jack'})
        const foundPersons=await cursor.toArray()
        console.log(foundPersons)

        cursor=addressCollection.fund({})
        const foundAddress=await cursor.toArray()
        console.log(foundAddress)
    }catch(e){
        console.log(e.message)
    }finally{
        connection.close()
    }
}

findDocumentTest()