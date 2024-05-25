import Logo from "./Logo"
import Menu from "./menu/Menu"
import Search from "./Search"
export default function Navbar(){
    return(
        <nav className="sticky w-[94%] mx-auto flex  justify-between px-3 rounded-md border border-green-600 mt-3 mb-8">
            <Logo/>
            <Menu/>
            <Search/>
        </nav>
    )
}