import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";


 
const router = createBrowserRouter ([

    
    {path : '/', element : <Layout/> ,
    errorElement : <ErrorPage/>,  
    children:
    [
        {index : true, element : <HomePage/>},  
        {path : '/login', element :  <LoginPage/>},    
    //      {path : 'users', element : <UsersPage/> , children: [
    //         {path : ':id', element : <UserDetail/>}    
    //     ]
    // }
     
        
    ]},
    {
        element : <PrivateRoutes/>,
        children : [
            {path : 'users', element : <UsersPage/> , children: [
                {path : ':id', element : <UserDetail/>}    
            ]
        }
        ]
    }
 
 
     
])



export default router;

 
//  creating route next to our root route
 
// now here we don't set the path , because this is layout route
// it's purpose is to group routes for enfrocing layout or buisiness rules

// in children route we put any routes that need to be protected , example users route , move here



// with this our application is working exactly like before
// but we have implimented this login in a single place , this is benefit of using layout route