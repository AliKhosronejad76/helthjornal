import BannerItem from "../postItem/PostItem"

export default function Banner(){
   return(
        <div className="pt-2.5  px-6 lg:px-[0px] pb-6 flex flex-wrap  lg:[&>:nth-child(1)]:w-[58%] lg:[&>:nth-child(2)]:w-[40%] lg:[&>:nth-child(3)]:w-[49%] lg:[&>:nth-child(4)]:w-[49%]" >
            <BannerItem img="/img/fesharkhoon.webp" />
            <BannerItem img="/img/soup.webp" />            
            <BannerItem img="/img/laghari.webp" />            
            <BannerItem img="/img/ofonat.webp" />            

        </div>
   ) 
}