import { useEffect, useState } from "react"

function App() {
  //characters
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~";

  let chosenCharaters: string = '';


  //length value
  const [pwdLen, setPwdLen] = useState<number>(8);

  //pwd generated
  const [pwdGen, setPwdGen] = useState<string>('password');

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
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="p-8 border shadow-md rounded-xl">
        <div className="border text-center p-4 mb-4 relative">
          <span id="password">{pwdGen}</span>
        </div>

        <form>
          <div className="flex justify-between mb-4">
            <label htmlFor="length">Password Length</label>
            <input type="number" className="border w-[40%] px-2" name="length" value={pwdLen} onChange={(e) => {
              setPwdLen(parseInt(e.target.value));

            }} />
          </div>
          <div className="flex justify-between mb-4">
            <label htmlFor="uppercase">Contain Uppercase Letters</label>
            <input type="checkbox" name="uppercase" checked={upperCheck} onChange={handleUpper} />
          </div>
          <div className="flex justify-between mb-4">
            <label htmlFor="lowercase">Contain Lowercase Letters</label>
            <input type="checkbox" name="lowercase" checked={lowerCheck} onChange={handleLower} />
          </div>
          <div className="flex justify-between mb-4">
            <label htmlFor="numbers">Contain Numbers</label>
            <input type="checkbox" name="numbers" checked={numbersCheck} onChange={handleNumbers} />
          </div>
          <div className="flex justify-between mb-4">
            <label htmlFor="symbols">Contain Symbols</label>
            <input type="checkbox" name="symbols" checked={symbolsCheck} onChange={handleSymbols} />
          </div>
          <button className="border p-4 w-full" type="submit" onClick={handleForm}>Generate Password</button>
        </form>
      </div>
    </div>
  )
}

export default App
