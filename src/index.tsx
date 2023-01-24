import './style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import BannerCookie from './components/BannerCookie';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import {reportWebVitals} from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Header/>
        <Content/>
        <Footer/>
        <BannerCookie/>
    </React.StrictMode>,
);


reportWebVitals();
