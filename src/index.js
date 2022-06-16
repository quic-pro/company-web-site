import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TopField from './TopField';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Projects from './Projects';
import Team from './Team';
import ContactForm from './ContactForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopField/>
    <ContactUs/>
    <AboutUs/>
    <Projects/>
    <Team/>
    <ContactForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
