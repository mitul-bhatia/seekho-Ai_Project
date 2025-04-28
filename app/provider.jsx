"use client"
import React from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import Authprovider from './authprovider';
import { Suspense } from 'react';
const Provider = ({ children}) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <div>
        <div><ConvexProvider client={convex}>

        

        <Suspense fallback={<div>Loading Auth...</div>}>
          <Authprovider>
            {children}
          </Authprovider>
        </Suspense>
      
         
          </ConvexProvider></div>
      
    </div>
  )
}

export default Provider
