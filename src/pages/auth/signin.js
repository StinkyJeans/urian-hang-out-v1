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
                    userImg: user.photoURL,
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
       
        <div
          className="flex justify-center items-center h-screen"
          style={{
            backgroundImage: "url('https://lh5.googleusercontent.com/p/AF1QipM0LECVIjRcny3Lx6Z2W_W_M5eJSY6d5qovXO-L=w1080-k-no')",
            backgroundSize: "100%,100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        <div className="mb-[10%]">
          <img
            src="https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/en/8/87/Father_Saturnino_Urios_University_logo.png&w=640&q=50g"
            alt="urios-logo-image"
            className="md:w-54 md:h-80 hidden md:inline-flex"
          />
        </div>
          <div className="mb-[10%]">
            <div className="flex flex-col items-center">
              <img
                className="w-36 object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gsuite-logo.png/640px-Gsuite-logo.png"
                alt="gsuite-logo-image"
              />
              <p className="text-md italic my-10 text-white">
                This app is created for urians social media
                inspired by twitter
              </p>
              <button
                onClick={onGoogleClick}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign in with GSuite
              </button>
            </div>
          </div>
        </div>
      
      );
    }
