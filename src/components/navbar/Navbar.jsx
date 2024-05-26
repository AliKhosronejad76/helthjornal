import Logo from "./Logo"
import Menu from "./menu/Menu"
import Search from "./Search"
import DrawerButton from "./DrawerButton"
export default function Navbar(){
    return(
        <nav className=" w-[94%] mx-auto flex  justify-between px-3 rounded-md border border-green-600 mt-3 mb-8">
            <DrawerButton/>
            <Logo/>
            <Menu/>
            <Search/>
        </nav>
    )
}