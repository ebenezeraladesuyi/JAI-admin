import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import { element } from './router/Router.tsx'
// import IsLoading from './pages/isLoading/IsLoading.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    
    {/* <Suspense fallback={<IsLoading />} > */}
      {/* <App /> */}
        {/* <Provider store={Store}> */}
          {/* <PersistGate persistor={persiststore}> */}
            {/* <QueryClientProvider client={myclient}> */}
                {/* <RouterProvider router={Router} /> */}
              {/* <ReactQueryDevtools /> */}
            {/* </QueryClientProvider> */}
          {/* </PersistGate> */}
        {/* </Provider> */}
    {/* </Suspense> */}

  </React.StrictMode>,
)
