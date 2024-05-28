import { Route , Routes } from "react-router-dom"
import HomePage from "../../pages/HomePage"
import ArticlePage from "../../pages/ArticlePage"

export default function Router(){
    return(
        <Routes>
           <Route index path="/" element={<HomePage/>} />
           <Route path="/article/:sluge" element={<ArticlePage/>}/>
        </Routes>
    )
}