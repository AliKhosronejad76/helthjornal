export default function SubList({ data , show }){
    return(
        <ul className={`${show ? "overflow-visible max-h-max " : "overflow-hidden max-h-[0px] " }  px-2 my-transition`}> 
            {
                data.map((item , index )=> <li key={index} className="py-2">{item.name}</li>)
            }
        </ul>
    )
}