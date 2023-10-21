import React, { useState } from "react";

const NumberInput = ({ onScroll }) => {
    const [value, setValue] = useState(0)
    const increment= () => {
       setValue(value+1);
    }
    const decrement= () =>{
        if(value > 0){
            setValue(value-1);
        }
    }

    return (
        <div className="pt-20 mx-auto flex justify-between w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 ">

            <h3 className=" text-color5 font-bold">Bedroom</h3>
              <div className=" space-x-4 flex justify-center">
                    <button onClick={decrement} className=" px-3.5 py-0.5  bg-color1 text-white text-2xl hover:opacity-80 font-bold cursor-pointer rounded outline-none focus:outline-none ">-</button>
                    <span className=" font-bold text-lg text-color5 my-auto">{value}</span>
                    <button onClick={increment} className=" px-3 py-1 bg-color1 text-white text-xl  hover:opacity-80 font-bold cursor-pointer rounded outline-none focus:outline-none ">+</button>
              </div>

        </div>
    )
}

export default NumberInput;
