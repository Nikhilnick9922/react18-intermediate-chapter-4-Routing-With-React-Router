import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;


//  we have basic navigation bar to take user to home , and users pages
// nothing fancy

// outlet like placeholder for child component, so at the run time depeding on 
// users location different component will be rendered in outlet

//  now go to routes.tsx  configuration file and create nested structure