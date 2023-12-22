import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Orders from "../Pages/Orders"
import Delivery from "../Pages/Delivery"
import Products from "../Pages/Products"
import Marketing from "../Pages/Marketing"
import Payments from "../Pages/Payments"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/delivery" element={<Delivery/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/marketing" element={<Marketing/>}/>
            <Route path="/payments" element={<Payments/>}/>

        </Routes>
    )
}
export default AllRoutes