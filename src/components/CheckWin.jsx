import { useState } from 'react';

export default function CheckWin({ lotNumber }) {
  const [result, setResult] = useState(null);

  const checkFunction = (number) => {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum === 15;
  };

  const handleCheck = () => {
    const win = checkFunction(lotNumber);
    setResult(win);
  };

  return (
    <>
      <button onClick={handleCheck} className="p-2 m-5 border border-white">
        Check The Result
      </button>

      {result !== null && (
        result ? <p className="text-green-400 text-xl">🎉 You Win!</p> 
               : <p className="text-red-400 text-xl">😞 Try a New Number</p>
      )}
    </>
  );
}
