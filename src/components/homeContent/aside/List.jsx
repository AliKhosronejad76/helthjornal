import Title from "../../title/Title"
import Item from "./Item"

export default function List(){
    return(
        <div>
            <Title/>

            <ul className="">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </ul>
        </div>
    )
}