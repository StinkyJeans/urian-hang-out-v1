
import {ChatIcon,ThumbUpIcon,TrashIcon } from "@heroicons/react/outline";
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import Moment from "react-moment";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";
import { useRouter } from "next/router";
import { userState } from "../atom/userAtom";
import { signIn } from "next-auth/react";


export default function Comment({comment, commentId, originalPostId}) {
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [currentUser] = useRecoilState(userState);
  const router = useRouter();
  
  

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", originalPostId, "comments", commentId, "likes"), (snapshot) => setLikes(snapshot.docs)
    );
  }, [db, originalPostId, commentId])

 
  useEffect(()=> {
    setHasLiked(likes.findIndex((like)=>like.id === currentUser?.uid)!== -1);
  },[likes, currentUser])


  async function likeComment(){
    if(currentUser){

      if(hasLiked){
        await deleteDoc(doc(db, "posts", originalPostId, "comments", commentId, "likes", currentUser?.uid ))
      } else {
      await setDoc(doc(db, "posts", originalPostId, "comments", commentId, "likes", currentUser?.uid ), {
        username: currentUser?.username
      })
     }
    }else {
      // signIn()
      router.push("/auth/signin")
    }
  }

  async function deleteComment(){
    if(window.confirm("Are you sure you want to delete this comment?")){

      deleteDoc(doc(db, "posts", originalPostId, "comments", commentId))
    } 
  }

  return (
    <div>
      {/* Single Comment */}
      <div className="flex p-3 cursor-pointer border-b border-gray-200 pl-15">
        {/* user image */}
        <img className="h-11 w-11 rounded-full mr-4" src={comment?.userImg} alt="user-image" />
        {/* right side */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between">
            {/* post user info */}
            <div className="flex flex-col sm:flex-row items-center space-x-1 whitespace-nowrap">
              <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{comment?.name}</h4>
              <span className="text-sm sm:text-[15px] hover:underline">
                -
                <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
              </span>
            </div>
          </div>

          {/* post text */}
          <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{comment?.comment}</p>

          {/* icons */}
          <div className="flex justify-between text-gray-500 p-2">
            <div className="flex items-center">
            {hasLiked ? (
              <ThumbUpIcon onClick={likeComment} className="h-9 w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
              ): (
                <ThumbUpIcon onClick={likeComment} className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                )}
            {
              likes.length > 0 && (
                <span className={`${hasLiked && "text-sky-500"} text-sm select-none`}>{likes.length}</span>
                )
              }
            </div>
          <div className="flex items-center select-none">
            
            <ChatIcon onClick={()=> {
              if(!currentUser){
                signIn();
              } else {
                setPostId(originalPostId);
              setOpen(!open);
              }
              
            }} className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
          </div>
              <div className="flex items-center">    
              {currentUser?.uid == comment?.userId && 
  
              <TrashIcon onClick={deleteComment} className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
              }
              </div> 
        </div>

        </div>

    </div>
    </div>
  )
}