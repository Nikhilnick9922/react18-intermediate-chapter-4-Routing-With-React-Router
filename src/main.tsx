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
        
        <RouterProvider router={router} />   {/*  Provide the context for sharing router with our application  */}

       
        <ReactQueryDevtools/>
    </QueryClientProvider>
</React.StrictMode>
);

 

//  INstaead of rendring component like app, we let Router Provdier decide which 
// component they want to render , depending on the the user's location
//  this is idea of routing 