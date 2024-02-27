import { Outlet } from "react-router-dom/dist";
import HeaderOutHelsinki from "../components/HeaderOutHelsinki";

export default function HelMain(){
    return(
        <>
            <HeaderOutHelsinki/>
            <Outlet/>
        </>
    )
}