import React from "react";
import bayerSYETLogo from '../imgs/bayerSYETLogo.svg';
import farmsSYETLogo from '../imgs/farmsSEYTLogo.svg';
import ndsuSEYTLogo from '../imgs/ndsuSEYTlogo.svg';
import ndsuLogo from '../imgs/ogNdsuLogo.png';
import bayerLogo from '../imgs/bayerLogo2.svg';
import farmsLogo from '../imgs/farmsLogo2.png';
import { useState, useEffect, useContext } from "react";
import { ColorScheme } from "../App";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function NavBar() {
  const [theme, setTheme ] = useState({
        'bg': "w-full h-[150px] px-[9px] py-1.5 flex justify-between items-center inline-flex max-sm:flex-wrap bg-ndsu-green",
        'button': "p-3 rounded-[10px] shadow border justify-center items-center gap-2 flex bg-ndsu-gold border-ndsu-text",
        'button_text': "text-base font-bold sans-serif leading-none text-ndsu-text"
   });
   const {ndsuColors, bayerColors, farmsColors} = useContext(ColorScheme);
   const handleCholorSchemeApp = () =>{

    if (farmsColors){
      let tempTheme = {
        'bg': "w-full h-[150px] px-[9px] py-1.5 flex justify-between items-center inline-flex max-sm:flex-wrap bg-farms-text",
        'button': "p-3 rounded-[10px] shadow border justify-center items-center gap-2 flex bg-farms-red border-farms-text",
        'button_text': "text-base font-bold sans-serif leading-none text-farms-yellow"
       }
       setTheme(tempTheme);
    }
    else if (bayerColors){
      let tempTheme = {
        'bg': "w-full h-[150px] px-[9px] py-1.5 flex justify-between items-center inline-flex max-sm:flex-wrap bg-bayer-text",
        'button': "p-3 rounded-[10px] shadow border justify-center items-center gap-2 flex bg-bayer-blue border-bayer-text",
        'button_text': "text-base font-bold sans-serif leading-none text-bayer-text"
       }
       setTheme(tempTheme);
    }
    else{
      let tempTheme = {
        'bg': "w-full h-[150px] px-[9px] py-1.5 flex justify-between items-center inline-flex max-sm:flex-wrap bg-ndsu-green",
        'button': "p-3 rounded-[10px] shadow border justify-center items-center gap-2 flex bg-ndsu-gold border-ndsu-text",
        'button_text': "text-base font-bold sans-serif leading-none text-ndsu-text"
       }
       setTheme(tempTheme); 
    }
  }
  useEffect(() => {
    handleCholorSchemeApp()
  }, [ndsuColors, bayerColors, farmsColors])

  return (<>
    <div className={theme.bg}>
      <Link className="!no-underline " to="/">
      <div className="h-60 justify-center items-center gap-[7px] flex">
        {bayerColors? <img className="w-60 rounded-[50px]" src={bayerSYETLogo} />: null }
        {ndsuColors? <img className="w-60 rounded-[50px]" src={ndsuSEYTLogo} />: null }
        {farmsColors? <img className="w-60 rounded-[50px]" src={farmsSYETLogo} />: null }
      </div>
      </Link>
      
      <div className="grow shrink basis-0 self-stretch px-[30px] justify-start items-center gap-[60px] flex">
        <Link className="!no-underline " to="location_data">
          <div className={theme.button}>
            <div className={theme.button_text}>Locational Data</div>
          </div>
        </Link>
        
        <Link className="!no-underline " to="our_model">
        <div className={theme.button}>
          <div className={theme.button_text}>About our model</div>
        </div>
        </Link>
      </div>
      <div className=" ">
        <div className="">
        {bayerColors? <img className="w-30 pr-3" src={bayerLogo} />: null }
        {ndsuColors? <img className="w-60 pr-3" src={ndsuLogo} />: null }
        {farmsColors? <img className="w-30 pr-3" src={farmsLogo} />: null }
        </div>
      </div>
    </div>

  </>
  )
}


export default NavBar;