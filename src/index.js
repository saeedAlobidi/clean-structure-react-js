import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import App from './Presentation/Feature/MasterPage/App';
import ThingsContextProvider from './Context/ThingsContextProvider'
import {Provider } from 'react-redux'
import Store from './Domain/Entities/Core/configureStore'
const root = ReactDOM.createRoot(document.getElementById('root'));

//share data beteen children 


root.render(
  //<React.StrictMode>
    <Provider store={Store()}>
      <ThingsContextProvider >
      <App />
      </ThingsContextProvider>
    </Provider>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
