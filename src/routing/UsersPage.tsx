import { Navigate, Outlet } from 'react-router-dom'
import UserList from './UserList'
import useAuth from './hooks/useAuth'

const UsersPage = () => {
    
  //  here grab the user object that's retuned heree
  const {user} = useAuth();
  if(!user)      
  return <Navigate to='/login'/>     

  return (
     <div className="row">
        <div className="col">
            <UserList/>
        </div>
        <div className="col">
    <Outlet/>
        </div>
     </div>
  )
}

export default UsersPage



 

//  if (!user) we should redirect user to login page, 
// but cannot user navigate here because it has side effect  , it updates url in the browser
// we cannot call it in render phase , the this component will not be pure component
// so we should call navigate in event handlers or inside an effect 
// here we don't wannt an effect because it wiill run after render phase, 
// here we don't want to render the page then redirect the user 
//  so to solve this problem we should return natigate component <Navigate/>
// this is wrapper around the navigate function 

  // after this define the route for login page in routes.tsx          