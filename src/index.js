import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// React router dom setup
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Redux setup
import { Provider } from 'react-redux';
import store from './reducers';
import { GameDetail } from './components/GameDetail';
import {ErrorPage} from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<ErrorPage/>,
    element: <App/>,
    children:[
      {
        path:'/game/:id',
        element:<GameDetail/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
