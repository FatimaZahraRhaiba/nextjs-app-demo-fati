import Link from "next/link"


export default function ArticlesPage(){
    return (
        <div>
            <h2>Articles page </h2>  

            <Link href="/posts">
                <button className="text-white bg-blue-700 rounded mr-2 p-3">Take me to the posts page</button>
            </Link>        
        </div>
    )
}