import List from "../components/aside/List"
import CommentSection from "../components/commentSection/CommentSection"
import Share from "../components/share/Share"

export default function ArticlePage(){
    return(
        <div className="flex flex-col lg:flex-row">
            <div className="w-[100%] lg:w-[65%]">
                <Share/>
                <CommentSection/>
            </div>

            <aside className="w-[100%] lg:w-[35%]">
                <List/>
                <List/>
                <List/>
                <List/>

            </aside>
        </div>
    )

}