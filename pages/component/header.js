import Link from "next/link"

export default function Header(){
    return(
        <>
        <Link href={""}>
            Home
        </Link>
        <Link href={"/about"}>
            about
        </Link>
        <Link href={"/blog"}>
            blog
        </Link>
        <Link href={"/cv"}>
            cv
        </Link>
        <Link href={"/portfolio"}>
            portfolio
        </Link>
        </>
    )
}