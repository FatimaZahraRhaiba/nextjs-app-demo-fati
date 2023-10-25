export const metadata = {
    title: "articles page",
}

export default function({children}){
    return(
        <div>
            <h1>Articles</h1>
            <div className="bg-blue-500 p-5 border-spacing-10 rounded">
                {children}
            </div>
        </div>
    )
}