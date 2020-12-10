import React from 'react';
import './style.css'

function NavBar() {
  return (

    <>
      <div className="sidebar">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className="content">
        ..
  </div>
    </>


  );

};


export default NavBar;