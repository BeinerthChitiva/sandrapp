import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const helEstePres = ["/assets/images/HelEstetica1.jpg","/assets/images/HelEstetica2.jpg","/assets/images/HelEstetica3.jpg","/assets/images/HelEstetica4.jpg","/assets/images/HelEstetica5.jpg","/assets/images/HelEstetica6.jpg","/assets/images/HelEstetica7.jpg","/assets/images/HelEstetica8.jpg","/assets/images/HelEstetica9.jpg","/assets/images/HelEstetica10.jpg","/assets/images/HelEstetica11.jpg","/assets/images/HelEstetica12.jpg","/assets/images/HelEstetica13.jpg","/assets/images/HelEstetica14.jpg","/assets/images/HelEstetica15.jpg","/assets/images/HelEstetica16.jpg","/assets/images/HelEstetica17.jpg","/assets/images/HelEstetica18.jpg","/assets/images/HelEstetica19.jpg","/assets/images/HelEstetica20.jpg","/assets/images/HelEstetica21.jpg"]
const helEsteCon = ["/assets/images/HelEstCon1.jpg","/assets/images/HelEstCon2.jpg","/assets/images/HelEstCon3.jpg","/assets/images/HelEstCon4.jpg","/assets/images/HelEstCon5.jpg","/assets/images/HelEstCon6.jpg","/assets/images/HelEstCon7.jpg","/assets/images/HelEstCon8.jpg","/assets/images/HelEstCon9.jpg","/assets/images/HelEstCon10.jpg","/assets/images/HelEstCon11.jpg","/assets/images/HelEstCon12.jpg","/assets/images/HelEstCon13.jpg"]
const helEsteSavu = ["/assets/images/HelEstSavu1.jpg","/assets/images/HelEstSavu2.jpg","/assets/images/HelEstSavu3.jpg","/assets/images/HelEstSavu4.jpg","/assets/images/HelEstSavu5.jpg","/assets/images/HelEstSavu6.jpg","/assets/images/HelEstSavu7.jpg","/assets/images/HelEstSavu8.jpg","/assets/images/HelEstSavu9.jpg"]


export default function HelEstetica(){
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
                <h1 className="text-[26px] md:text-[42px] mt-10 self-center font-BNPPSansBold font-semibold">ESTÉTICA - PRESENTACIÓN ESTÉTICA</h1>
                <div className="px-[10%] py-[5%]">
                    <Slider {...settings}>
                        {helEstePres.map((image, index) => (
                            <img key={index} src={image} alt="lol" className="border border-black rounded-md"/>
                        ))}
                    </Slider>
                </div>
                <h1 className="text-[26px] md:text-[42px] mt-10 self-center font-BNPPSansBold font-semibold">ESTÉTICA - CONCEPTO DEL PROYECTO</h1>
                <div className="px-[10%] py-[5%]">
                    <Slider {...settings}>
                        {helEsteCon.map((image, index) => (
                            <img key={index} src={image} alt="lol" className="border border-black rounded-md"/>
                        ))}
                    </Slider>
                </div>
                <h1 className="text-[26px] md:text-[42px] mt-10 self-center font-BNPPSansBold font-semibold">ESTÉTICA - CAVIDADES SAVU</h1>
                <div className="px-[10%] py-[5%]">
                    <Slider {...settings}>
                        {helEsteSavu.map((image, index) => (
                            <img key={index} src={image} alt="lol" className="border border-black rounded-md"/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}