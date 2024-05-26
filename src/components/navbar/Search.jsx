import { MdOutlineSearch } from "react-icons/md"
export default function Serach(){
    return(
        <div className="flex items-center bakh-reg">
             <button className="bg-gray-400 w-max lg:w-[100px] py-2  px-1.5 flex items-center justify-between   text-white  rounded-md ">
                 <MdOutlineSearch/>
                <p className="text-sm text-center hidden lg:block">جست و جو</p>
             </button>
        </div>
    )
}