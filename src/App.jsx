import { use, useEffect, useState } from 'react'
import './App.css'
import User from './assets/components/user'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import Welcome from './assets/components/status_components/welcome'
import Repos from './assets/components/repos'

function App() {
  const [userData, setUserData] = useState(null);

  const handleData = (data) => {
    setUserData(data);
  };

  return (
    <div className='github-profile-container'>

      <Header sendData = { handleData }/>
      { userData ? <User user = { userData } /> : <Welcome /> }
      <Footer />

    </div>
  );
}

export default App
