import Posts from "./Posts"
import List from "./aside/List"
export default function HomeContent(){
    return(
        <div className=" flex flex-col px-6 lg:px-[0px] lg:flex-row justify-between">
                <div className="w-[100%] lg:w-[70%] ">
                    <h1 className="py-4 px-2 text-green-500 text-2xl bakh-fat">جدید ترین مطالب</h1>  
                    <Posts/>
                    <Posts/>        
                    <Posts/>        
                    <Posts/>  
                    <Posts/>
                    <Posts/>        
                    <Posts/>        
                    <Posts/>        
                </div>


                <aside className="w-[100%] lg:w-[30%] [&>:nth-child(4)]:sticky [&>:nth-child(4)]:top-4">
                    <List/>
                    <List/>
                    <List/>
                    <List/>

                </aside>
        </div>
    )
}