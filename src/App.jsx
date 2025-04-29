import './App.css'
import Lottery from "./components/Lottery"
import CheckWin from "./components/CheckWin"
import {useState} from 'react';

function App() {
  const [lotNumber , setLotNumber] = useState(0);

  return (
    <>
      <h1 className="text-yellow-200 p-3">Welcome to Lottery Game</h1>
      <Lottery lotNumber = {lotNumber}  setLotNumber = {setLotNumber}/>
      <CheckWin lotNumber = {lotNumber}/>
    </>
  )
}

export default App
