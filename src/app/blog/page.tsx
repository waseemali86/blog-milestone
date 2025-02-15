import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";


interface IPost {
  title: string;
  summary: string;
  image: string;
  author: string;
  _id : string;
}
async function Blogs() {
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
    <div className="max-w-[1450px] mx-auto">
      <section >
      <div className="max-w-[1450px] mx-auto w-[100%] flex flex-col justify-center my-14 py-3]">
        <div className="text-center px-5">
          <h1 className="text-3xl md:text-4xl font-bold ">Latest Blog’s</h1>
        </div>
        <div className="text-center md:px-20">
          <h1 className="md:text-2xl text-center font-medium text-sm">
            Discover the world through captivating stories and vivid imagery.
            Our blog brings you closer to iconic landmarks, hidden gems, and
            breathtaking landscapes from around the globe. From the enchanting
            forests to the mesmerizing auroras, we invite you to explore and
            experience the magic of our world’s wonders. Join us on this journey
            and let your imagination soar!
          </h1>
        </div>
    </div>
      </section>
      <section className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 sm:space-x-10">
        {posts.map((post) => (
           <div key={post.title} className="my-5">
                    <Link href={`/blog/${post._id}`}>
                      <div className="w-[90%] mx-auto rounded-md transition-all hover:scale-105 duration-200">
                        <Image
                          src={urlFor(post.image).url()}
                          alt="post.title"
                          width={200}
                          height={200}
                          className="size-[350px] rounded-2xl cursor-pointer"
                        />
                        <div>
                          <h2 className="font-bold text-2xl ">{post.title}</h2>
                          <p className="text-md pt-1">{post.summary}</p>
                            <Link href={`/blog/${post._id}`} className="text-md pt-3 underline text-blue-600 hover:text-blue-800">Read More</Link>
                        </div>
                      </div>
                    </Link>
                </div>
        ))}
      </section>
    </div>
  );
}

export default Blogs;



