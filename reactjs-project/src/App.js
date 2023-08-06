import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Alert from './Components/Alert';
import { useState } from 'react';
import Footer from './Components/Footer';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Navbar home="Home" about="About" />
      <Alert alert={alert} />
      <Signup alert={showAlert} />
      <Footer />
    </>
  );
}

export default App;
