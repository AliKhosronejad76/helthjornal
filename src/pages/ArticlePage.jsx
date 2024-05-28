import List from "../components/aside/List"
import CommentSection from "../components/commentSection/CommentSection"
export default function ArticlePage(){
    return(
        <div className="flex">
            <div className="w-[65%]">

                <CommentSection/>
            </div>

            <aside className="w-[35%]">
                <List/>
                <List/>
                <List/>
                <List/>

            </aside>
        </div>
    )

}