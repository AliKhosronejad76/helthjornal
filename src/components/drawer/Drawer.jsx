import { menuItems } from "../../data"
import Item from "./Item"

export default function Drawer({drawer}){
    return(

        <div className={` ${drawer ?"overflow-visible max-h-max ": "overflow-hidden max-h-[0px] opacity-0" } bg-white  w-[92%] left-[4%] right-[%4] px-4 py-2 shadow-xl rounded-lg  fixed z-50 top-[70px] bakh-reg lg:hidden transition-[max-height,opacity] [transition:max-height_200ms,opacity_150ms]`}>
                <ul>
                    {
                        menuItems.map((item , index )=><Item key={index} data={item}/>)
                    }
                </ul>
        </div>
      
    )
}

//  shadow-[0px_1px_1px_1px_rgba(0,0,0,.16)]
//  transition-[transform,visibility] [transition:transform_300ms,visibility_150ms]  linear 