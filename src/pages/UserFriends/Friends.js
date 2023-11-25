import React from 'react'
import Sidebar from '../../../components/Sidebar'
import { SearchIcon} from "@heroicons/react/outline";
import {
  UserCircleIcon
} from "@heroicons/react/outline";

export default function Friends() {
  return (
  <div>
    <div className='mr-1 hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-[16.1%]'>
        <Sidebar/>
        <div>
        <div className=' xl:ml-[74.8%] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl mt-1'>
        <div className="justify-between flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
          <h2  className="text-lg sm:text-xl font-bold cursor-pointer">Friends</h2>
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
        </div>
        </div>
    </div>
  </div>
    
  );
}
