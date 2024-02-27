import { Fragment } from "react";
import { Link } from "react-router-dom";
import useVerticalScroll from "../hooks/useVerticalScroll"

const sandraLogo = "/assets/images/ntLogoV2.jpg"

export default function Navbar(){
    const scrollY = useVerticalScroll()
    return(
        <Fragment>
            <header className={`absolute z-[9999] px-[10%] transition-height w-full flex items-center justify-between py-4 bg-white shadow-md`}
                style={{
                    transition: "height 500ms",
                    height: "80px",
                    position: scrollY < 700 ? "fixed" : "absolute",
                    top: scrollY > 700 ? "700px" : "0"
                }}
            >
                <Link to="/home"><div className="font-BNPPSansBold text-[30px]"><img src={sandraLogo} alt="sandraLog" className="max-h-[70px]"/></div></Link>
                <div className="flex flex-row gap-5">
                    <Link to="/projects/helsinki/urbanismo">Helsinki</Link>
                    <Link to="/projects/tierrabomba">Tierra Bomba</Link>
                </div>
            </header>
        </Fragment>
    )
}