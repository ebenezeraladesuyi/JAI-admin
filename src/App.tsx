  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg'
  import { Suspense } from 'react'
  import './App.css'
import IsLoading from './pages/isLoading/IsLoading'
import Router from './router/Router'
// import { Router } from 'react-router-dom'
  // import Router from './router/router'
  // import IsLoading from './pages/isLoading/IsLoading'
  
  function App() {
  
    return (
      <>
        <Suspense fallback={<IsLoading />}>
          <Router />
        </Suspense>
      
      </>
    )
  }
  
  export default App;