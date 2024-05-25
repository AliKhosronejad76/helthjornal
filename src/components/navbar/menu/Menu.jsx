import ListItem from "./ListItem"
import { menuItems } from "../../../../public/data"

export default function  Menu(){
    return(
        <ul className="flex items-center text-sm ">
            {menuItems.map((item, i)=><ListItem key={i} data={item}/>)}
        </ul>
    )
}