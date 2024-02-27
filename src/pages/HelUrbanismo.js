import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const helReportImages = ["/assets/images/HelReport1.jpg", "/assets/images/HelReport2.jpg", "/assets/images/HelReport3.jpg","/assets/images/HelReport4.jpg","/assets/images/HelReport5.jpg","/assets/images/HelReport6.jpg","/assets/images/HelReport7.jpg","/assets/images/HelReport8.jpg","/assets/images/HelReport9.jpg","/assets/images/HelReport10.jpg"]
const helHydroImages = ["/assets/images/HelHidro1.jpg","/assets/images/HelHidro2.jpg","/assets/images/HelHidro3.jpg"]

export default function HelUrbanismo(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return(
        <>
            <div className="flex flex-col">
                <h1 className="text-[26px] md:text-[42px] mt-10 self-center font-BNPPSansBold font-semibold">URBANISMO - HELSINKI REPORT</h1>
                <div className="px-[10%] py-[5%]">
                    <Slider {...settings}>
                        {helReportImages.map((image, index) => (
                            <img key={index} src={image} alt="lol" className="border border-black rounded-md"/>
                        ))}
                    </Slider>
                </div>
                <h1 className="text-[26px] md:text-[42px] mt-10 self-center font-BNPPSansBold font-semibold">URBANISMO - HELSINKI HIDROGRAFÍA</h1>
                <div className="px-[10%] py-[5%]">
                    <Slider {...settings}>
                        {helHydroImages.map((image, index) => (
                            <img key={index} src={image} alt="lol" className="border border-black rounded-md"/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}