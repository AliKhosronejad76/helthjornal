import Logo from "./Logo"
import Menu from "./menu/Menu"
import Search from "./Search"
import DrawerButton from "./DrawerButton"
export default function Navbar({setDrawer , drawer }){
    return(
        <nav className="sticky top-2 z-40 bg-white w-[94%] mx-auto flex  justify-between px-3 rounded-md border border-green-600 mt-3 mb-8 h-[50px]">
            <DrawerButton setDrawer={setDrawer} drawer={drawer}/>
            <Logo/>
            <Menu/>
            <Search/>
        </nav>
    )
}