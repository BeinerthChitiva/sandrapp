import { Suspense, lazy, useState } from "react";
import PageHomeOut from "../pages/PageHomeOut";
import { Navigate, Route, Routes } from "react-router-dom";

// const LazyPageLogin = lazy(() => import("../../pages/out/PageLogIn"))
// const LazyPageRegister = lazy(() => import("../../pages/out/PageRegister"))
// const LazyPagePassword = lazy(() => import("../../pages/out/PagePassword"))

export default function RouterOut(){
    const [defaultInRoute] = useState("/home")
    return(
        <Suspense fallback={<></>}>
            <Routes>
                <Route path="/home" element={<PageHomeOut/>}/>
                <Route path="/*" element={<Navigate to={defaultInRoute}/>}/>
            </Routes>
        </Suspense>
    )
}