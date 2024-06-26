import Aboutus from "./Aboutus"
import Menu from "./Menu"
import Social from "./Social"

export default function Footer(){
    return(
        <div className="px-2 pt-3 pb-16">
            <footer className="bg-[#d7d7d7] pb-3 rounded-lg px-2 ">
                <div className="px-2 py-2 pb-4 flex flex-col lg:flex-row lg:justify-between">
                    <Aboutus/>
                    <Menu/> 
                    <Social/>
                </div>

                <div className="bg-[#404040] text-white  rounded-lg py-3 px-1  md:px-2 flex items-center justify-start">
                    <p className="text-sm bakh-light text-center">
                    © کپی‌رایت 2023 لیمومی. کلیه حقوق وب سایت محفوظ می باشد.
                    </p>
                </div>
            </footer>
        </div>
    )
}