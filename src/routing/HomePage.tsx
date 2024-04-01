import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      <Link to={'/users'}>Users</Link>
      {/* <a href="/users">Users</a> */}
    </>
  );
};

export default HomePage;


//  we used link for anchor 

// we can also take user from one page to another programatically

//  go to routers.tsx
