import {   createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";


 
const router = createBrowserRouter ([
    {path : '/', element : <HomePage/>},  // what we want to render on path
    {path : '/users', element : <UserListPage/>},
    {path: '/contact' , element : <ContactPage/>}
])



export default router;


//   added contactPage , in this component on submit we want user to redirect to homepage