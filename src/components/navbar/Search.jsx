import { MdOutlineSearch } from "react-icons/md"
export default function Serach(){
    return(
        <div className="flex items-center ">
             <button className="bg-gray-500 w-[100px] px-1.5 flex items-center justify-between py-2  text-white flex rounded-md ">
                 <MdOutlineSearch/>
                <span className="text-sm text-center">جست و جو</span>
             </button>
        </div>
    )
}