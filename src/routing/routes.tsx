import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";


 
const router = createBrowserRouter ([

    {path : '/', element : <Layout/> , 
    children:
    [
        {index : true, element : <HomePage/>},  
         {path : 'users', element : <UsersPage/> , children: [
            {path : ':id', element : <UserDetail/>}   // rename UserDetailPage to userDetail for clarity since it's not completely represent the page
        ]},
        
    ]},
 
 
     
])



export default router;

 

 