import React, {useState, useEffect, useRef} from 'react';
import './dropdown.css';
import { Link } from "react-router-dom";

function DropDown() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="dropdown">
      <div className='menu-container-dropdown' ref={menuRef}>
        <div className='menu-trigger-dropdown' onClick={()=>{setOpen(!open)}}>
          <img src="./images/profile-icon.jpg"/>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <img src="./images/profile-icon.jpg"/>
          <ul>
            <DropdownItem img = './images/img/edit.png' text = {"Edit Profile"}/>
            <DropdownItem img = './images/img/settings.png' text = {"Settings"}/>
            <DropdownItem img = './images/img/question.png' text = {"Helps"}/>
            <Link to="/logout"><DropdownItem img = './images/img//log-out.png' text = {"Logout"}/></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default DropDown;