import axios from "axios"
import Layout from "pages/layout/layout"
import Link from "next/link"

export default function Portfolios({posts}){
    console.log(posts)

    return(
        <>
            <Layout>
                <div>I am a portfolio page</div>
                <ul>
                {
                    posts.map(
                        post => {
                            return(
                                <li key={post.id}>
                                    <Link className="test" href={`./portfolio/${post.id}`}>
                                        {post.id} {post.title}
                                    </Link>
                                </li>
                            )
                        }
                    )
                }
                </ul>
            </Layout>
        </>
    )
}

Portfolios.getInitialProps = async () => {
    let posts = []
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        posts = res.data
    }catch (e){
        console.error(e)
    }

    return {posts: posts.slice(0,10)}
}