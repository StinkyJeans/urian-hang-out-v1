import { useRecoilState } from "recoil"
import {modalState, postIdState} from "../atom/modalAtom"
import { useRouter } from "next/router";
import Modal from'react-modal';
import {XIcon } from "@heroicons/react/outline";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { addDoc, collection, doc, onSnapshot, serverTimestamp } from "firebase/firestore";
import Moment from "react-moment";
import { userState } from "../atom/userAtom";


export default function CommentModal() {
    const [ open, setOpen] = useRecoilState(modalState);
    const [postId]= useRecoilState(postIdState);
    const [currentUser] = useRecoilState(userState);
    const [post, setPost] = useState({});
    const [input, setInput] = useState("");
    const router = useRouter();

    useEffect(() => {
            onSnapshot(doc(db, "posts", postId), (snapshot) => {
                setPost(snapshot);
            });
        }, [postId, db])

    async function sendComment(){
        await addDoc(collection(db, "posts", postId, "comments"), {
            comment: input,
            name : currentUser?.name,
            username: currentUser?.username,
            userImg: currentUser?.userImg,
            timestamp: serverTimestamp(),
            userId: currentUser?.uid,
        })
        setOpen(false);
        setInput("");
        router.push(`/posts/${postId}`)
    }
  return (
    <div>
        {open && 
        (
            <Modal 
            isOpen={open} 
            onRequestClose={()=>setOpen(false)}
            className="max-w-lg w-[90%]  absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-400 rounded-xl shadow-md">
                <div className="p-1">
                  <div className="border-b border-gray-200 py-2 px-1.5">
                    <div onClick={()=>setOpen(false)} className="hoverEffect w-9 h-9 flex items-center justify-center">
                        <XIcon className="h-[22px] text-gray-700"/>
                    </div>
                  </div>
                    <div className="p-2 flex items-center space-x-1  relative ">
                        {/* <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300"/> */}
                        <img className="h-11 w-11 rounded-full mr-4" src={post.data()?.userImg} alt="user-image"/>
                        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.data()?.name}</h4>
                            <span className="">-</span>
                            <span className="text-sm sm:text-[15px] hover:underline">
                            <Moment fromNow>
                            {post?.data()?.timestamp?.toDate()}
                            </Moment>
                            </span>
                    </div>
                    <p className="border-b-2 text-gray-500 text-[15px] sm:text-[16px] ml-16 mb-2">{post?.data()?.text}</p>
                    <div className="ml-[10%] flex  p-3 space-x-3">
                        <img src={currentUser?.userImg} alt="user-image"
                        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
                        <div className="w-full divide-y divide-gray-200">
                            <div className="">
                                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 " rows="2" placeholder="Write comment"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
             >
                                </textarea>
                                            <button onClick={sendComment} disabled={!input.trim()} className="ml-[70%] bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50 ">Comment</button>
                                      
                            </div>
                         </div>
                    </div>
                </div>
            </Modal>
        )}
    </div>
  )
}
