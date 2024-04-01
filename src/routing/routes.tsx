import {   createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";


 
const router = createBrowserRouter ([
    {path : '/', element : <HomePage/>},  // what we want to render on path
    {path : '/users', element : <UserListPage/>},
])



export default router;



//  now go to main.tsx and replace app with RouterProvider

//  on click on users , there is user's list , now we have multiple pages in our appication


