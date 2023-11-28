import React from 'react';
import { SearchIcon, UserCircleIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from 'next/router';


export default function Friends() {
  const router = useRouter();
  return (
    <div className='xl:ml-[34%] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl mt-1'>
      <div className="justify-between flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 items-center">
      <div className='hoverEffect' onClick={() => router.push("/")}>
              <ArrowLeftIcon className='h-5'/>
            </div>
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Friends</h2>
            <div className="ml-5 w-[80%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full bg-red-300 relative">
                <SearchIcon className="h-5 z-50 text-gray-500"/>
            <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search Urians"/>
            </div>
            </div>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <UserCircleIcon className="h-5"/>
            </div>
        </div>

      <div className='mt-5 space-y-5 border-b-2 cursor-pointer'>
        <FriendItem
          imageUrl="https://pics.craiyon.com/2023-06-07/bea7f6db2e1f4ad5acad0860f8284b95.webp"
          name="ALLAN RUBILLA"
          daysAgo="2 days ago"
        />
        <FriendItem
          imageUrl="https://diffusionart.co/wp-content/uploads/2023/04/Lofi-Music-Anime-Graphics-Wallpapers9.png"
          name="CHARLES DAVE PAJARILLO"
          daysAgo="3 days ago"
        />
        <FriendItem
          imageUrl="https://i1.sndcdn.com/avatars-Y0u4BMUXywLPp8eX-EySIVQ-t240x240.jpg"
          name="AMIR DARIUS ESTRELLA"
          daysAgo="5 days ago"
        />
        <FriendItem
          imageUrl="https://i1.sndcdn.com/artworks-000296324580-xkoo49-t240x240.jpg"
          name="EARL CHRISTIAN FAMADOR"
          daysAgo="10 days ago"
        />
      </div>
    </div>
  );
}

const FriendItem = ({ imageUrl, name, daysAgo }) => (
  <div className='flex items-center'>
    <img
      className='h-11 w-11 rounded-full mr-4 ml-4'
      src={imageUrl}
      alt="Profile Image"
    />
    <p className='font-bold hover:underline'>{name}</p>
    <div className='ml-auto mr-7 font-semibold'>
      <h2 className='text-xs space-x-4'>
        Added {daysAgo}
      </h2>
    </div>
  </div>
);
