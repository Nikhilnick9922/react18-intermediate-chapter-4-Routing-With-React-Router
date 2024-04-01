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

 
//   3. Navigation


// there is problem with users link - look at in network tab
//  it's full page reload , this is default behavior  of `anchor` elements in html

//  this is not the best place to navigate the users
// instead of getting  the entire page  , we want to replace only content in this area
// so we want to replace content of home page component - > with user list componet 



// got to  homepage.tsx
