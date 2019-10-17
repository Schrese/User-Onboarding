import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import MyForm from './components/myForm.js';

function App() {
  return (
    <div className="App">
      <h1>Ready to Enter the Matrix?</h1>
        <MyForm />
      {/* <header className="App-header"> */}
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
