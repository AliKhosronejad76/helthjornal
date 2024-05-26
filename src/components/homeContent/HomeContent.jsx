import Posts from "./Posts"

export default function HomeContent(){
    return(
        <div className="flex justify-between">
                <div className="w-[100%] lg:w-[70%] ">
                    <h1 className="py-4 px-2 text-green-500 text-xl">جدید ترین مطالب</h1>  
                    <Posts/>
                    <Posts/>        
                    <Posts/>        
                    <Posts/>  
                    <Posts/>
                    <Posts/>        
                    <Posts/>        
                    <Posts/>        



                </div>


                <aside className="w-[100%] lg:w-[30%] bg-yellow-900">

                </aside>
        </div>
    )
}