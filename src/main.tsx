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

 
//     10. Private Routes 


//  in real world we often needs to restrict access to certain routes 
//  to authenticated or loged in users , this are private routes 


//  example , we want to show the usersPage only to authenticated user

//  in hooks -> useAuth.ts  - we have hook for getting the current user 



// finally 
//  this appoach is not very scalable  ,every time we want to protect the route
// first we have to call authHook and check if user then we should redirect the user to login page 
// we don't want to repeat this in seperal components in application, so next we gonna se
// how to use Layout in elegant way to solve this problem