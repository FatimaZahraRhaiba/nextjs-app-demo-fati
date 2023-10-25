export default async function PostDatails({postId}) {

    await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve();
        },1000)
      })

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();

  return (
    <div className="p-2 m-2 bg-slate-400 w-3/5 rounded">
      <h1>{post.title}</h1>  
      <hr />
      <p>{post.body}</p>
    </div>
  );
}
