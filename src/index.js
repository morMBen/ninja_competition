import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function resetHeight() {
  // reset the body height to that of the inner browser
  document.body.style.height = window.innerHeight + 'px';
}
// reset the height whenever the window's resized
window.addEventListener('resize', resetHeight);
// called to initially set the height.
resetHeight();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
