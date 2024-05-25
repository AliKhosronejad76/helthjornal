export default function ListItem({data}){
    return(
        <li  className="w-max h-full flex items-center px-5 hover:bg-red-500">
            {data.name}
        </li>
    )
}