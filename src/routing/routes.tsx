import {   createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";


 
const router = createBrowserRouter ([
    {path : '/', element : <HomePage/>},  
    {path : '/users', element : <UserListPage/>},
    {path : '/users/:id', element : <UserDetailPage/>},    
    // after adding this go to UserListPage

 
     
])



export default router;


 

//  we can have posts like `/posts/:year/:month`


//  in previous version react-router-dom, we have to define most specific first 
// now in newwer version that is not the case 

//  now changes made , in others , we can click on the user to pass the data to the 
// target page