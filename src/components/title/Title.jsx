export default function Title(){
    return(
        <div>
            <div className="flex items-center  my-2">
                <h1 className="inline-block bg-orange-400 text-white text-base rounded-md w-[90px] h-[37px] flex items-center justify-center">تناسب اندام</h1>
            </div>

            <div className="flex items-center mt-1 pl-6 [&>div]:bg-green-600 [&>div]:h-[7px]">
                <div className="w-[75%] mx-1 rounded-md "></div>
                <div className="w-[10%] mx-1 rounded-md "></div>
                <div className="w-[5%] mx-1 rounded-md "></div>
                <div className="w-[4%]  mx-1 rounded-md "></div>
            </div>
        </div>
    )
}