"use client"
import { useState } from "react"

export const Counter = () => {
  console.log('Counter Component')
  const [count, setCount] = useState(0)

  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}
