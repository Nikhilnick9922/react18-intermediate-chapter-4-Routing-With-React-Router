import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    // console.log(error)
 const  isInvalidPage  = isRouteErrorResponse(error) // if this is true , that means user tries to access invalid route
  return (
    <>
      <h1>Oops...</h1>
      {/* <p>Sorry, an unexpected error has occurred.</p> */}
     <p> {isInvalidPage ? ' Invalid Page':     'Sorry, an unexpected error has occurred '}</p>
    </>
  );
};

export default ErrorPage;


//  we can log the error with useRouteError

//  Le'ts take it to the next level ,
// we want to differenciat , between errror thrown in application 
// and invalid routes  , suppose user hit invalid route we want to
// show them this page does not exist , we can call function isRouteErrorResponse