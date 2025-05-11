
import React, { useState } from 'react';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import List from './Components/List';
import {useForm} from 'react-hook-form'

function App() {
  const [pagetoggle, setpagetoggle] = useState(true)
  const [users, setusers] = useState([])

  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-purple-500 via-pink-400 to-red-40 text-white flex justify-evenly items-center gap-12 overflow-y-auto">
    <div className="min-h-screen  text-white flex flex-col justify-center items-center p-4 gap-12  ">
   {pagetoggle ?  <Signin users={users} setusers={setusers} pagetoggle={pagetoggle} setpagetoggle={setpagetoggle} />:<Signup users={users} setusers={setusers}  pagetoggle={pagetoggle} setpagetoggle={setpagetoggle} />      }
    </div>
    <div><List  users={users} setusers={setusers}/></div>
    </main>
  );
}

export default App;
