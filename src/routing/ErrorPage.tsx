import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
  const  isInvalidPage  = isRouteErrorResponse(error)  
  return (
    <>
      <h1>Oops...</h1>
      <p> {isInvalidPage ? ' Invalid Page':     'Sorry, an unexpected error has occurred '}</p>
    </>
  );
};

export default ErrorPage;

 