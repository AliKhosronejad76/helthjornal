export default function Item({children , color }){
    return(
        <div style={{background:color}} className={`text-white text-2xl w-[50px] h-[50px]  mx-2 flex items-center justify-center rounded-lg`}>
            {children} 
        </div>
    )
}