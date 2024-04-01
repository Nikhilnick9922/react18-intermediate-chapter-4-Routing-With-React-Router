import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetail from "./UserDetail";
import UserList from "./UserList";
import Layout from "./Layout";
import UsersPage from "./UsersPage";


 
const router = createBrowserRouter ([

    {path : '/', element : <Layout/> , 
    children:
    [
        {index : true, element : <HomePage/>},  
        // {path : 'users', element : <UserList/>},
        {path : 'users', element : <UsersPage/> , children: [
            {path : ':id', element : <UserDetail/>}   // rename UserDetailPage to userDetail for clarity since it's not completely represent the page
        ]},
        
    ]},
 
 
     
])



export default router;

 

//  change UserList to userspage , then we add children property and move UserDetailsPage inside that 

// and rename UserDetailPage to UserDetail


//  now go to userDetail page and params.id