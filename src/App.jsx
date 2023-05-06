import React, { useEffect, useState } from 'react';

const App = () => {
  const [user , setUser] = useState('')
  useEffect(
    ()=>{
      fetch('http://localhost:7979/users')
      .then(res => res.json())
      .then(data => setUser(data))
    },[])
  return (
    <div className="text-white text-center bg-[url('https://img.freepik.com/free-vector/gradient-hexagonal-background_23-2148944164.jpg?w=826&t=st=1683353679~exp=1683354279~hmac=8903a97e334886df4fa95d05ef44e5d52b3cd0e651d636e49df72a7bd6854472')]">
      <h1 className=''> 66 client</h1>

      <div class="flex justify-center items-center h-screen text-center text-white">
        <form class=" shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:shadow-green-500">
          <div class="mb-4">
            <label class="block  font-bold mb-2" for="email">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"  required/>
          </div>
          <div class="mb-6">
            <label class="block  font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"  />
          </div>
          <div class="flex items-center justify-center">
            <button class="btn hover:bg-green-500" type="button">
              Sign In
            </button>
          </div>
          <div>
        {
          <h2 className='text-yellow-300'>
           there are  {user.length} users
          </h2>
        }
      </div>
        </form>
      </div>
      

    </div>
  );
};

export default App;