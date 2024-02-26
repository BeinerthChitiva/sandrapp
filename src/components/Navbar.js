import { Fragment } from "react";
import { Link } from "react-router-dom";
// import useVerticalScroll from "../../hooks/useVerticalScroll";
import useVerticalScroll from "../hooks/useVerticalScroll"

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
                <Link to="/home"><div className="font-BNPPSansBold text-[30px]">Sandrapp</div></Link>
                <div>
                    <Link to="/inicia-sesion">Iniciar Sesión</Link>
                    <Link to="/registrate">Regístrate</Link>
                </div>
            </header>
        </Fragment>
    )
}