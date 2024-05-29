export default function Item({bgColor , icon }){
    return(
        <div style={{background: bgColor }} 
        className="w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] rounded-full flex items-center justify-center mx-2 text-white text-2xl cursor-pointer transition-all duration-700 hover:translate-y-[-9px]"
        >
            <a>
             {icon}
            </a>
        </div>
    )
}