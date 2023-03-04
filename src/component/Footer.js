import React from 'react'
import Globe from '../assest/globe.svg';
const Footer = () => {
    return (
        <div className=' flex justify-center align-middle h-12  text-center mobile:px-12 px-4'>
            
            <div className='tablet:flex w-[50%]  '>
                <h6 className='pt-3 mobile:flex'>2022 Estatery,Inc</h6>
                <div className='tablet:flex w-[70%] pl-3 justify-between hidden'>
               <h6 className='pt-3'>Privacy</h6> 
               <h6 className='pt-3'>Terms</h6> 
               <h6 className='pt-3'>Sitemap</h6> 
               <h6 className='pt-3'>Company Details</h6> 
               <h6 className='pt-3'>Destination</h6> 
                </div>
            </div>
            <div className='hidden tablet:block w-[30%]'></div>
            <div className='flex justify-around w-full tablet:w-[30%] '>
                <img className='w-6' src={Globe} alt="globe" />
                <h6 className='pt-3'>English(IN)</h6>   
                <h6 className='pt-3'>₹ INR</h6>  
                <h6 className='pt-3'>Support and Resources</h6>       
            </div>
      </div>
  )
}

export default Footer