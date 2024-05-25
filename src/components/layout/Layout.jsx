import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
export default function Layout({children}){
    return(
        <>
          <div>

          </div>
         <Navbar/>
          {children}
         <Footer/>
        </>
    )
}