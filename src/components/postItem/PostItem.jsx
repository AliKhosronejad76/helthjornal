export default function PostItem({img}){
    return(
        <div className="rounded-lg px-3 my-2 max-h-[230px] min-h-[230px]">
            <img src={img} className="w-full h-full object-cover rounded-lg"/>
            
            <div className="flex items-center justify-center  relative bottom-[60px]">
                <p className="bg-white flex items-center w-max h-[35px] text-xl rounded-xl  px-9 shadow-lg">
                    متن مقاله به صورت تست می باشد ؟
                </p>
            </div>

            
        </div>
    )
}