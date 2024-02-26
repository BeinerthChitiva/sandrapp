import { Fragment } from "react";
import HeaderOut from "../components/HeaderOut";
import ProjectDivider from "../components/ProjectDivider";
import HeaderOutBaru from "../components/HeaderOutBaru";
import HeaderOutHelsinki from "../components/HeaderOutHelsinki";

export default function PageHomeOut(){
    return(
        <Fragment>
            <HeaderOut/>
            <ProjectDivider/>
            <HeaderOutBaru/>
            <HeaderOutHelsinki/>
        </Fragment>
    )
}