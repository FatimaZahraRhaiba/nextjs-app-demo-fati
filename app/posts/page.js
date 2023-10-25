import Link from "next/link";
import { Suspense } from "react";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} className="w-1/5">
        <div className=" w-full bg-black p-3 border-collapse mt-5 rounded-xl text-white">
          <h1 className="text-xl font-extrabold text-amber-500">
            {post.title}
          </h1>

          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1 className="text-5xl font-extrabold dark:text-black">Posts Page</h1>

      {/* POSTS render*/}
        <div className="justify-center items-center mx-24">{postsJSX}</div>
    </div>
  );
}
