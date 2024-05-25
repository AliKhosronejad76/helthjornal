import { FaTelegram } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import Item from "./Item"

export default function Social(){
    return(
        <div className="w-[100%] lg:w-[33%]  flex flex-col items-start lg:items-center">
            <h2 className="pb-6 pt-4 text-xl">ما را دنیال کنید</h2>

            <div className="flex items-center ">
                <Item color={"#262626"}>
                 <FaTelegram/>
                </Item>
                <Item color="#2ca5e0">
                    <FaInstagram/>
                </Item>
                <Item color="#69727d" >
                 <FaXTwitter/>
                </Item>
            </div>
        </div>
    )
}