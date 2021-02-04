import React , {useState} from 'react'
import {IUser} from './IUser'
import {getDataPromise} from './getDataPromise'

const App: React.FC=()=>{
  const [users,setUsers] = useState<IUser[]>([])
  getDataPromise((receivedUsers:IUser[])=>{
    setUsers([...users,...receivedUsers])
  })(0,1)
  return (
    <div className='App'>please open console window!</div>
  )
}

export default App