import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { CreateBookForm } from "../components/createBookForm";
import { UpdateBookForm } from "../components/editBookForm";
import Home from "../pages/home"; 

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="book">
                    <Route path="add" element={<CreateBookForm/>}/>
                    <Route path=":id/edit" element={<UpdateBookForm/>}/>
                </Route>
            </Routes>     
        </BrowserRouter>
    )
}