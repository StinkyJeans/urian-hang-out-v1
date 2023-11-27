import { PhotographIcon, XIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { userState } from "../atom/userAtom";
import { useRecoilState } from "recoil";
import { signOut, getAuth } from "firebase/auth";

export default function Input() {
  const [input, setInput] = useState("");
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);
  const auth = getAuth();
  
  const sendPost = async  ()=> {
    if(loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "Userposts"),{
      id: currentUser?.uid,
      text: input,
      userImg: currentUser?.userImg,
      timestamp: serverTimestamp(),
      name: currentUser?.name,
      username: currentUser?.username,
    
    });
    const imageRef = ref(storage, `userposts/${docRef.id}/image`);
    if(selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async()=> {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "userpost", docRef.id), {
          image: downloadUrl,
        });
      })
    }
    setInput("");
    setSelectedFile(null);
    setLoading(false);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      }
      reader.onload = (readerEvent) => {
        setSelectedFile(readerEvent.target.result);
      };
  };
 
  return (
    <>
    {currentUser && (
         <div className="flex border-b border-gray-200 p-3 space-x-3">
         <img src={currentUser.userImg} alt="user-image"
         className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
         <div className="w-full divide-y divide-gray-200">
             <div className="">
             <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 " rows="2" placeholder="what's on your mind?">
             </textarea>
             </div>
             <div className="flex items-center justify-between pt-2.5">
              {!loading && (
                <>
                <div className="flex ">
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/> 
                 </div>
                 <button  disabled={!input.trim()} className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50 ">Post</button>

                </>
              )}
                 
             </div>
             
         </div>
     </div>
    )}
    </>
  );
}