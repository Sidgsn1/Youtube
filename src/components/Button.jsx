import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className={`px-4 py-1 text-sm rounded-lg  font-bold tracking-wide border border-black/20 cursor-pointer ${name==='All'?"bg-white text-black":"bg-zinc-800 text-white"}`}>{name}</button>
    </div>
  )
}

export default Button