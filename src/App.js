import React, {useState} from 'react';
import './App.css';
import './index.css';
import Alexa from './Alexa';
import Mainpage from './Mainpage';

function AlexaFeature() {

  const [Flag,setFlag] = useState(false);
  const [Disclosure,setDisclosure] = useState(null);

  return (
    <div>
      {!Flag &&
      <Mainpage setFlag={setFlag} setDisclosure={setDisclosure} />}

      {Flag &&
      <Alexa Disclosure={Disclosure} setFlag={setFlag} />}
    </div>
  );
  
}

export default AlexaFeature;