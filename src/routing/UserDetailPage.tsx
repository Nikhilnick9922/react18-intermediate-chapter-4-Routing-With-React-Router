import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
    const params = useParams()
    const [searchParams , setSearchParams] = useSearchParams();
  // console.log(searchParams.toString())
  // console.log(searchParams.get('age'))
   const location = useLocation()
   console.log(location)
  
  return <p>User</p>;
};

export default UserDetailPage;



// value is string , so  we have to parse the value


//  added ?name=Nicks&age=24 in url to get searchparams , but remember to add 
// .toString() method on search
//  we can access individual by using .get method


//  with setSearchParams we can able to update the querystring parameters , but 
// you really have to be carefull with that because this function has a sideeffects
//  as we have learn our component should be pure , they should  not have any side effect 
// while rendering, so call this function only inside event handlers or in `effects`s

//  we also have useLocation for pathname , search  and so on




//  so using this 3 hook we can get information about the current routes