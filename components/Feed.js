import { SearchIcon, SparklesIcon, UserCircleIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { AnimatePresence, motion } from "framer-motion";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => onSnapshot
      (query(collection(db, "posts"), orderBy("timestamp", "desc")), (snapshot) => {setPosts(snapshot.docs)}
    ),[])
  return (
    <div className=" xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl ">
        <div className="justify-between flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="ml-5 w-[80%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full bg-red-300 relative">
                <SearchIcon className="h-5 z-50 text-gray-500"/>
            <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search Urians"/>
            </div>
            </div>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <UserCircleIcon className="h-5"/>
            </div>
            
        </div>
        <Input/>
        <AnimatePresence>
        {posts.map((post) => (
          <motion.div key={post.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <Post key={post.id} id={post.id} post={post}/>
          </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
}