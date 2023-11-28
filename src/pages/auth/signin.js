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
            backgroundImage: "url('https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/135504952_4024672444242937_7059899376855643437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeHNWUb_kxDjUa_Vbc2T9tlIT0G-_FyWaMpPQb78XJZoynX1xISWGRW5vrVI24JZvfEoLJ1iLYVOU-Qo3iDjI9ud&_nc_ohc=inCUedLc7fIAX9nY6PF&_nc_ht=scontent.fcgy2-1.fna&oh=00_AfDv38xnsdPMdeLn7N9PebCjOl2ayjK47ssoPy9mou14xw&oe=658D2228')",
            backgroundSize: "140%,140%",
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
