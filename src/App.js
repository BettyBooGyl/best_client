import logo from './logo.svg';
import './App.css';
import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
import ndsuLogo from './imgs/ogNdsuLogo.png';
import bayerLogo from './imgs/bayerLogo.svg';
import farmsLogo from './imgs/farmsLogo2.png';
import dataDivasLogo from './imgs/DataDivasLogo.png';
import NavBar from './components/NavBar';
import LocationalData from './pages/LocationalData';
import LandingPage from './pages/LandingPage';
import AboutModel from './pages/AboutModel';
export const ColorScheme = createContext();

function App() {
  const [ ndsuColors, setNdsuColors ] = useState(true);
  const [ bayerColors, setBayerColors ] = useState(false);
  const [ farmsColors, setFarmsColors ] = useState(false);
  const [theme, setTheme ] = useState({
    'bg': "min-h-full max-w-screen bg-bayer-bg",
    'footer': "min-w-full bottom-0 py-0  gap-5 px-5 flex justify-between items-center inline-flex max-md:flex-wrap bg-farms-yellow"
   });
  const handleCholorSchemeApp = () =>{

    if (farmsColors){
      let tempTheme = {
        'bg': "min-h-full max-w-screen bg-bayer-bg",
        'footer': "min-w-full bottom-0 py-0  gap-5 px-5 flex justify-between items-center inline-flex max-md:flex-wrap bg-farms-yellow"
       }
       setTheme(tempTheme);
    }
    else if (bayerColors){
      let tempTheme = {
        'bg': "min-h-full max-w-screen bg-bayer-bg",
        'footer': "min-w-full bottom-0 py-0  gap-5 px-5 flex justify-between items-center inline-flex max-md:flex-wrap bg-bayer-blue"
       }
       setTheme(tempTheme);
    }
    else{
      let tempTheme = {
        'bg': "min-h-full max-w-screen bg-ndsu-bg",
        'footer': "min-w-full bottom-0 py-0  gap-5 px-5 flex justify-between items-center inline-flex max-md:flex-wrap bg-ndsu-gold"
       }
       setTheme(tempTheme); 
    }
  }
  const handleNDSUToggle = () => {
    setNdsuColors(true);
    setBayerColors(false);
    setFarmsColors(false);
    
};
const handleBayerToggle = () => {
    setBayerColors(true);
    setFarmsColors(false);
    setNdsuColors(false);
};
const handleFarmsToggle = () => {
    setFarmsColors(true);
    setNdsuColors(false);
    setBayerColors(false);

};
  const appSetup = async() => {
    
  }
  useEffect(() => {
    handleCholorSchemeApp()
  }, [ndsuColors, bayerColors, farmsColors])
  return (
    <>
    <ColorScheme.Provider value={{ndsuColors, bayerColors, farmsColors}}>

      <Router>
        <div className={theme.bg}>
          <main>
                    
            <NavBar></NavBar>
            <div className="min:h-screen h-screen">
                  <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/location_data" element={<LocationalData/>}></Route>
                    <Route path="/our_model" element={<AboutModel/>}></Route>
                  </Routes>
                </div>
          </main>
            <footer className={theme.footer}>
              <img className="w-[107px] h-[97px]" src={dataDivasLogo} />
              <img className="w-52 h-8" onClick={handleNDSUToggle} src={ndsuLogo}/>
              <img className="w-[98px] h-[45px]" onClick={handleFarmsToggle} src={farmsLogo} />
              <div className="w-[76px] h-[76px] relative" onClick={handleBayerToggle}>
                  <div className="w-[76px] h-[76px]">
                      <img className="" src={bayerLogo} />
                  </div>
              </div>
          </footer>
        </div>
      </Router>
    </ColorScheme.Provider>
    </>
  );
}

export default App;
