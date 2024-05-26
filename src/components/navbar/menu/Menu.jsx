import ListItem from "./ListItem"
import { menuItems } from "../../../../public/data"

export default function  Menu(){
    return(
        <ul className="invisible hidden lg:visible lg:flex items-center text-sm ">
            {menuItems.map((item, i)=><ListItem key={i} data={item}/>)}
        </ul>
    )
}