import { menuItems } from "../../data"
import Item from "./Item"

export default function Drawer({drawer}){
    return(

        <div className={` ${drawer ?"overflow-visible max-h-max ": "overflow-hidden max-h-[0px] " } bg-white  w-[92%] left-[4%] right-[%4] px-4 py-2 shadow-xl rounded-lg  fixed z-50 top-[70px] bakh-reg lg:hidden my-transition`}>
                <ul>
                    {
                        menuItems.map((item , index )=><Item key={index} data={item}/>)
                    }
                </ul>
        </div>
      
    )
}