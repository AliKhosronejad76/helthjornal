export default function SubList({ data , show }){
    return(
        <ul className={`${show ? "overflow-visible max-h-max " : "overflow-hidden max-h-[0px] " }  px-2 transition-[max-height,overflow] [transition:max-height_300ms,overflow_150ms]`}> 
            {
                data.map((item , index )=> <li key={index} className="py-2 text-sm lg:text-base">{item.name}</li>)
            }
        </ul>
    )
}