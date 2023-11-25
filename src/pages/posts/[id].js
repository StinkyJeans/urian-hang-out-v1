import Head from 'next/head'
import Sidebar from '../../../components/Sidebar'
import CommentModal from '../../../components/CommentModal'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Post from '../../../components/Post'
import { db } from '../../../firebase'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Comment from '../../../components/Comment'
import { AnimatePresence, motion } from 'framer-motion'


export default function PostPage() {
    const router = useRouter();
    const {id} = router.query;
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);

    // get the post data
   
  useEffect(() => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)), [db, id]);

    // get comments of the post
    useEffect(() => {onSnapshot(query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")),(snapshot)=>setComments(snapshot.docs))}, [db, id]);


  return (
    <div className=''>
      <Head>
        <title>Post page</title>
        <meta name="description" content="Created with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex min-h-screen max-w-7xl mx-auto pt-1'>

        {/* Sidebar */}

        <Sidebar/>

        {/* Feed */}
        <div className=" xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl ">
        <div className="flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className='hoverEffect' onClick={()=> router.push ("/")}>
                <ArrowLeftIcon className='h-5'/>
            </div>
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Post</h2>
        </div>
        
        <Post id={id} post={post} />
        {comments.length > 0 && (
            <div className=''>
                <AnimatePresence>
                {comments.map((comment)=>(
                  <motion.div key={comment.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
                    <Comment key={comment.id} 
                    commentId={comment.id}
                    originalPostId={id}
                    comment={comment.data()}/>
                  </motion.div>
                ))}
                </AnimatePresence>
            </div>
        )}
    </div>


       

        {/* Modal */}

        <CommentModal/>
      </main>



    </div>
  )
}


//https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  const newsResults = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json').then((res)=>res.json());

  // Who to follow section
  const randomUsersResults = await fetch("https://randomuser.me/api/?results=30&inc=name,login,picture").then((res)=>res.json());
  return {
    props:{
      newsResults,
      randomUsersResults,
    }
  }
}
