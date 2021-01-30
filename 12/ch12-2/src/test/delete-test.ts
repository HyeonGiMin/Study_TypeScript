import {connect} from '../mongodb/connect'


const deleteTest=async()=>{
    let connection ,cursor
    try{
        connection = await connect()
        const db= await connection.db('ch12-2')
        const personsCollecction =db.collection('persons')
        await personsCollecction.insertMany([
            {name:'Jack'},{name:'Tom'},{name:'Jane'}
        ])

        let result = await personsCollecction.deleteOne({name:'Tom'})
        console.log(result)
        result= await personsCollecction.deleteMany({})
        console.log(result)
    }catch(e){
        console.log(e.message)
    }finally{
        connection.close()
    }
}

deleteTest()