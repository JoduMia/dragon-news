import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layouts/Main";
import Category, { catLoader } from "../Pages/Category/Category";
import Home, { homeLoader } from "../Pages/Home";
import SingleNews, { newsLoader } from "../Pages/SingleNews/SingleNews";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main/>}>
        <Route index element={ <Home /> } loader={homeLoader}/>
        <Route path="/news/:id" element={ <SingleNews /> } loader={newsLoader}/>
        <Route path="/category/:id" element={ <Category /> } loader={catLoader}/>
    </Route>
));

export default router;