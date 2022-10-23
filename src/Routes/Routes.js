import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layouts/Main";
import TermsAndCondition from "../others/TermsAndCondition/TermsAndCondition";
import Category, { catLoader } from "../Pages/Category/Category";
import Home, { homeLoader } from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleNews, { newsLoader } from "../Pages/SingleNews/SingleNews";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main/>}>
        <Route index element={ <Home /> } loader={homeLoader}/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='/updateprofile' element={ <UpdateProfile /> }/>
        <Route path='/terms' element={ <TermsAndCondition /> }/>
        <Route path="/news/:id" element={ <PrivateRoute><SingleNews /></PrivateRoute> } loader={newsLoader}/>
        <Route path="/category/:id" element={ <Category /> } loader={catLoader}/>
    </Route>
));

export default router;