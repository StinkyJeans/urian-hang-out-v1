import React, { useState } from 'react';
import { SearchIcon, UserCircleIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { ArrowLeftIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';
import Usersenders from '../../../../components/Usersenders';





export default function Messages(){
const router = useRouter();
  return (
    <div>
    {/* users-sender */}
    <Usersenders/>

    {/* Messages */}
    <div className=" xl:ml-[39%] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="justify-between flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 items-center">
            <div className='hoverEffect' onClick={()=> router.push ("/")}>
                <ArrowLeftIcon className='h-5'/>
            </div>
            <h1 className="text-lg sm:text-xl font-bold cursor-pointer">Messages</h1>
            <div className="ml-5 w-[80%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full bg-red-300 relative">
                <SearchIcon className="h-5 z-50 text-gray-500"/>
            <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search Urians"/>
            </div>
            </div>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <UserCircleIcon className="h-5"/>
            </div>
            <div>
            </div>
            
        </div>
             <div className='flex mt-2 items-center font-bold border-b-2'>
                <img
                    className='h-11 w-11 rounded-full mr-4 ml-10 '
                     src="https://pbs.twimg.com/profile_images/1521288481187586049/v_g3ZXVs_400x400.jpg"
                     alt="Profile Image"
                /> 
                <h2>CHARLES DAVE PAJARILLO</h2>
            </div>
            <div className='ml-10'>
            <div className='ml-10 mt-2'>
                <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Aha naka Noc?</p>
                <p className='text-sm text-gray-500 ml-4'>- 2 minutes ago</p> 
            </div>
            <div className='ml-80 mt-2'>
                <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Padung na?</p>
                <p className='text-sm text-gray-500 ml-4'>- 2 minutes ago</p> 
            </div>
            <div className='ml-10 mt-2'>
                <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Gege naa rami dria dapit office?</p>
                <p className='text-sm text-gray-500 ml-4'>- 2 minutes ago</p> 
            </div>
            <div className='ml-80 mt-2'>
                <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Gege padung nako?</p>
                <p className='text-sm text-gray-500 ml-4'>- 2 minutes ago</p> 
            </div>
            <div className='ml-10 mt-2'>
                <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Aha naka di?</p>
                <p className='text-sm text-gray-500 ml-4'>- 2 minutes ago</p> 
            </div>
            </div>
        <div className='border-b-4'>
        <div className="mt-2 flex items-center p-3 rounded-full bg-red-300 relative">
                <ArrowRightIcon className="h-5 z-50 text-gray-500"/>
            <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Write message here"/>
            </div>
        </div>
    </div>
    <div>
        
    </div>
    </div>

  );
};

