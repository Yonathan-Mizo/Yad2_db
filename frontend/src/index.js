<<<<<<< HEAD
=======

>>>>>>> d3673a580193d911cdce1a3e1442ad5e3d20de7a
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import './index.css';
// import ReactDOM from 'react-dom';

const container = document.getElementById('root');
//ReactDOM.render(<App />, container)
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
=======
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
>>>>>>> d3673a580193d911cdce1a3e1442ad5e3d20de7a
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals();
=======



// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
// import './index.css'

// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App tab="home" />);

// // ReactDOM.render(<App />, document.getElementById("root"))

>>>>>>> d3673a580193d911cdce1a3e1442ad5e3d20de7a
