export default function Item({bgColor , icon }){
    return(
        <div style={{background: bgColor }} 
        className="w-[45px] h-[45px] rounded-full flex items-center justify-center mx-2 text-white text-2xl cursor-pointer transition-all duration-700 hover:translate-y-[-9px]"
        >
            <a>
             {icon}
            </a>
        </div>
    )
}