import { Fragment } from "react";
import HeaderOut from "../components/HeaderOut";
import ProjectDivider from "../components/ProjectDivider";
import HeaderOutBaru from "../components/HeaderOutBaru";
import HelsinkiHero from "../components/HelsinkiHero";

export default function PageHomeOut(){
    return(
        <Fragment>
            <HeaderOut/>
            <ProjectDivider/>
            <HelsinkiHero/>
            <HeaderOutBaru/>
        </Fragment>
    )
}