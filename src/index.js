import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';
import { Provider } from 'react-redux';
import { store } from './rtk/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Responsive/responsive.css';
import 'animate.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
