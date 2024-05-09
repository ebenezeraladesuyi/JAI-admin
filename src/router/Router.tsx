/* eslint-disable react-refresh/only-export-components */


// import { createBrowserRouter } from "react-router-dom";
import {lazy} from "react";
// import DashLayout from "../layout/DashLayout";
// import Dogs from "../pages/Dogs";
// import Cars from "../pages/Cars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Carrs from "../pages/Carrs";


// const Cars = lazy(() => import("../pages/Cars"))
const Carrs = lazy(() => import("../pages/Carrs"))
// const Dogs = lazy(() => import("../pages/Dogs"))



const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                path="/"
                element={
                    
                    // <Cars />
                    <Carrs />
                }
                />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
