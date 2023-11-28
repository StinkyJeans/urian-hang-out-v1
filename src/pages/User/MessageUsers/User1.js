import React from 'react';
import {
  SearchIcon,
  UserCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon
} from "@heroicons/react/outline";
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from "framer-motion";


export default function User1() {
  const router = useRouter();

  const navigateToUser2 = () => {
    router.push('/User/MessageUsers/User2');
  };

  const navigateToUser3 = () => {
    router.push('/User/MessageUsers/User3'); 
  };

  return (
    <div>
      <main className="flex">
        {/* Usersenders */}
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-[26%]  border-l border-r border-gray-200 '>
          <div className="justify-between flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 items-center">
            <h1 className="text-lg sm:text-xl font-bold cursor-pointer ml-2">People</h1>
            <div className="ml-5 w-[80%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50"></div>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
              <UserCircleIcon className="h-5"/>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className='border-b cursor-pointer'>
            <div className='mx-1 py-2 px-4 flex mt-2 items-center'>
              <img
                className='h-11 w-11 rounded-full mr-4 ml-1 '
                src="https://diffusionart.co/wp-content/uploads/2023/04/Lofi-Music-Anime-Graphics-Wallpapers9.png"
                alt="Profile Image"
              />
              <h2 className='text-xs w-14 truncate'>CHARLES DAVE PAJARILLO</h2>
            </div>
          </div>
          <div onClick={navigateToUser2} className='border-b cursor-pointer'>
            <div className='mx-1 py-2 px-4 flex mt-2 items-center'>
              <img
                className='h-11 w-11 rounded-full mr-4 ml-1 '
                src="https://i1.sndcdn.com/avatars-Y0u4BMUXywLPp8eX-EySIVQ-t240x240.jpg"
                alt="Profile Image"
              />
              <h2 className='text-xs w-14 truncate'>AMIR DARIUS ESTRELLA</h2>
            </div>
          </div>
          <div onClick={navigateToUser3} className='border-b cursor-pointer'>
            <div className='mx-1 py-2 px-4 flex mt-2 items-center'>
              <img
                className='h-11 w-11 rounded-full mr-4 ml-1 '
                src="https://pics.craiyon.com/2023-06-07/bea7f6db2e1f4ad5acad0860f8284b95.webp"
                alt="Profile Image"
              />
              <h2 className='text-xs w-14 truncate'>ALLAN RUBILLA</h2>
            </div>
          </div>
        </div>
        {/* Messages */}
        
        <div className="xl:ml-[39%] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
          <div className="justify-between flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 items-center">
            <div className='hoverEffect' onClick={() => router.push("/")}>
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
            <div></div>
          </div>
          <div className='flex mt-2 items-center font-bold border-b-2'>
            <img
              className='h-11 w-11 rounded-full mr-4 ml-10'
              src="https://diffusionart.co/wp-content/uploads/2023/04/Lofi-Music-Anime-Graphics-Wallpapers9.png"
              alt="Profile Image"
            />
            <h2>CHARLES DAVE PAJARILLO</h2>
          </div>
          {/* Message Content */}
          
          <div className=''>
            <div className='ml-10 mt-2'>
              <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Aha naka Noc?</p>
              <p className='text-sm text-gray-500 ml-4'>- 20 minutes ago</p>
            </div>
            <div className='ml-80 mt-2'>
              <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Padung nako diha</p>
              <p className='text-sm text-gray-500 ml-4'>- 18 minutes ago</p>
            </div>
            <div className='ml-10 mt-2'>
              <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Gege naarami office</p>
              <p className='text-sm text-gray-500 ml-4'>- 12 minutes ago</p>
            </div>
            <div className='ml-80 mt-2'>
              <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Gege padung nako</p>
              <p className='text-sm text-gray-500 ml-4'>- 10 minutes ago</p>
            </div>
            <div className='ml-10 mt-2'>
              <p className='inline-block bg-gray-400 text-white px-4 py-1 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Gege</p>
              <p className='text-sm text-gray-500 ml-4'>- 4 minutes ago</p>
            </div>
          </div>
          
          {/* Message Input */}
          <div className='border-b-4'>
            <div className="mt-2 flex items-center p-3 rounded-full bg-red-300 relative">
              <ArrowRightIcon className="h-5 z-50 text-gray-500"/>
              <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Write message here"/>
            </div>
          </div>
        </div>
      </main>
    </div>
    
  );
}
