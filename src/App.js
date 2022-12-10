
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
    
    <div className='bg-white h-[100vh] p-[15rem] mx-auto'>
    {first%2 === 0 ?
      <div className="flex flex-col w-64 h-64 bg-red-600 rounded-3xl shadow-2xl mx-auto items-center gap-y-10 ">
      <p className='text-green-400 mx-auto pt-10 text-2xl font-bold '>Count</p>
       <p className='text-3xl text-white font-serif' >{first}</p>
       <button className='bg-black font-mono text-white p-2 rounded-md border-red-400 border-4' onClick={handleClick}>click</button>
     </div>
    :

   
      <div className="flex flex-col w-64 h-64 bg-green-400 rounded-3xl shadow-2xl mx-auto items-center gap-y-10 ">
      <p className='text-red-700 mx-auto pt-10 text-2xl font-bold  '>Count</p>
       <p className='text-3xl text-white font-serif' >{first}</p>
       <button className='bg-black  font-mono text-white p-2 rounded-md border-green-300 border-4' onClick={handleClick}>click</button>
     </div>
    
}
    </div>
    </>
  );
}

export default App;
