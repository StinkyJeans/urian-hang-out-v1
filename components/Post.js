import {ChatIcon, ThumbUpIcon, TrashIcon } from "@heroicons/react/outline";
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import Moment from "react-moment";
import { db, storage } from "../firebase";
import { useEffect, useState } from "react";
import { deleteObject, ref } from "firebase/storage";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";
import { useRouter } from "next/router";
import { userState } from "../atom/userAtom";


export default function Post({post,id}) {
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [currentUser] = useRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"), (snapshot) => setLikes(snapshot.docs)
    );
  }, [db])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "comments"), (snapshot) => setComments(snapshot.docs)
    );
  }, [db])



  useEffect(()=> {
    setHasLiked(likes.findIndex((like)=>like.id === currentUser?.uid)!== -1);
  },[likes, currentUser])


  async function likePost(){
    if(currentUser){

      if(hasLiked){
        await deleteDoc(doc(db, "posts", id, "likes", currentUser?.uid ))
      } else {
      await setDoc(doc(db, "posts", id, "likes", currentUser?.uid ), {
        username: currentUser?.username
      })
     }
    }else {
      // signIn();

      router.push("/auth/signin")
    }
  }

  async function deletePost(){
    if(window.confirm("Are you sure you want to delete this post?")){

      deleteDoc(doc(db, "posts", id))
      if(post.data().image){

        deleteObject(ref(storage, `posts/${id}/image`))
      }
      router.push("/")
    } 
  }

  return (
    
    <div className="flex p-3 cursor-pointer border-b border-gray-200 ">
        {/* user image */}
        <img className="h-11 w-11 rounded-full mr-4" src={post?.data()?.userImg} alt="user-image"/>
        {/* right side */}
        <div className="flex-1">
        {/* Header */}

        <div className="flex items-center justify-between">
            {/* post user info */}
            <div className="flex flex-col sm:flex-row items-center space-x-1 whitespace-nowrap" >
                <h4 className="font-bold text-xs sm:text-xs md:text-sm lg:text-[16px] xl:text-[15px] hover:underline">{post?.data()?.name}</h4>
                <span className="text-xs sm:text-[15px] text-gray-600">- 
                <Moment fromNow>
                 {post?.data()?.timestamp?.toDate()}
                </Moment>
                </span>
               
            </div>

        </div>
        {/* post text */}
        <p onClick={()=> router.push (`/posts/${id}` )} className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post?.data()?.text}</p>

        {/* post image */}

        

        <img onClick={()=> router.push (`/posts/${id}` )} className='rounded-2xl mr-2'src={post?.data()?.image} alt=""/>



        {/* icons */} 
        <div className="flex justify-between text-gray-500 p-2">
        <div className="flex items-center">
            {hasLiked ? (
              <ThumbUpIcon onClick={likePost} className="h-9 w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
            ): (
              <ThumbUpIcon onClick={likePost} className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
            )}
            {
              likes.length > 0 && (
                <span className={`${hasLiked && "text-sky-500"} text-sm select-none`}>{likes.length}</span>
              )
            }     
            </div>
          <div className="flex items-center select-none">
            
            <ChatIcon onClick={()=> {
              if(!currentUser ){
                // signIn();
                router.push("/auth/signin");
              } else {
                setPostId(id);
              setOpen(!open);
              }
              
            }} className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
            {comments.length > 0 && (
              <span className="text-sm">{comments.length}</span>
            )}
          </div>
          
            {currentUser?.uid == post?.data()?.id && 

            <TrashIcon onClick={deletePost} className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
            }
            
           
        </div>

        </div>

    </div>
  )
}