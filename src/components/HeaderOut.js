import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderOut({
    title = "Bienvenido a Sandrapp",
    description = "Soluciones arquitectónicas.",
    buttonLabel = "Contáctanos"
}){
    const [isMobile, setIsMobile] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return() => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const backgroundImage = isMobile
        ? "/assets/images/banner_hero_mobile5.jpg"
        : "/assets/images/banner_hero_desktop5.jpg"

    return(
        <Fragment>
            <section className="relative overflow-hidden bg-top bg-no-repeat bg-cover mt-[80px]"
                style={{backgroundImage: `url(${backgroundImage})`, height:"570px"}}
            >
                <div className="flex flex-col items-center gap-16 justify-start mt-12 p-5 text-center banner-hero-content w-100 lg:w-1/2 lg:items-start lg:justify-center lg:text-left lg:pl-40 relative">
                    <h1 className="mb-10 md:text-[42px] font-BNPPSansBold font-semibold text-[26px] md:mb-10n animate-appear-top">{title}</h1>
                    <div className="flex-col hidden max-w-[540px] mb-8 md:mb-12 text-lg md:flex animate-appear-top">
                        <p className="text-[22px]">{description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <button className="bg-primary px-6 py-3 rounded-md text-white" onClick={() => navigate("/registrate")}>
                            {buttonLabel}
                            <div className="hidden w-2 h-2 ml-4 -rotate-45 border-b-2 border-r-2 md:hidden border-b-white border-r-white"/>
                        </button>
                        <Link to="/inicia-sesion" className="text-primary underline">Más información</Link>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}