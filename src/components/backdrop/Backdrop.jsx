export default function Backdrop({ setDrawer }){
    return(
        <div onClick={()=>setDrawer(false)} className="w-screen h-screen overflow-hidden fixed top-0 bottom-0 right-0 left-0  z-20 transition-all duration-1000 backdrop-blur-sm lg:hidden">
        </div>
    )
}