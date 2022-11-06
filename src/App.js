//  import logo from './logo.svg';
import './App1.css';
 import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
//  import{
//    BrowserRouter as Router,
//    Routes,
//    Route,
//     Link
//    } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success")
      document.title = 'TextUtils - Dark Mode'
       setInterval(() => {
        document.title='TextUtils Is Amazing'
       }, 2000);
       setInterval(() => {
         document.title='Install TextUtils Now'
       }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* <Routes>
        <Route path="/about" > */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route path="/"> */}

        <TextForm heading="Enter The Text To Analyze Below" mode={mode} showAlert={showAlert} />
        {/* </Route> */}
        {/* </Routes> */}

      </div>

      {/* </Router> */}
    </>
  );
}

export default App;    