import { MdOutlineSearch } from "react-icons/md"
export default function Serach(){
    return(
        <div className="flex items-center">
             <button className="bg-gray-400 w-[100px] py-2  px-1.5 flex items-center justify-between   text-white  rounded-md ">
                 <MdOutlineSearch/>
                <p className="text-sm text-center ">جست و جو</p>
             </button>
        </div>
    )
}