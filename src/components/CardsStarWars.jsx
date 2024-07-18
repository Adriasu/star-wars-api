import React from 'react'

const CardsStarWars = ({photo, name, homeworld, height, mass}) => {
  return (
    <div className='border-[2px] border-black bg-slate-300 rounded-md w-[180px] h-[300px] p-3 flex flex-col justify-center items-center'>
      <h1 className='border-[1px] border-black w-[150px] h-[200px] flex justify-center items-center'>({photo})</h1>
      <h2>{name}</h2>
      <h3 className='text-sm'>Lives in  </h3>
      <div className='flex justify-between w-[150px] text-sm'>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
      </div>
    </div>
  )
}

export default CardsStarWars
