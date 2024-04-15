import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React,{useState} from 'react';
import Alert from './components/Alert';
//import About from './components/About';


function App() {
  const[mode,setMode] = useState('light');//whether dark mode is enabled or not
  const[alert,setAlert]=useState("null");

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

   setTimeout(()=>{
    setAlert(null);
   },1500);

  }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#0a2351";
      showAlert("Dark mode has been enabled" , "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success")
    }
  }
  const toggleMode2=()=>{
    if(mode==="light")
    {
      setMode("green")
      document.body.style.backgroundColor="#1B4D3E";
      showAlert("Green mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success")

    }

  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}></Navbar>
      <Alert alert={alert}></Alert>
      <div className='container my-3'>
      <Form  showAlert={showAlert} heading="Enter text to analyze" mode={mode}></Form>
        {/*<About></About>*/}
      </div>
    </>
  );
}

export default App;
