import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReportPost from "../components/ReportPost";

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const HomePage: NextPage = () => {

  async function fetchEntries() {
    const entries = await client.getEntries({
      content_type: 'fishingReport'
    })
    console.log(entries.items)
    if (entries.items) return entries.items
    console.log(`Error getting Entries`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
      console.log(posts);
    }
    getPosts()
  }, [])

  return (
    
    <>
    <Header/>
    
      <Head>
        <title>Next.js + Contentful</title>
       
      </Head>
      {posts.length > 0
        ? posts.map((p) => (
            <ReportPost
              description={p.fields.description}
              name={p.fields.name}
              url={p.fields.photo.fields.file.url}
            />
          ))
        : null}

    <Footer/>
    </>
  )
}

export default HomePage