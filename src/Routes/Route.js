import { createBrowserRouter } from "react-router-dom";

import MainPage from "../Layout/MainPage";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/About/AboutPage";
import ContactPage from "../Pages/Contact/ContactPage";
import BlogPage from "../Pages/Bolg/BlogPage";
import CartPage from "../Pages/Cart/CartPage";
import ShopPage from "../Pages/Shop/ShopPage";
import ErrorPage from "../Pages/Error/ErrorPage";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainPage />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:'',
                element:<HomePage />
            },
            {
                path:'/shop',
                element:<ShopPage />
            },
            {
                path:'/about',
                element:<AboutPage />
            },
            {
                path:'/blog',
                element:<BlogPage/>
            },
            {
                path:'/contact',
                element:<ContactPage />
            },
            {
                path:'/cartPage',
                element:<CartPage />
            },
    ]
    }
]);