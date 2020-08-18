import React from 'react';
import './App.css';
import {ProfilPhoto} from './profile/ProfilPhoto.js';
import {FullName} from './profile/FullName.js';
import {Address} from './profile/Address.js';

function Main() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default Main;
