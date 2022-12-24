import React from 'react';
import {useRouter} from 'next/router';

function Banner() {
 
   const router = useRouter ()

  return (
    <div className="m-auto max-w-6xl pt-12 sm: px-16  items-center ">
       <div className=" flex flex-col md:flex-row">
        <div class="md:w-1/2 max-w-md flex flex-col justify-center">
            <div className="max-w-md mt-10 text-4xl font-bold text-center md:text-3xl md:text-left">
                The Easiest way to store luggage anywhere
            </div>
            <div className="text-xl mt-10 text-center md:text-left font-poppins">
                Find a luggage storage location near you and book in seconds.Luggege storage near you in over 1,000 Cities.
            </div>
            <div className="my-5 flex justify-center md:justify-start ">
                <div  class="shadow-md mt-5 font-bold py-2 px-4 text-white cursor-pointer md:block bg-amber-600 hover:shadow-xl rounded-full text-lg text-center active:scale-90  transition duration-150 w-36" type="button" onClick= {() =>  router.push('/search')}>Get Started</div> 
            </div>
        </div>
        <div className=" md:w-1/2">
            <img className="w-800 h-800" src="banner-1.svg " alt="banner-1" />
        </div>
        </div>     
   
    </div>
  );
}

  
export default Banner
