import { FaRegCalendarDays } from "react-icons/fa6"
export default function Item(){
    return(
        <li className="h-[110px] border border-[#e6e6e6] rounded-xl flex my-2.5">
            <img
            className="rounded-xl h-full w-[130px] object-cover"  
            src="/img/laghari.webp" />

            <div className="px-2 h-full  flex flex-col justify-between py-2.5">
                <a className="text-sm transition duration-500 hover:text-green-800 bakh-bold">روایتی از کاهش وزن ۱۱ کیلویی نگین با پشتیبانی مادرش! </a>

                <div className="text-sm bakh-light flex items-center ">
                    <FaRegCalendarDays className="bakh-light text-gray-700" />
                    <span className="mr-2 block">یک ماه بیش</span>
                </div>
            </div>
        </li>
    )
}
