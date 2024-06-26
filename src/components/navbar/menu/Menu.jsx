import ListItem from "./ListItem"
import { menuItems } from "../../../data"

export default function  Menu(){
    return(
        <ul className="invisible hidden lg:visible lg:flex items-center text-sm bakh-reg">
            {menuItems.map((item, i)=><ListItem key={i} data={item}/>)}
        </ul>
    )
}