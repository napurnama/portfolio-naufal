import Layout from "pages/layout/layout"
import { useRouter } from "next/router"
import axios from "axios"

export default function Portfolio({post}){
    console.log(post)

    return(
        <>
            <Layout>
                <div>This is a portfolio detail</div>
                <h1>{post.id} - {post.title}</h1>
                <p>{post.body}</p>
            </Layout>
        </>
    )
}

Portfolio.getInitialProps = async ({query}) => {
    
    let post = {}
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts/3")
        post = res.data
    }catch (e){
        console.error(e)
    }

    return {post: post}
}