import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home/Home'
import App from '../../App'
import TermsAndConditions from '../Terms and Conditions/Terms and Conditions'
import CancellationPolicy from '../CancellationPolicy/CancellationPolicy'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'

export default function Router() {

    const routs = createBrowserRouter([
        { 
            path :"/", 
            element : <App/> ,
            children : [
                {
                    path : "/",
                    element :<Home/>
                },
                {
                    path : "/TermsandConditions",
                    element : <TermsAndConditions/>
                },
                {
                    path : "/CancellationPolicy",
                    element : <CancellationPolicy/>
                },
                {
                    path : "/PrivacyPolicy",
                    element : <PrivacyPolicy/>
                }
            ]
        }
    ])
  return (
  <>
  <RouterProvider router={routs}></RouterProvider>
  </>
  )
} 
