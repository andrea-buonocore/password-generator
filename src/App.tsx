import { useState } from "react"

import { BiCopy } from "react-icons/bi";

function App() {



  //characters
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~";

  let chosenCharaters: string = '';
  let generated: string = '';


  //length value
  const [pwdLen, setPwdLen] = useState<number>(8);

  //pwd generated
  const [pwdGen, setPwdGen] = useState<string>('');

  //upper letters checkbox
  const [upperCheck, setUpperCheck] = useState<boolean>(false);

  //lower letters checkbox
  const [lowerCheck, setLowerCheck] = useState<boolean>(false);

  //numbers checkbox
  const [numbersCheck, setNumbersCheck] = useState<boolean>(false);

  //symbols checkbox
  const [symbolsCheck, setSymbolsCheck] = useState<boolean>(false);

  const handleUpper = () => setUpperCheck(!upperCheck);
  const handleLower = () => setLowerCheck(!lowerCheck);
  const handleNumbers = () => setNumbersCheck(!numbersCheck);
  const handleSymbols = () => setSymbolsCheck(!symbolsCheck);

  const handleForm = (e) => {

    e.preventDefault();

    if (!upperCheck && !lowerCheck && !numbersCheck && !symbolsCheck) {
      alert("Please check at least one checkbox to generate a password.");
      return;
    }
    
    if (upperCheck) chosenCharaters += upperLetters;
    if (lowerCheck) chosenCharaters += lowerLetters;
    if (numbersCheck) chosenCharaters += numbers;
    if (symbolsCheck) chosenCharaters += symbols;

    console.log(chosenCharaters);


    for (let i = 0; i < pwdLen; i++) {
      generated += chosenCharaters.charAt(Math.floor(Math.random() * chosenCharaters.length));
      console.log(generated);
    }

    setPwdGen(generated);


  }

  const handleCopy = async () => {

    if(!pwdGen) alert('No password to copy');
    // Copy the password to the clipboard
    await navigator.clipboard.writeText(pwdGen);
    alert('Copied to clipboard!');
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-slate-900">
      <div className="p-8 shadow-md rounded-xl bg-sky-950">
        <div className="mb-8 flex items-center justify-between bg-slate-300 rounded overflow-hidden">
          <span className="px-4">{pwdGen}</span>
          <div className="bg-yellow-500 p-4">
            <BiCopy size={20} onClick={handleCopy} className="cursor-pointer" />
          </div>
        </div>

        <form>
          <div className="flex justify-between mb-4 items-center">
            <label htmlFor="length" className="text-white p-4 font-thin text-sm">Password Length</label>
            <input type="number" min={8} className="rounded w-[30%] px-2" name="length" value={pwdLen} onChange={(e) => {
              setPwdLen(parseInt(e.target.value));

            }} />
          </div>
          <div className="flex justify-between mb-4 p-4 hover:bg-slate-600 transition-colors">
            <label htmlFor="uppercase" className="text-white font-thin text-sm">Include Uppercase Letters (A-Z)</label>
            <input type="checkbox" name="uppercase" checked={upperCheck} onChange={handleUpper} />
          </div>
          <div className="flex justify-between mb-4 p-4 hover:bg-slate-600 transition-colors">
            <label htmlFor="lowercase" className="text-white font-thin text-sm">Include Lowercase Letters (a-z)</label>
            <input type="checkbox" name="lowercase" checked={lowerCheck} onChange={handleLower} />
          </div>
          <div className="flex justify-between mb-4 p-4 hover:bg-slate-600 transition-colors">
            <label htmlFor="numbers" className="text-white font-thin text-sm">Include Numbers (0-9)</label>
            <input type="checkbox" name="numbers" checked={numbersCheck} onChange={handleNumbers} />
          </div>
          <div className="flex justify-between mb-8 p-4 hover:bg-slate-600 transition-colors">
            <label htmlFor="symbols" className="text-white font-thin text-sm">Include Symbols ($=\!)</label>
            <input type="checkbox" name="symbols" checked={symbolsCheck} onChange={handleSymbols} />
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-400 transition-colors rounded font-semibold p-4 w-full" type="submit" onClick={handleForm}>Generate Password</button>
        </form>
      </div>
    </div>
  )
}

export default App
