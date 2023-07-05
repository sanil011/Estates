import React, { useState } from 'react'
import { Button } from "@mui/material";
import Workspace from "../assest/workspace.svg";
import Location from '../assest/location.svg';
import Calender from '../assest/calender.svg';
import Arrow from '../assest/down-arrow.svg';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Wifi from '../assest/wifi.svg'
import Hanger from '../assest/hanger.svg'
import Parking from '../assest/parking.svg'
import Iron from '../assest/iron.svg'
import Heating from '../assest/heat.svg'
import Breakfast from '../assest/breakfast.svg'
import HairDryer from '../assest/hair-dryer.svg'
import WashingMachine from '../assest/washing-machine.svg'
import Footer from './Footer';

const Detail = () => {
    const { filterData } = useSelector((state) => state.filter);
    const detail = filterData[0];
    const [visible, setVisible] = useState(false)
    const [visibleNavbar, setVisibleNavbar] = useState(false)
    const [visibleScroll,setVisibleScroll] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1200 ){
        setVisibleScroll(true)

        setVisible(false)
    } 
    else if (scrolled <= 300){
        setVisible(false)
        setVisibleScroll(false)
        setVisibleNavbar(false)
    }
    else if (scrolled > 50) {
        setVisible(true)
        setVisibleNavbar(true)
        setVisibleScroll(false)
    }
  };
      window.addEventListener('scroll', toggleVisible);

    return (
        <div className='scroll-smooth'>
            <Navbar />
            {visibleNavbar  && <div className='fixed z-20 transition-all bg-white w-full h-[3.5em] top-0'>
                <div className='flex  justify-between mx-4 pt-4'>
                <h1>Photos</h1>
                <h1>Amenities</h1>
                <h1>Reviews</h1>
                <h1>Location</h1>
                </div>
                <hr className=' my-4 font-bold w-full' />
            </div>}
            
        <div className='phone:px-4 laptop:px-24 tablet:px-16  desktop:px-36 mobile:px-8  font-[Roboto] relative z-0 text-[#222222]' style={{marginTop:"1em"}}>     
          <div className='mb-4'>
                <h1 className='text-2xl font-bold'>{ detail?.title}</h1>
              <div className='flex w-[20em] justify-between'>
                <p>★  {detail?.rating}</p>
                <p className='underline'>167 reviews</p>
                        <p className='underline'>{detail?.city},{detail?.country}</p>
              </div>
        </div>
          <div className='flex w-full mb-12  '>
              <div className='photo:w-full w-1/2 mr-2 '>  
                   <img className='aspect-[1/.7] rounded-l-lg photo:rounded-lg' src={detail?.photo} alt='phot' />
             </div>
              <div className='photo1:grid  photo:hidden  grid-cols-2 grid-rows-2   w-1/2 gap-4 ml-2'>
              <div className=' object-cover'>
                   <img className='aspect-[1/.7]' src={detail?.photo1}  alt="photo1" />
              </div>
              <div className=' landscape:block object-cover  '>
                   <img className='aspect-[1/.7] rounded-r-lg  ' src={detail?.photo2} alt='art'/>     
              </div>      
              <div className=' object-cover  landscape:block '>
                   <img className='aspect-[1/.7]' src={detail?.photo3} alt='art'/>     
              </div>      
              <div className='  object-cover  landscape:block  '>
                   <img className='aspect-[1/.7] rounded-r-lg' src={detail?.photo4} alt='art'/>     
             </div> 
            </div>          
          </div>  
          <div className=' phone:w-full w-[60%] '>
          <div className='flex  justify-between'>
              <div className='w-[70%]'>
              <h4 className='text-xl font-bold '>{detail?.type} by daleep</h4>
              <div className='flex w-[12em] pt-2 justify-between'>
                  <p>{detail?.maxGuests} guest</p>
                  <p>{ detail?.beds} bed</p>
              </div>
              </div>
              <div className='w-[3.8em]'>
                <img className='rounded-full w-[100%] aspect-square object-cover' src='https://a0.muscache.com/im/pictures/user/d87628a6-3c1a-4e2e-a4ae-7743ab5f6ece.jpg?im_w=240' alt='owner-phot'/>        
              </div> 
            </div>
                  <hr className=' my-4 font-bold w-full' />
          </div>

          {/* details about property */}
          <div className='w-full mobile:w-[60%]  my-8 '>
              <div className='flex py-4'>
                  <div className='mr-4'>
                     <img className='w-8' src={Workspace} alt="workspace-icon"/>
                  </div>
                  <div>
                     <p className='text-lg font-bold'>Dedicated Workspace</p>
                     <p>A Common area with wifi that's well suited for working. </p>
                  </div>
              </div>
              <div className='flex py-4'>
                  <div className='mr-4'>
                     <img className='w-8' src={Location} alt="workspace-icon"/>
                  </div>
                  <div>
                     <p className='text-lg font-bold'>Great location</p>
                     <p>90% of recent guests gave the location a 5-star rating. </p>
                  </div>
              </div>
              <div className='flex py-4'>
                  <div className='mr-4'>
                     <img className='w-8' src={Calender} alt="workspace-icon"/>
                  </div>
                  <div>
                     <p className='text-lg font-bold'>Free cancellation before 5 days.</p>
                  </div>
              </div>
              <hr className=' my-4 font-bold w-full' />
          </div>
     
          {/* next details */}

          <div className='  mobile:w-[60%] my-8'>
              <h3 className='text-4xl font-bold py-4'><span className='text-red-500'>air</span>cover</h3>
              <p className='py-4'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
              <p className='font-bold underline py-4'>Learn more</p>
              <hr className=' my-4 font-bold w-full' />
          </div>
          <div className=' mobile:w-[60%]  my-8 tracking-wide'>
              <h3 className='text-base py-4'>★A stay straight out of the pages of a Ruskin Bond novel. </h3>
              <p className='py-4'>One of the most successful Airbnbs in India</p>
              <p className='font-bold underline py-4'>Show more</p>
              <hr className=' my-4 font-bold w-full' />
         </div>
                {/*Amenities  */}
                <div>
                    <h1>Amenities</h1>
                    <div className='flex mobile:my-4  mobile:w-1/2 justify-between'>
                        <div className=''>
                        <p className='flex mobile:my-3 py-2 text-center'><img className='w-8 pr-2' src={Parking} alt="Amenities"/> Parking</p>
                        <p className='flex mobile:my-3 py-2 text-center'><img className='w-8 pr-2' src={WashingMachine} alt="Amenities"/>WashingMachine </p>
                        <p className='flex mobile:my-3 py-2 text-center'><img className='w-8 pr-2' src={Iron} alt="Amenities"/>Iron </p>
                        <p className='flex mobile:my-3 py-2 text-center'><img className='w-8 pr-2' src={Wifi} alt="Amenities"/>Wifi </p>
                        </div>
                        <div className=''>
                        <p className='flex mobile:my-3 py-2 text-center'><img className='w-8 pr-2' src={Breakfast} alt="Amenities"/>Breakfast </p>
                        <p className='flex mobile:my-3 py-2 text-center'><img className='w-8 pr-2' src={HairDryer} alt="Amenities"/> HairDryer</p>
                        <p className='flex mobile:my-3 py-2 text-center'><img className='w-8 pr-2' src={Heating} alt="Amenities"/>Heating </p>
                        <p className='flex mobile:my-3 py-2 text-center'><img className='w-8 pr-2' src={Hanger} alt="Amenities"/> Hanger</p>
                        </div>
                    </div>
                    <hr className=' my-4 font-bold w-1/2' />
                </div>

                {/*Review  */}
                 <p className='py-8'>★ 4.91 (167 reviews)</p>
                <div className='flex mb-8'>
                    
                    <div className='w-1/2 mobile:mr-16 mr-3'>
                        <div className='flex justify-between pb-3'>
                            <p>Cleanliness</p>
                            <div className='w-40 flex align-center'>
                                <div className='w-[90%] h-1 mt-3 mr-2 bg-black' />
                                <p>4.9</p>
                            </div>  
                        </div>
                        <div className='flex justify-between pb-3'>
                            <p>Communication</p>
                            <div className='w-40 flex align-center'>
                                <div className='w-[90%] h-1 mt-3 mr-2 bg-black' />
                                <p>4.9</p>
                            </div>  
                       </div>
                       <div className='flex justify-between pb-3'>
                            <p>Check-in</p>
                            <div className='w-40 flex align-center'>
                                <div className='w-[90%] h-1 mt-3 mr-2 bg-black' />
                                <p>4.9</p>
                            </div>  
                       </div>
                    </div>

                     <div className='w-1/2 mobile:ml-16 ml-3'>
                        <div className='flex justify-between pb-3'>
                            <p>Accuracy</p>
                            <div className='w-40 flex align-center'>
                                <div className='w-[90%] h-1 mt-3 mr-2 bg-black' />
                                <p>4.9</p>
                            </div>  
                        </div>
                        <div className='flex justify-between pb-3'>
                            <p>Location</p>
                            <div className='w-40 flex align-center'>
                                <div className='w-[90%] h-1 mt-3 mr-2 bg-black' />
                                <p>4.9</p>
                            </div>  
                       </div>
                       <div className='flex justify-between pb-3'>
                            <p>Value</p>
                            <div className='w-40 flex align-center'>
                                <div className='w-[90%] h-1 mt-3 mr-2 bg-black' />
                                <p>4.9</p>
                            </div>  
                       </div>
                    </div>
                </div>   
            </div>
            <hr className="w-full  text-black"/>
            <Footer/>
            {/* billing card */}
      <div className={`w-[30%] ${visible ?'fixed top-[10em]':visibleScroll ? "absolute top-[150vh]" : "absolute top-[88.6vh]"} hidden  mobile:block z-10 desktop:right-36 right-8 tablet:right-20 shadow-xl bg-white border-2 p-4  rounded-lg`}>
              <div className='flex justify-between py-2 '>
                  <p>₹5999 night</p>
                  <p>★{detail?.rating} ·<span className='underline opacity-75'>167 reviews</span></p>
              </div>
              <div className='py-2'>
                 <div className='flex '>
                    <table className=' w-1/2 border-2'>
                      <tr className='flex flex-col p-2 '>    
                       <th className='text-start'>CHECK IN</th>
                       <td className=''>11/8/2022</td> 
                      </tr>
                    </table>
                    <table className='w-1/2 border-2 '>
                      <tr className='flex flex-col p-2'>
                      <th className='text-start'>CHECK OUT</th>  
                      <td className=''>11/9/2022</td>  
                      </tr>
                    </table>
                </div>
                 <table className='w-full border-2 '>
                  <tr className='flex justify-between p-2'>
                    <th className='text-start'>Guest</th>  
                    <td className='w-6'><img src={Arrow} alt='arrow'/>  </td>  
                  </tr>
                </table>
              </div>
                {/* <button className=' my-2  text-xl w-full text-white py-3 rounded-lg'>Reserve</button> */}
                <Button
                    variant={"contained"}
                    mt={2}
                    sx={{ padding: ".5em 1em", borderRadius: "10px", fontSize: "17px" }}
                    fullWidth
                >
                    Reserve
                </Button>
              <p className='text-center py-2'>You won't be charged yet</p>
              <div className='py-2'>
                  <div className='flex justify-between py-2'>
                      <p className='underline'>₹5999 * 5 night</p>
                      <p>₹29,995</p>
                  </div>
                  <div className='flex justify-between py-2'>
                      <p className='underline'>service fee</p>
                      <p>₹4,235</p>
                  </div>
              </div>
              <hr className=' my-4 font-bold w-full ' />
              <div className='flex justify-between'>
                  <p className='font-bold text-lg'>Total before taxes</p>
                  <p>₹34,230</p>
              </div>
            </div>
            </div>
  )
}

export default Detail