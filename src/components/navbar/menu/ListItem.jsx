import { useState } from "react"
import  { FaAngleDown } from "react-icons/fa6"
import SubList from "./SubList"

export default function ListItem({data}){
    const [display , setDisplay] = useState(false)
    return(
        <li
         onMouseLeave={()=>setDisplay(false)}
         onMouseEnter={()=>setDisplay(true)} 
         className="relative w-max h-full flex items-center px-5 ">
            {data.name}
            {data.sublist ? <FaAngleDown className="mr-2"/> : null }
            { data.sublist ?  <SubList display={display} setDisplay={setDisplay} data={data.sublist}/> : null }
        </li>
    )
}