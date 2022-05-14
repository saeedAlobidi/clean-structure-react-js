
import './App.css';
import React, { Component ,lazy} from 'react';
import Html from './App.html.jsx';
import { BrowserRouter, Routes, Route,Navigate   } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import lazyLoadFactor from '../../../Core/LazyLoad'
import ProtectedRoute from '../../../Core/ProtectedRoute'
import Nav from '../../Component/Header/index'
import Footer from '../../Component/Footer/index'
const HomePage = lazy(() => import("../Page1/index"));
const ReactLogo= lazy(() => import("../Page2/index"));
const NotFound = lazy(() => import("../Page3/index"));
 
export default
     () => {
    const _html =

        <div className="App">  
           
          {
                <BrowserRouter>
                
                    <Routes>
                        <Route path="/" exact element={lazyLoadFactor(ProtectedRoute(HomePage))} />
                        <Route path="/ReactLogo" exact element={lazyLoadFactor(ProtectedRoute(ReactLogo))} />
                        <Route path="/NotFound" exact element={lazyLoadFactor(NotFound)} />
                        <Route path="*" element={<Navigate to="/NotFound" />} />
                    </Routes>
                      
                </BrowserRouter>
          }
           
        </div>




    return _html
}
