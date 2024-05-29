export default function CommentSection(){
    return(
        <div className="w-full px-4">
            <h2 className="text-xl bakh-medium my-2">دیدگاه خود را بنویسید</h2>  
            <p className="text-base bakh-reg my-3">دیدگاه شما بعد از تایید سردبیر منتشر می شود</p>
       
            <div className="w-full ">
                <form className="text-lg bakh-reg">
                    <div className="my-2">
                        <textarea 
                        className="w-full h-[200px] outline-none p-2 focus:border focus:border-[#c6c8cc] bg-[#f0f2f5] rounded-lg"/>
                    </div>
                    <div className="flex items-center justify-between my-3">
                        <input type="text" placeholder="نام" className="w-[48%] h-[50px] rounded-lg px-2 bg-[#f0f2f5] outline-none focus:border focus:border-[#a4a5aa]"/>
                        <input type="email" placeholder="ایمیل" className="w-[48%] h-[50px] rounded-lg px-2 bg-[#f0f2f5] outline-none focus:border focus:border-[#a4a5aa]"/>
                    </div>
                    <div className="my-3">
                        <button className="bg-[#5960ff] text-white w-[140px] h-[52px] rounded-lg bakh-heavy leading-loose transition-all duration-200 hover:bg-gray-700">ثبت دیدگاه</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



