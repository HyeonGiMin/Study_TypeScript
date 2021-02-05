import React , {useState,useEffect} from 'react'
import {IUser} from './IUser'
import {getDataPromise} from './getDataPromise'

const App: React.FC=()=>{
  const limit=1
  const [skip,setSkip]=useState(0)
  const [users,setUsers] = useState<IUser[]>([])
  const onClick=()=>{
      getDataPromise((receivedUsers:IUser[])=>{
        setUsers([...users,...receivedUsers])
      })(skip,limit)
  }
  useEffect(onClick,[])

  return (
    <div className='App'>
      <p><button onClick={onclick}>more data...</button></p>
      <p>{JSON.stringify(users)}</p>
    </div>
  )
}

export default App