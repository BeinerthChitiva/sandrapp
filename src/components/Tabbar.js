import { NavLink } from "react-router-dom/dist";

export default function Tabbar({projectName}){
    return(
        <>
            <nav className="flex flex-col md:flex-row justify-center font-OpenSans font-extrabold text-[26px] md:text-[42px] space-x-4">
                <NavLink
                    to={`/projects/${projectName}/urbanismo`}
                    className="text-black hover:text-white"
                    activeClassName="text-blue-600 border-b-2 border-blue-600"
                >
                    URBANISMO
                </NavLink>
                <NavLink
                    to={`/projects/${projectName}/estetica`}
                    className="text-black hover:text-white"
                    activeClassName="text-blue-600 border-b-2 border-blue-600"
                >
                    ESTÉTICA
                </NavLink>
                <NavLink
                    to={`/projects/${projectName}/materiales`}
                    className="text-black hover:text-white"
                    activeClassName="text-blue-600 border-b-2 border-blue-600"
                >
                    MATERIALES
                </NavLink>
                <NavLink
                    to={`/projects/${projectName}/estructura`}
                    className="text-black hover:text-white"
                    activeClassName="text-blue-600 border-b-2 border-blue-600"
                >
                    ESTRUCTURA
                </NavLink>
            </nav>
        </>
    )
}