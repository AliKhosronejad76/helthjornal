import {useState} from "react"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import Drawer from "../drawer/Drawer"
import Backdrop from "../backdrop/Backdrop"

export default function Layout({children , drawer , setDrawer }){
    return(
        <>
          <div>
            <Drawer drawer={drawer}/>
            { drawer ? <Backdrop setDrawer={setDrawer} /> : null }
          </div>
         <Navbar setDrawer={setDrawer} drawer={drawer}/>
          {children}
         <Footer/>
        </>
    )
}