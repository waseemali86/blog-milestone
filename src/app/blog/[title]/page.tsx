import { client } from "@/sanity/lib/client";


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
    <div>
      <h1>{query.title}</h1>
      <p>{query.summary}</p>
    </div>
  );
}
