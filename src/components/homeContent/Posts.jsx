import Title from "../title/Title"
import PostItem from "../postItem/PostItem"
export default function Posts(){
    return(
        <div>
            <Title/>
            <div className="pt-2.5  pb-6 flex flex-wrap  lg:[&>:nth-child(1)]:w-[58%] lg:[&>:nth-child(2)]:w-[40%] lg:[&>:nth-child(3)]:w-[49%] lg:[&>:nth-child(4)]:w-[49%]">
                <PostItem img="/img/fesharkhoon.webp" />
                <PostItem img="/img/soup.webp" />            
                <PostItem img="/img/laghari.webp" />            
                <PostItem img="/img/ofonat.webp" />      
            </div>
        </div>
       
    )
}