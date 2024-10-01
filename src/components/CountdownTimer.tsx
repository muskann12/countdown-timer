'use client';
import React, { useState, useEffect } from "react"


const  CountdownTimer: React.FC = () => {
 const [time, setTime] = useState (0);
 const [isRunning, setIsRunning] = useState (false); 
 const [remainingTime , setRemainingTime] = useState(0);



 useEffect (() => {
     let timer: NodeJS.Timeout;
     if (isRunning && remainingTime > 0){
        timer =setInterval(() =>{
            setRemainingTime((prev) => prev - 1)
            
        } ,1000)
     }

     else if (remainingTime === 0) {
        setIsRunning (false)
     }

     return () => clearInterval(timer);
 } , [isRunning , remainingTime])


 const handleStart = () => {
    if (time > 0) {
        setRemainingTime(time)
        setIsRunning(true)
    }
 }

 const handlePause = () => {
    setIsRunning (false)


 }


 const handleReset = () => {
    setIsRunning (false);
    setRemainingTime (0);
    setTime (0);
 }


 return (

    <div className="bg-gray-700 font-thin">
      <h1 className="text-2xl font-medium px-5 mx-4 py-1 m hover:text-gray-400">Muskan_Nisar</h1>

<div className="flex flex-col min-h-screen items-center justify-center
    bg-gradient-to-br from-black to bg-gray-700">

        <h1 className="text-4x1 font-extrabold uppercase text-gray-400 mb-6 text-4xl hover:text-black"> Countdown Timer

        </h1>

        <input type='number'
        className="border-4  border-gray-500 bg-transparent p-4
        mb-6 text-gray-300  text-xl rounded"
        placeholder="Enter here"
        value={time > 0 ? time : ""}
        onChange={(e) => setTime (Number(e.target.value))} />

        <div className=" text-gray-200 font-normal text-xl">
            { remainingTime} seconds remaining 
        </div>

        <div className="flex space-x-4"> {/* Add space-x-4 for spacing */}
    <button
        onClick={handleStart}
        className="text-gray-300 px-16 py-4 rounded-lg font-bold bg-gradient-to-r from-slate-500 to-gray-700 hover:text-black"
    > 
        Start
    </button>

    <button
        onClick={handlePause}
        className="text-gray-300 px-16 py-4 rounded-lg font-bold bg-gradient-to-r from-slate-500 to-gray-700 hover:text-black"
    > 
        Pause
    </button>

    <button
        onClick={handleReset}
        className="text-gray-300 px-16 py-4 rounded-lg font-bold bg-gradient-to-r from-slate-500 to-gray-700 hover:text-black"
    > 
        Reset
    </button>
</div>

</div>
</div>

 )

 




 
}

export default CountdownTimer