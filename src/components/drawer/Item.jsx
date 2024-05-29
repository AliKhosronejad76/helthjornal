import { useState } from "react"
import SubList from "./SubList"
import Icon from "./Icon"
export default function Item({data}){
    const [show , setShow ] = useState(false)
    return(
        <li onClick={()=> setShow(!show) } className="flex flex-col py-2.5 cursor-pointer text-sm lg:text-base">
           <div className="flex items-center ">
                <a>
                    <span>{data.name}</span>
                </a>
                {data.sublist && <Icon show={show}/> }               
            </div> 
            {data.sublist ? <SubList data={data.sublist} show={show} /> : null }
        </li>
    )
}