import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
  <div className="max-w-[1450px] mx-auto relative bg-[url('/bg.svg')] bg-cover bg-center h-[70vh] flex items-center justify-center text-center text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center">Welcome to my Blog</h1>
        <p className="text-lg my-5">Discover the latest blog posts, tutorials, and articles.</p>
        <Link href="/Blogs"><button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded text-white font-semibold">Explore Blogs</button></Link>
      </div>
    </div>
    </>
  )
}

export default Hero