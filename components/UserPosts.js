import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { AnimatePresence, motion } from "framer-motion";

export default function UserPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => onSnapshot
      (query(collection(db, "Userposts"), orderBy("timestamp", "desc")), (snapshot) => {setPosts(snapshot.docs)}
    ),[])

    return (
      <div>
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