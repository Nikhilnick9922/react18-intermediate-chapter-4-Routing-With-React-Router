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
        
        <RouterProvider router={router} />   

       
        <ReactQueryDevtools/>
    </QueryClientProvider>
</React.StrictMode>
);

 
//   5. Getting Data about the Current Route   

// sometimes we just want which page we are on , and what parameter values passed in url 
// we have hook for that 
//  go to userDetailsPage