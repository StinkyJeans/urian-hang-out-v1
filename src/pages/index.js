import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import Feed from '../../components/Feed'
import CommentModal from '../../components/CommentModal'


export default function Home({newsResults, randomUsersResults}) {
  return (
    <div className=''>
      <Head>
        <title>Urian Hangout</title>
        <meta name="description" content="Created with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex min-h-screen max-w-7xl mx-auto pt-1 '>
    
        {/* Sidebar */}

        <Sidebar/>

        {/* Feed */}
        <Feed />

       
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
