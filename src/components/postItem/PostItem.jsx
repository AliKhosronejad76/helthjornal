export default function PostItem({img}){
    return(
        <div className="rounded-lg px-1 my-2 max-h-[255px] min-h-[255px]">
            <img src={img} className="w-full h-full object-cover rounded-lg"/>
            
            <div className="flex items-end  justify-center  relative bottom-[66px]">
                <p className="bg-white flex items-center max-w-[98%]  min-h-[35px] mx-h-auto text-lg text-center px-1 rounded-md shadow-3xl">
                طرز تهیه تاس کباب؛ غذایی خوشمزه و مناسب برای هر رژیم!
                </p>
            </div>

            
        </div>
    )
}