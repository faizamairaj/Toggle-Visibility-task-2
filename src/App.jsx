import { useState } from 'react'
import './App.css'
import React from 'react';


function App() {
   const [Visibility , setVisibility] = useState (true);
  return (
    <>
     <h1 className='text-5xl text-white font-bold'>Toggle Visibility</h1>
    <div  className='text-3xl font-bold rounded-md p-5 mt-72'>
      <button className='bg-blue-400 text-white p-3 rounded' onClick={() =>{setVisibility(!Visibility)}}>Toggle</button>
      {Visibility && <h3 className='text-pink-700'>A toggle button is a user interface element that allows users to switch between two states, such as on/off or show/hide.</h3>}
    </div>
    </>
  );
}
export default App;


