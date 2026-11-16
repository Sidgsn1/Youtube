import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const isMenu = useSelector((store) => store.app.isMenuOpen);
  const [text, setText] = useState(0);
  const [isDarkTheme,setIsDarkTheme] = useState(false)

  console.log("Page Rendering")
//heavy operation
//   const nthPrime = ()=>{
//       console.log("Calculating Prime No. for ",text)
//       return findNthPrime(text)
//   }
    const nthPrime = useMemo(()=>findNthPrime(text),[text])
  return (
    <div
      className={`${isMenu ? "ml-52" : ""} ${isDarkTheme?"bg-zinc-900 text-white":"bg-white text-black"} m-4 p-2 w-96 h-96 border border-white`}
    >
      <div>
        <button className={`px-3 py-2 bg-red-500 rounded-xl m-2`} onClick={()=>setIsDarkTheme((prev)=>!prev)}>Change Theme</button>
      </div>
      <div>
        <input
          className="p-4 bg-zinc-800 text-white tracking-widest outline-none rounded-lg"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
            <h1 className="font-bold text-2xl m-4">nth Prime : {nthPrime}</h1>
        </div>
      </div>
      
    </div>
  );
};

export default Demo;
