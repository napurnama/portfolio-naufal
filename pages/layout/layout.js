import Header from "pages/component/header.js"

export default function Layout({children}){
    return(
        <>
            <Header />
            <div>THIS IS A TEST</div>
            {children}
        </>
    )
}