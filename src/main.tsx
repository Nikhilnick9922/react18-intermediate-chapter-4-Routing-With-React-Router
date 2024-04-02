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

 
//     11. Layout Routes



//  sometimes we need to group routes for enforcing layout , or business rules
// this is where we use layout routes


//  go to UsersPage.tsx