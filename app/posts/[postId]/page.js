import PostDatails from "@/app/components/postDetails";
import { Suspense } from "react";
export default async function PostDatailsPage({params}) {

    const postId = params.postId;

    const loadingJsx= (<div><h1 className=" dark:text-black">Loading !!!!!</h1></div>)
    
  return (
    <div>
      <h1 className="text-5xl font-extrabold dark:text-black">Posts Details </h1>

      <Suspense fallback={loadingJsx}>
        <PostDatails postId={postId}/>
      </Suspense>

    </div>
  );
}
