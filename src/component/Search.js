import React from 'react'
import Searc from '../assest/search.svg';
import { useSelector } from 'react-redux';
const Search = ({  setValue }) => {
  // const { city } = useSelector((state) => state.reducer);
  return (
      <div className='flex w-auto p-2 font-sans-[Mulish] shadow-lg text-base justify-around border-2 rounded-full'>
      <p>{ "India"} </p>
          <div className='border-l-4 p-0'></div>
          <p className='opacity-25'>Add Guests</p>
          <div className='border-l-4 p-0'></div>
          <img onClick={()=>setValue("")} src={Searc} alt='icon'/>
    </div>
  )
}

export default Search