
import './App.css';
import { useState } from 'react';
function App() {

  let [first, setfirst] = useState(0);

  function handleClick() {
   first++;
   setfirst(first);
  }
  return (
    <>
    
    <div className='bg-gray-500 h-[100vh] p-[15rem]'>
    {first%2 === 0 ?
      <div className="flex flex-col w-56 h-56 bg-red-700 rounded-sm shadow-2xl mx-auto items-center gap-y-10 ">
      <p className='text-green-400 mx-auto pt-5 text-2xl font-bold '>Count</p>
       <p className='text-3xl' >{first}</p>
       <button className='bg-black text-white p-2 rounded-md border-red-800 border-4' onClick={handleClick}>click</button>
     </div>
    :

   
      <div className="flex flex-col w-56 h-56 bg-green-400 rounded-sm shadow-2xl mx-auto items-center gap-y-10 ">
      <p className='text-red-700 mx-auto pt-5 text-2xl font-bold '>Count</p>
       <p className='text-3xl' >{first}</p>
       <button className='bg-black text-white p-2 rounded-md border-green-300 border-4' onClick={handleClick}>click</button>
     </div>
    
}
    </div>
    </>
  );
}

export default App;
