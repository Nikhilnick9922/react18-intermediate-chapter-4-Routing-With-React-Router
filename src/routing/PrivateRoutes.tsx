import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const PrivateRoutes = () => {

    const {user} = useAuth();
    if(!user)      
    return <Navigate to='/login'/>     


  return (
            <Outlet/> 
    )
}

export default PrivateRoutes



//  moved logic for usersPage to PrivateRoute.tsx
// if user is authorised then we will render the child component in outllet

//  now go to routes file and create new route next to our new route