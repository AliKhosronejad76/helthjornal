import Item from "./Item"
import { FaLinkedinIn } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa6"

export default function Share(){
    return(
        <div className="flex flex-col items-center">
            <h1 className="bakh-medium">این مقاله را برای دوستان خود ارسال کنید</h1>

            <div className="flex items-center mb-2 mt-6">
                <Item icon={<FaLinkedinIn/>} bgColor={"#137fd6"}/>
                <Item icon={<FaTelegram/>} bgColor={"#1cb8ff"}/>
                <Item icon={<MdOutlineMailOutline/>} bgColor={"#00bcd4"}/>
                <Item icon={<FaWhatsapp/>} bgColor={"#19b77e"}/>
            </div>
       
        </div>
    )
}