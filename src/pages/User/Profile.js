
import { useRouter } from 'next/router';
import { SearchIcon} from "@heroicons/react/outline";

import {
  UserCircleIcon
} from "@heroicons/react/outline";
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { userState } from '../../../atom/userAtom';
import Sidebar from "../../../components/Sidebar";
import UserPost from "../../../components/UserPost";
import UserPostId from "../../../components/UserPostId";



const ProfilePage = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  console.log(currentUser);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUser = async () => {
          const docRef = doc(db, "Userposts", auth.currentUser.providerData[0].uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
          }
        };
        fetchUser();
      }
    });
  }, []);

  const handleHomeClick = () => {
    if (router.pathname !== '/') {
      router.push('/User/Profile');
    }
  };
  const ProfilePage = () => {
    // Assuming you have the userId of the current user
    const userId = currentUser?.uid;
  };
  return (
   
  

      <div className="">
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-[16.1%]">
          <Sidebar/>
        </div>
        <div className=' xl:ml-[39%] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl mt-1'>
        <div className="justify-between flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
          <h2 onClick={handleHomeClick} className="text-lg sm:text-xl font-bold cursor-pointer">Profile</h2>
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

        {/* User Profile Section */}
        <div className="mt-4 p-4 rounded-md shadow-md " 
        style={{
          backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/600/919/630/digital-art-illustration-lofi-hd-wallpaper-preview.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          }}>

          {/* Add more user details as needed */}
          <div className="cursor-pointer flex items-center ">
          <div className='mt-[25%]  '>
            <div>
            <img className="h-11 w-11 rounded-full mr-4" src={currentUser?.userImg} alt="user-image"/>
            
            </div>
            
          </div>

            <div className='mt-[25%] ' >
              <h3 className="font-bold">{currentUser?.name}</h3>
              <p className="text-gray-400">@{currentUser?.username}</p>
              
            </div>
            {/* <div className="mt-[25%] ml-auto">
            <button className='bg-sky-600 rounded-full mt-2 p-2 rounded-md'>Add Friend</button>
            </div> */}
          </div>
        </div>
        

        {/* Additional Content */}
        <div className="mt-4 p-4 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Your Posts</h2>
          <UserPost/>
        </div>
          {/* <UserPostId/> */}
      </div>
      </div>
     
  );
};

export default ProfilePage;