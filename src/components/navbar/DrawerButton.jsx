import { RxHamburgerMenu } from "react-icons/rx"
import { FaTimes } from "react-icons/fa"
export default function DrawerButton({setDrawer , drawer }){
    return(
        <div className="visible lg:invisible flex lg:hidden items-center justify-center  text-xl w-[50px] ">
            <button className="w-full" onClick={()=>setDrawer(!drawer)}>
                
                {drawer ? <RxHamburgerMenu/> : <FaTimes/>}
            </button>
        </div>
    )
}