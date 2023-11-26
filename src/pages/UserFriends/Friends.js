import React from 'react'
import Sidebar from '../../../components/Sidebar'
import { SearchIcon} from "@heroicons/react/outline";
import {
  UserCircleIcon
} from "@heroicons/react/outline";



export default function Friends() {
  
  return (
    <div className=' xl:ml-[34%] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl mt-1'>
    <div className="justify-between flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 items-center">
      <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Friends</h2>
      <div className="ml-5 w-[80%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search Urians" />
        </div>
      </div>
      <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
        <UserCircleIcon className="h-5" />
      </div>
      </div>
          
          <div className='mt-5 items-center space-y-5 border-b-2 cursor-pointer'>
          <div className='flex items-center'>
            
          <img
             className='h-11 w-11 rounded-full mr-4 ml-10 '
               src="https://pbs.twimg.com/profile_images/1521288481187586049/v_g3ZXVs_400x400.jpg"
            alt="Profile Image"
            /> 
            <p className='font-bold hover:underline'>ALLAN RUBILLA</p>
            <div>
              <h2 className='space-x-4 ml-60'>
                3 days ago
              </h2>
            </div>
            </div>
            <div className='flex items-center'>
          <img
             className='h-11 w-11 rounded-full mr-4 ml-10'
               src="https://diffusionart.co/wp-content/uploads/2023/04/Lofi-Music-Anime-Graphics-Wallpapers9.png"
            alt="Profile Image"
            /> 
            <p className='font-bold hover:underline'>CHARLES DAVE PAJARILLO</p>
            <div>
              <h2 className='space-x-4 ml-40 '>
                3 days ago
              </h2>
            </div>
            </div>
            <div className='flex items-center'>
          <img
             className='h-11 w-11 rounded-full mr-4 ml-10'
               src="https://i1.sndcdn.com/avatars-Y0u4BMUXywLPp8eX-EySIVQ-t240x240.jpg"
            alt="Profile Image"
            /> 
            <p className='font-bold hover:underline'>AMIR DARIUS ESTRELLA</p>
            <div>
              <h2 className='space-x-4 ml-44'>
                3 days ago
              </h2>
            </div>
            </div>
            <div className='flex items-center '>
          <img
             className='h-11 w-11 rounded-full mr-4 ml-10'
               src="https://i1.sndcdn.com/artworks-000296324580-xkoo49-t240x240.jpg"
            alt="Profile Image"
            /> 
            <p className='font-bold hover:underline'>EARL CHRISTIAN FAMADOR</p>
            <div>
              <h2 className='space-x-4 ml-36'>
                3 days ago
              </h2>
            </div>
            </div>
          </div>
         </div>
        
        
  );
}

