import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import AuthProvider from './context/AuthProvider.jsx'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
   <QueryClientProvider client={queryClient}>
      
    <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
  
  
)
