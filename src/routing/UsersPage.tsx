import React from 'react'
import UserList from './UserList'
import { Outlet } from 'react-router-dom'

const UsersPage = () => {
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



// rename UserListPage to UserList for clarity since it's not representing the complete page
// & filename also


//  in right column we add outlet  ,because we want diffent details of userDetails component
//  depending on the current route


//  now go to routes.tsx