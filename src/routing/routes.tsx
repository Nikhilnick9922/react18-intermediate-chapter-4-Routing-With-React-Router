import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";


 
const router = createBrowserRouter ([

    {path : '/', element : <Layout/> ,
    errorElement : <ErrorPage/>, // here set prperty 
    children:
    [
        {index : true, element : <HomePage/>},  
         {path : 'users', element : <UsersPage/> , children: [
            {path : ':id', element : <UserDetail/>}   // rename UserDetailPage to userDetail for clarity since it's not completely represent the page
        ]},
        
    ]},
 
 
     
])



export default router;

 

 // this changes made it very easy , as compared to previous versions 
 // after 6 version this changes implimented

//  this has another benefit  , with this anytime our application throws an error,
// react-router will catch it and render the errorPage

//  to see this in action go to homePage.tsx and throw new error