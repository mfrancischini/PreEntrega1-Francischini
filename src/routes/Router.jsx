import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "../components"
import { Home, Products } from "../pages"

export const Router = () => {
    return (
        <BrowserRouter>
           <NavBar userName="Mfrancischini" />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
            </Routes>
        </BrowserRouter>
    )
}