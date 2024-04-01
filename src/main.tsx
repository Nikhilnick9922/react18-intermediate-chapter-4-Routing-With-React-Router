import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // imported 
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routing/Routes';
 
 

 

const queryClient = new QueryClient(); 

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
<React.StrictMode>
    <QueryClientProvider client={queryClient}>
        
        <RouterProvider router={router} />   {/*  Provide the context for sharing router with our application  */}

       
        <ReactQueryDevtools/>
    </QueryClientProvider>
</React.StrictMode>
);

 
//   4. Passing Data with Route Parameters


//  so we have learned to setup static routes  like users or contacts
//  sometimes we need to handle the dynamic routes and passed data to our components throught the url

//  like clcking on user `Mosh` we want to pass user id `1` in the url


//  so go to routes.tsx