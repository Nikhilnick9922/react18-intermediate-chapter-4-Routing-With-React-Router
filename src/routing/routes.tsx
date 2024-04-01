import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetailPage from "./UserDetailPage";
import UserListPage from "./UserListPage";
import Layout from "./Layout";


 
const router = createBrowserRouter ([

    {path : '/', element : <Layout/> , 
    children:
    [
        {index : true, element : <HomePage/>},  
        {path : 'users', element : <UserListPage/>},
        {path : 'users/:id', element : <UserDetailPage/>}
    ]},
 
 
     
])



export default router;


//  move all routes inside in the children array
// one thing is path of the children should be relative to path of the parent
//  and remove `forword slash` from path in children 
 
 // use index: true for default home location as component or path : "" , both are same


//   now update the links in NavBar