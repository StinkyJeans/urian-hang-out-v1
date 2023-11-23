import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useRouter} from "next/router";

export default function Signin() {
    const router = useRouter();
    const onGoogleClick = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            const user = auth.currentUser.providerData[0];
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            
            if(!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    username: user.displayName.split(" ").join("").toLocaleLowerCase(),
                    userImg: user.UserImg,
                    uid: user.uid,
                    timestamp: serverTimestamp(),
                });
            }
            router.push("/");
        } catch (error) {
    
            console.log(error);
        }
        
    }
  return (
    <div className="flex justify-center mt-20 space-x-4 mt-[13%]">
        <img src="https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/en/8/87/Father_Saturnino_Urios_University_logo.png&w=640&q=50g" alt="urios-logo-image" 
        className=" md:w-54 md:h-80  hidden md:inline-flex"
        />
        <div className="">
            
                <div className="flex flex-col items-center ">
                    <img className='w-36 object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gsuite-logo.png/640px-Gsuite-logo.png" alt="gsuite-logo-image"/>
                    <p className="items-center text-sm italic my-10">This app is created for urians social media</p>
                    <button onClick={onGoogleClick} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with GSuite</button>
                </div>
            
        </div>
    </div>
  )
}


