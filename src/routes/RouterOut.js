import { Suspense, lazy, useState } from "react";
import PageHomeOut from "../pages/PageHomeOut";
import { Navigate, Route, Routes } from "react-router-dom";

const LazyPageHelMain = lazy(() => import("../pages/HelMain"))
const LazyPageHelUrbanismo = lazy(() => import("../pages/HelUrbanismo"))
const LazyPageHelEstetica = lazy(() => import("../pages/HelEstetica"))
const LazyPageHelMateriales = lazy(() => import("../pages/HelMateriales"))
const LazyPageHelEstructura = lazy(() => import("../pages/HelEstructura"))
const LazyPageTBMain = lazy(() => import("../pages/TBMain"))


export default function RouterOut(){
    const [defaultInRoute] = useState("/home")
    return(
        <Suspense fallback={<></>}>
            <Routes>
                <Route path="/home" element={<PageHomeOut/>}/>
                <Route path="/*" element={<Navigate to={defaultInRoute}/>}/>
                <Route path="/projects/helsinki" element={<LazyPageHelMain/>}>
                    <Route path="urbanismo" element={<LazyPageHelUrbanismo/>}/>
                    <Route path="estetica" element={<LazyPageHelEstetica/>}/>
                    <Route path="materiales" element={<LazyPageHelMateriales/>}/>
                    <Route path="estructura" element={<LazyPageHelEstructura/>}/>
                </Route>
                <Route path="/projects/tierrabomba" element={<LazyPageTBMain/>}/>
            </Routes>
        </Suspense>
    )
}