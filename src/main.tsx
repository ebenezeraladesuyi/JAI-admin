import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux"
import { Store } from './global/Store.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { RouterProvider } from 'react-router-dom'
// import { element } from './router/Router.tsx'
// import IsLoading from './pages/isLoading/IsLoading.tsx'

const myclient = new QueryClient();
const persiststore = persistStore(Store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    
    {/* <Suspense fallback={<IsLoading /> */}
      {/* <App /> */}
        <Provider store={Store}>
          <PersistGate persistor={persiststore}>
            <QueryClientProvider client={myclient}>
                      <App />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
    {/* {</Suspense> */}

  </React.StrictMode>,
)
