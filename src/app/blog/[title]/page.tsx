import { client } from "@/sanity/lib/client";
import Image from "next/image";


interface IPost {
  title: string;
  summary: string;
  image: string;
  author: string;
  _id: string;
}

export default async function Blog({ params }: { params: Promise<{title:string}> }) {
  // Destructure the title from params
  const { title } = await params;

 // Fetch the blog post based on the title
  const query: IPost = await client.fetch( `*[_type == 'blog' && _id == $zord][0]`, {zord:title})
console.log(query);
 

  return (
    <>
    <div className="container mx-auto p-6 bg-[url(/main5.avif)]">
      <h1 className="text-3xl font-bold mb-4">{query.title}</h1>
      <Image
        src={query.image}
        alt={query.title}
        width={800}
        height={800}
        className="w-full h-[44vh] object-cover rounded-md mb-4"
        priority
        quality={100}
      />
      <p className="text-gray-700 mb-4 text-justify">{query.summary}</p>

      
      
    </div>
    
    <div>
      <h1>{query.title}</h1>
      <p>{query.summary}</p>
    </div>
    </>
  );
}
