import { useRouter } from 'next/router';
import { useState } from 'react';

const DropdownButton = () => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navigateToUser1 = () => {
    router.push('/User/MessageUsers/User1');
  };

  const navigateToUser2 = () => {
    router.push('/User/MessageUsers/User2');
  };

  const navigateToUser3 = () => {
    router.push('/User/MessageUsers/User3');
  };

  return (
    <div className="hidden lg:block sticky top-0 ml-0 lg:ml-10 rounded-full mr-5 lg:mr-0">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
        onClick={toggleDropdown}
      >
        Messages
      </button>
      <div
        className={`${
          isDropdownOpen ? '' : 'hidden'
        } absolute z-10 mt-2 bg-white rounded-md shadow-lg`}
      >
        <ul className="py-1">
          <li onClick={navigateToUser1}>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:text-black "
            >
              <div className='border-b cursor-pointer'>
                <div className='mx-1 py-2  flex mt-2 items-center'>
                  <img
                    className='h-7 w-7 rounded-full mr-4 ml-1 '
                    src="https://diffusionart.co/wp-content/uploads/2023/04/Lofi-Music-Anime-Graphics-Wallpapers9.png"
                    alt="Profile Image"
                  />
                  <h2 className='text-xs  truncate'>CHARLES DAVE PAJARILLO</h2>
                </div>
              </div>
            </a>
          </li>
          <li onClick={navigateToUser2}>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:text-black"
            >
              <div className='border-b cursor-pointer'>
                <div className='mx-1 py-2 flex mt-2 items-center'>
                  <img
                    className='h-7 w-7 rounded-full mr-4 ml-1 '
                    src="https://i1.sndcdn.com/avatars-Y0u4BMUXywLPp8eX-EySIVQ-t240x240.jpg"
                    alt="Profile Image"
                  />
                  <h2 className='text-xs truncate'>AMIR DARIUS ESTRELLA</h2>
                </div>
              </div>
            </a>
          </li>
          <li onClick={navigateToUser3}>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              <div className='border-b cursor-pointer'>
                <div className='mx-1 py-2 flex mt-2 items-center'>
                  <img
                    className='h-7 w-7 rounded-full mr-4 ml-1 '
                    src="https://pics.craiyon.com/2023-06-07/bea7f6db2e1f4ad5acad0860f8284b95.webp"
                    alt="Profile Image"
                  />
                  <h2 className='text-xs truncate'>ALLAN RUBILLA</h2>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownButton;
