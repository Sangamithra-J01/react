import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>React + Vite</h1>
      <p>Welcome! Click the counter to test hot reload.</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  )
}
