import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "../components"
import { Home, Products, Categories } from "../pages"

export const Router = () => {
    return (
        <BrowserRouter>
           <NavBar userName="Mfrancischini" />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products/category/:id" element={<Categories></Categories>}></Route>
                <Route path="/products/:id" element={<Products></Products>}></Route>
            </Routes>
        </BrowserRouter>
    )
}