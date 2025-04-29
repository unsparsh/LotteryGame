
export default function Lottery( {lotNumber , setLotNumber}){

    const generateNumber = () =>{
        const number = Math.floor(Math.random() * 1000);
        setLotNumber(number);
    }

    return(
        <>
         <div className="bg-slate-900 text-center p-5 m-5 rounded shadow-lg shadow-slate-500">
           <p>Press the Button to generate the Lottery Number</p>
           <button onClick={generateNumber} className='p-5 m-5 border border-white'>Press Me</button>

              <p className="text-2xl text-yellow-200">Your Lottery Number is: <span className="text-red-500 text-5xl">"{lotNumber}"</span></p>
         </div>
        </>
    );
}