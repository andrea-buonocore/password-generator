import { useState } from "react"

function App() {

  const length = document.querySelector('input[name="length"]');
  const uppercase = document.querySelector('input[name="uppercase"]');
  const lowercase = document.querySelector('input[name="lowercase"]');
  const number = document.querySelector('input[name="numbers"]');
  const symbol = document.querySelector('input[name="symbols"]');

  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!\"#$%& '()*+,-./:;<=>?@[]\\^_`{|}~";
  
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="p-8 border shadow">
        <div className="border text-center p-4 mb-4 relative">
          <span id="password"></span>
        </div>
        <button className="absolute top-0 right-0">Copy To Clipboard</button>
        <div className="flex justify-between mb-4">
          <label htmlFor="length">Password Length</label>
          <input type="number" name="length" />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="uppercase">Contain Uppercase Letters</label>
          <input type="checkbox" name="uppercase" />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="lowercase">Contain Lowercase Letters</label>
          <input type="checkbox" name="lowercase" />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="numbers">Contain Numbers</label>
          <input type="checkbox" name="numbers" />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="symbols">Contain Symbols</label>
          <input type="checkbox" name="symbols" />
        </div>
        <button className="border w-full p-4">Generate Password </button>

      </div>
    </div>
  )
}

export default App
