
import './App.css';
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import Alert from './Components/Alert'
//import About from './Components/About'
import React , { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


//import About from './Components/About'

function App() {
  var [mode , setMode]  =  useState('light'); 
  const [alert , setalert] = useState(null);

  const showAlert = (message , type) =>{
    setalert({
      msg : message,
      type : type
    })

    setTimeout(() =>{
      setalert(null);
  }, 2000);

  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('dark mode has been enabled','success');

      // setInterval(()=>{
      //   document.title = "textUtils is amazing"
      // },2000)

      // setInterval(()=>{
      //   document.title = "install textUtils now!"
      // },1500)
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled','success');
    }
  }

  return (
<>
  <Navbar title = "TextUtils2" Abouttext ="About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container my-3"> 
        {/* <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
              <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
              </Route>
        </Switch> */}
 <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
  {/* <About/> */}
</div>

</>
  );
}


export default App;
