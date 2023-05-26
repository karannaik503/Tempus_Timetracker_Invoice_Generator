import React from 'react';
import Employer_Header from "./TimeSheet/TimeSheet_Header.js";
import TimeSheet_Hero from "./TimeSheet/TimeSheet_hero.js";
import TimeSheet_Footer from "./TimeSheet/TimeSheet_Footer.js";
import './TimeSheet/freelancer_timesheet.css';

function Freelancer_TimeSheet() {
  return (
    <div className="business-mode">
      <Employer_Header/>
      <TimeSheet_Hero/>
      <TimeSheet_Footer/>
    </div>
  );
}

export default Freelancer_TimeSheet;