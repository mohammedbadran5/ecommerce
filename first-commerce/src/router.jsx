import { createBrowserRouter } from "react-router-dom"; 
import Home from "./view/Home"; 
import Products from "./view/products-page/Product.jsx";
import Display from "./view/DisplayProducts/Display.jsx";
import ItemDescription from "./view/Describtion/ItemDescribtion"; 
import MainDescription from "./view/Describtion/MainDescribtion.jsx";
import CartPage from "./view/DisplayProductInfo/Cart.jsx";
import DisplayProductInfo from "./view/DisplayProductInfo/DisplayProductInfo.jsx";
import MainCheckOut from "./view/Checkout/MainCheckOut.jsx";
import ScrollToTop from "./view/Scrolltop.jsx";
import RoomPage from "./view/Rooms/RoomPage.jsx";
import MainAbout from "./view/Aboutus/MainAbout.jsx";
import MainContact from "./view/Contact/MainContact.jsx";

const router = createBrowserRouter([
    {
        path: '/Home',
        element: (
            <>
                <ScrollToTop /> {/* Ensure scroll to top when route changes */}
                <Home />
            </>
        ),
    },
    {
        path: '/Products',
        element: (
            <>
                <ScrollToTop />
                <Products />
            </>
        ),
    },
    {
        path: '/Display/:category', // Dynamic category route
        element: (
            <>
                <ScrollToTop />
                <Display />
            </>
        ),
    },
    {
        path: '/Display/:category/:itemName', // Dynamic product route
        element: (
            <>
                <ScrollToTop />
                <MainDescription />
            </>
        ),
    },
    {
        path: '/DisplayProductInfo/cart', // Cart route
        element: (
            <>
                <ScrollToTop />
                <DisplayProductInfo />
            </>
        ),
    },
    {
        path: '/CheckOut',
        element: (
            <>
                <ScrollToTop />
                <MainCheckOut />
            </>
        ),
    },
    {
        path: '/Rooms',
        element: (
            <>
                <ScrollToTop />
                <RoomPage />
            </>
        ),
    },
    {
        path: '/AboutUs',
        element: (
            <>
                <ScrollToTop />
                <MainAbout />
            </>
        ),
    },
    {
        path: '/ContactUs',
        element: (
            <>
                <ScrollToTop />
                <MainContact />
            </>
        ),
    },
]);

export default router;
