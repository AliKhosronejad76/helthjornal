export default function ListItem({data}){
    return(
        <li  className="w-max h-full flex items-center px-5 ">
            {data.name}
        </li>
    )
}