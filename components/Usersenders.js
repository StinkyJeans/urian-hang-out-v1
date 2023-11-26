import React from 'react'
import { SearchIcon, UserCircleIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { ArrowLeftIcon } from '@heroicons/react/outline'

export default function Usersenders() {
  return (
    
    <div className='sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-[26%]  border-l border-r border-gray-200 '>
        <div className="justify-between flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 items-center">
            <h1 className="text-lg sm:text-xl font-bold cursor-pointer ml-2">People</h1>
                <div className="ml-5 w-[80%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
                </div>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <UserCircleIcon className="h-5"/>
            </div>
            <div>
            </div>
            <div>
                
            </div>
            
        </div>
        <div className='border-b cursor-pointer'>
                <div className='mx-1 py-2 px-4 flex mt-2 items-center'>
                <img
                    className='h-11 w-11 rounded-full mr-4 ml-1 '
                     src="https://pbs.twimg.com/profile_images/1521288481187586049/v_g3ZXVs_400x400.jpg"
                     alt="Profile Image"
                /> 
                <h2 className='text-xs w-14 truncate'>CHARLES DAVE PAJARILLO</h2>
            </div>
        </div>
        <div className='border-b cursor-pointer'>
                <div className='mx-1 py-2 px-4 flex mt-2 items-center'>
                <img
                    className='h-11 w-11 rounded-full mr-4 ml-1 '
                     src="https://pbs.twimg.com/profile_images/1521288481187586049/v_g3ZXVs_400x400.jpg"
                     alt="Profile Image"
                /> 
                <h2 className='text-xs w-14 truncate'>AMIR DARIUS ESTRELLA</h2>
            </div>
        </div>
        <div className='border-b cursor-pointer'>
                <div className='mx-1 py-2 px-4 flex mt-2 items-center'>
                <img
                    className='h-11 w-11 rounded-full mr-4 ml-1 '
                     src="https://pbs.twimg.com/profile_images/1521288481187586049/v_g3ZXVs_400x400.jpg"
                     alt="Profile Image"
                /> 
                <h2 className='text-xs w-14 truncate'>ALLAN RUBILLA</h2>
            </div>
        </div>
    </div>
   
  )
}
