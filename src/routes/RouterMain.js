import { Fragment } from "react";
import ScrollToTop from "../hooks/useScrollToTop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RouterOut from "./RouterOut";

export default function RouterMain(){
    return(
        <Fragment>
            <ScrollToTop/>
            <Navbar/>
            <RouterOut/>
            <Footer/>
        </Fragment>
    )
}