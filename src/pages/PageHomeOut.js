import { Fragment } from "react";
import HeaderOut from "../components/HeaderOut";
import ProjectDivider from "../components/ProjectDivider";
import HeaderOutBaru from "../components/HeaderOutBaru";
import HelsinkiHero from "../components/HelsinkiHero";
import Flipbook from "../components/Flipbook";
import Cardholder from "../components/Cardholder";

export default function PageHomeOut(){
    return(
        <Fragment>
            <HeaderOut/>
            <ProjectDivider/>
            <HelsinkiHero/>
            <HeaderOutBaru/>
            <Cardholder/>
            <Flipbook/>
        </Fragment>
    )
}