import { Link } from "react-router-dom";

const HomePage = () => {
  // throw new Error('something failed');
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      <Link to={'/users'}>Users</Link>
     </>
  );
};

export default HomePage;


 

//  we see error Page

// but in real world we should capture this error and log it somewhere , 
// using loginService , many out there like Sentry

//  Let's see how can we grab thrown error
//  go to errorPage.tsx