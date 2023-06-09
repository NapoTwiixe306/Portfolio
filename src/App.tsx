import React from 'react';
import { HomePage, MySkillPage, AboutMe,Contact  } from './Components';
import './scss/style.scss';

function App() {
  return (
   <>
      <HomePage/>
      <MySkillPage/>
      <AboutMe/>
      <Contact/>
   </>
  );
}

export default App;
