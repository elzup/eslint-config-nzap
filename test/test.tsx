import React, { useEffect } from 'react'

const Span = () => {
  return <span>Hello</span>
}

function App() {
  useEffect(() => {
    console.log('hello')
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div>
      <h1>ESLint Test</h1>
      <Span />
      {1 + 2}
    </div>
  )
}

export default App
