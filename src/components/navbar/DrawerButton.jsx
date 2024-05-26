import { RxHamburgerMenu } from "react-icons/rx"
export default function DrawerButton(){
    return(
        <div className="visible lg:invisible flex lg:hidden items-center justify-center  text-xl w-[50px] ">
            <button classname="w-full ">
                <RxHamburgerMenu/>
            </button>
        </div>
    )
}