import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  ArrowLeftIcon,
  UserIcon,
  UserCircleIcon
} from "@heroicons/react/outline";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { userState } from "../atom/userAtom";
import { useRouter } from "next/router";


export default function Sidebar() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  console.log(currentUser);
  const auth = getAuth();
  const navigateToProfile = () => {
    router.push('/User/Userprofile');

  };
  const navigateToUserFriends = () => {
    router.push('/UserFriends/Userfriends');

  };
  const handleHomeClick = () => {
      if (router.pathname === '/') {
      window.location.reload();
    } else {
      router.push('/');
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUser = async () => {
          const docRef = doc(db, "users", auth.currentUser.providerData[0].uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
          }
        };
        fetchUser();
      }
    });
  }, []);


  function onSignOut() {
    signOut(auth);
    setCurrentUser(null);
  }
  
  return (
    <div className="hidden sm:hidden lg:block sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-[10%]">
      {/* Urian Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://upload.wikimedia.org/wikipedia/en/8/87/Father_Saturnino_Urios_University_logo.png"
        ></Image>
      </div>

      {/* Menu */}

      <div className="mt-4 mb-2.5 xl:items-start">
        
        {currentUser && (
          <>
            
            <button onClick={handleHomeClick} className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
             <HomeIcon className="h-7 w-7 mr-3" />
            Home
            </button>
            
            <button onClick={navigateToProfile} className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
             <UserCircleIcon className="h-7 w-7 mr-3" />
            Profile
            </button>
            <button onClick={navigateToUserFriends} className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
             <UserIcon className="h-7 w-7 mr-3" />
            Friends
            </button>
            <button onClick={onSignOut} className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3"><ArrowLeftIcon className="h-5 w-5 mr-2" />Sign Out
            </button>
        </>
        )}
      </div>
      
      {/* Button */}

      {currentUser ? (
        <>
          {/* Mini-Profile */}

          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            
            <img
              onClick={onSignOut}
              src={currentUser?.userImg}
              alt="user-img"
              className="h-10 w-10 rounded-full xl:mr-2"
            />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold truncate">{currentUser?.name}</h4>
              <p className="text-gray-500">@{currentUser?.username}</p>
            </div>
  
          </div>
        </>
      ) : (
        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
        >
          Sign in
        </button>
        
      )}
    </div>
  );
}
