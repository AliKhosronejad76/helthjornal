import {useState} from "react"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import Drawer from "../drawer/Drawer"
export default function Layout({children}){
    const [drawer  , setDrawer ] = useState(true)
    return(
        <>
          <div>
            <Drawer drawer={drawer}/>
          </div>
         <Navbar setDrawer={setDrawer} drawer={drawer}/>
          {children}
         <Footer/>
        </>
    )
}