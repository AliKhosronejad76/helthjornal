
export default function Drawer({drawer}){
    return(

        <div className={` ${drawer ?"overflow-visible max-h-[200px] ": "overflow-hidden max-h-[0px] " } bg-white  w-[92%] left-[4%] right-[%4] px-4 py-2 shadow-xl rounded-lg transition-max-height ease-out duration-300 absolute top-[70px]`}>
                <ul>
              
                </ul>
        </div>
      
    )
}