export default function SubList({data , display , setDisplay }){
    return(
        <ul 
        onMouseEnter={()=>setDisplay(true)} 
        onMouseLeave={()=>setDisplay(false)}
        className={`${display?"block":"hidden"} absolute top-[40px] bg-white  z-20 w-full rounded-md transition-all duration-700 ease [&>*:first-child]:rounded-tl-lg [&>*:first-child]:rounded-tr-lg [&>*:last-child]:rounded-br-lg [&>*:last-child]:rounded-bl-lg`}>
            {data.map((item , index )=> <li key={index} className="px-2 py-1.5 transition-all duration-400 hover:bg-yellow-500 ">{item.name}</li>)}
        </ul>
    )
}