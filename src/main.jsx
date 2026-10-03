import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { CookiesProvider } from 'react-cookie';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import { FoodAppHome } from './components/food-app/food-app-home.jsx';
import { FoodAppIndex } from './components/food-app/food-app-index.jsx';
import { store } from './store/store.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </CookiesProvider>
)
