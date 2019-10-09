import React, { useEffect } from 'react'

function App() {
	useEffect(() => {
		console.log('hello')
		return () => {
			console.log('unmount')
		}
	}, [])

	return <h1>ESLint Test</h1>
}

export default App
