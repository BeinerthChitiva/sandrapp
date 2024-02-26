import { Fragment } from "react";

export default function Footer(){
    return(
        <Fragment>
            <footer>
                <div className="relative animate-appear-bottom bottom-0 py-[40px] px-[10%] items-center flex justify-center border-t border-t-neutral-200 bg-white min-h-[236px]">
                    {/* <img/> */}
                    <div className="flex flex-col items-center justify-center mx-auto">
                        <div className="text-[12px] flex flex-col gap-[24px] mx-auto text-centers items-center">
                            <div className="flex justify-between flex-col gap-2 lg:flex-row text-[12px]">
                                <div className="flex flex-col gap-2 lg:flex-row p-2 items-center">
                                    <div className="cursor-pointer">
                                        Términos y Condiciones
                                    </div>
                                    <div className="cursor-pointer">
                                        Políticas de Privacidad
                                    </div>
                                    <div>
                                        Sandrapp -
                                        <br className="lg:hidden"/> Copyright &copy; 2023
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                En caso de requerir información adicional o presentar algún
                                inconveniente, comunícate con nuestras líneas de atención:
                                <div className="font-bold mt-4 text-[#474747] fill-[#474747]">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="none"
                                        className="inline w-4 h-4 mr-2"
                                    >
                                        <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"/>
                                    </svg>
                                    Bogotá: <a href="tel:5267072">(526) 7072</a> o resto
                                    del país: <a href="+tel:018000944777">018000 944777</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#ECECEC] text-[12px] min-h-[100px] px-[10%] lg:min-h-[36px] text-[#666666] text-center justify-center flex items-center">
                    Para que vivas una mejor experiencia y visualizar nuestros servicios,
                    te recomendamos usar los navegadores de internet "Web Chrome 43",
                    "Firefox 38", "Safari 8" o sus versiones más actualizadas.
                </div>
            </footer>
        </Fragment>
    )
}