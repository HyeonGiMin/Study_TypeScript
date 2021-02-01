import {connect} from '../mongodb/connect'


const sortTest=async()=>{
    let connection 
    try{
        connection = await connect()
        const db= await connection.db('ch12-2')
        const personsCollecction =db.collection('persons')
        await personsCollecction.createIndex({name:1,age:-1})
        await personsCollecction.deleteMany({})
        await personsCollecction.insertMany([
            {name:'Jack',age:32},{name:'Tom',age:33},{name:'Jane',age:10}
        ])

        const cursor=personsCollecction.find({name:'Jack'}).sort({age:-1})
        const result=await cursor.toArray()
        console.log(result)

    }catch(e){
        console.log(e.message)
    }finally{
        connection.close()
    }
}

sortTest()