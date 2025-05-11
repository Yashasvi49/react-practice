import React from 'react'
import { toast } from 'react-toastify'

function List(props) {
    const {users,setusers} = props
    console.log(props)
    const deletehandler = (id) => {
        const copyusers =[...users]
        const filteredusers = copyusers.filter((user) => user.id != id)
        setusers(filteredusers)

    }
    
    const userslist = users.map((user) =>{
        return <ul  key={user.id}>
        <li key={user.id} className='flex justify-between items-center  bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl p-5 w-100 mb-2'>
            <div className='flex flex-col'>
                <span className='font-thin text-2xl'>{user.Name}</span>
                <small>{user.Email}</small>
            </div>
            <span onClick={() => deletehandler(user.id)} className='text-red-600 cursor-pointer'>delete</span>
        </li>
    </ul>

    })
         
  return (
    <div >
        <ul>
{users.length != 0 ? userslist : <h1>DATA NOT FOUND</h1>}        </ul>
    </div>
  )
}

export default List