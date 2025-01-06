import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image"
import Link from "next/link";

interface IPost {
  title: string;
  summary: string;
  image: string;
  author: string;
  _id : string;
}
async function MoreBlogs() {
  const query = `*[_type == 'blog']{
  title,
  summary,
  image,
  author,
  _id
  }`;

  const posts:IPost[] = await client.fetch(query);
  console.log(posts);


  return (
    <>
<div className="max-w-[1450px] mx-auto bg-gray-100 py-10">
  <div className="px-5">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Featured Posts</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-10">
        {posts.map((post) => (
           <div key={post.title} className="my-5">
                    <Link href={`/blog/${post._id}`}>
                      <div className="w-[90%] mx-auto pb-4 m-1 rounded-md transition-all hover:scale-105 duration-200">
                        <Image
                          src={urlFor(post.image).url()}
                          alt="post.title"
                          width={200}
                          height={200}
                          className="size-[350px] rounded-2xl cursor-pointer"
                        />
                        <div>
                          <h2 className="font-bold text-2xl px-3">{post.title}</h2>
                          <p className="text-md px-3 pt-1">{post.summary}</p>
                            <Link href={`/blog/${post._id}`} className="text-md px-3 pt-3 underline text-blue-600 hover:text-blue-800">Read More</Link>
                        </div>
                      </div>
                    </Link>
                </div>
        ))}
      </section>
    </div>
  </div>

    
    </>
  )
}

export default MoreBlogs