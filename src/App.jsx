
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import Job from './pages/Job'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'
import MyJobs from './pages/MyJobs'
import JobListing from './pages/JobListing'
import { ThemeProvider } from './components/ui/theme-provider'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
 const router=createBrowserRouter([
{
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Landing/>
    },
    {
      path:'/onboarding',
      element:(
        <ProtectedRoute>
          <Onboarding/>
        </ProtectedRoute>
    )
    },
   
    {
      path:'/job/:id',
      element:(
        <ProtectedRoute>
         <Job/>
        </ProtectedRoute>
      )
    },
    {
      path:'/jobs',
      element:(
         <ProtectedRoute>
         <JobListing/>
         </ProtectedRoute>
      )
    },
    
    {
      path:'/postjob',
      element:( <ProtectedRoute>
               <PostJob/>
               </ProtectedRoute>)
    },
    {
      path:'/savedjob',
      element: (<ProtectedRoute>
               <SavedJobs/>
               </ProtectedRoute>)
    },
    {
      path:'/myjobs',
      element:(<ProtectedRoute>
              <MyJobs/>
             </ProtectedRoute>)
    },
   
  ]
}
 ])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
  </ThemeProvider>


  )
}

export default App
