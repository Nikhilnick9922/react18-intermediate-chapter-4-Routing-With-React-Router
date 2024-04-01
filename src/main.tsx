import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // imported 
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routing/routes';
  
 

 

const queryClient = new QueryClient(); 

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
<React.StrictMode>
    <QueryClientProvider client={queryClient}>
        
        <RouterProvider router={router} />   

       
        <ReactQueryDevtools/>
    </QueryClientProvider>
</React.StrictMode>
);

 
//    9. Handling Errors

//  what if we hit invalid route like `userX`

// then it shows generic error page , but we can easily replace with our own

//  routing -> errorPage..tsx     we already has this 
// but to use this , we have to go to routes.tsx file  and set 
// errorElement proprerty to ErrorPage