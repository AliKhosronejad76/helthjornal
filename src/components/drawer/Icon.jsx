import { FaCaretDown } from "react-icons/fa"
import { FaCaretUp } from "react-icons/fa"

export default function Icon({ show }){
    return(
        <div className="transition-all duration-200 ease-out">
            
            {show ? <FaCaretUp/> : <FaCaretDown/> }
            
        </div>
    )
}
