import { useState } from 'react';
import './App.css';
import React from 'react';

function App() {
  const [Visibility, setVisibility] = useState(true);
  return (
    <>
      <h1 className="text-5xl text-white font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl">
        Toggle Visibility
      </h1>
      <div className="text-3xl font-bold rounded-md p-5 mt-20 sm:mt-10 md:mt-15 lg:mt-20 xl:mt-28">
        <button
          className="bg-blue-400 text-white p-3 rounded sm:text-sm md:text-base lg:text-lg xl:text-xl"
          onClick={() => {
            setVisibility(!Visibility);
          }}
        >
          Toggle
        </button>
        {Visibility && (
          <h3 className="text-pink-700 mt-5 sm:text-sm md:text-base lg:text-lg xl:text-xl">
            A toggle button is a user interface element that allows users to switch between two states, such as on/off or show/hide.
          </h3>
        )}
      </div>
    </>
  );
}

export default App;
