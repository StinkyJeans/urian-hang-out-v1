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
    <div className="flex justify-center mt-20 space-x-4">
        <img src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png" alt="twitter-image-phone" 
        className="object-cover md:w-44 md:h-80 rotate-6 hidden md:inline-flex"
        />
        <div className="">
            
                <div className="flex flex-col items-center ">
                    <img className='w-36 object-cover' src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitter-logo"/>
                    <p className="items-center text-sm italic my-10">This app created for learning purposes</p>
                    <button onClick={onGoogleClick} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with Google</button>
                </div>
            
        </div>
    </div>
  )
}


