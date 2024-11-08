"use client"
import { useAuth, useUser } from "@clerk/nextjs"
import { useState } from "react"

export const Counter = () => {
  // const {isLoaded, isSignedIn, user} = useUser();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log('Counter Component')
  const [count, setCount] = useState(0)

  if(!isLoaded || !userId){
    return null
  }

  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}
