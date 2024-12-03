import React, { useState } from 'react'
import '../Style/ToggleBar.scss'

const UseEffectToggle = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () =>{
    setIsOpen((prev)=>(!prev))
  }
 
  return (
    <div>
      <button onClick={handleMenu}>☰</button>
      <div className={`sidebar${isOpen ? " open" : ""}`}>
        <button onClick={handleMenu}>☰</button>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>

      <div className='content' style={{marginLeft: isOpen? '300px': '0', padding:'20px'}}>
        <h1 style={{textAlign:'center',color:'black'}}>Heading</h1>
        <p style={{textAlign:'center'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Dolorem dignissimos eum totam, autem fugit dolores sed natus! Amet, soluta mollitia!
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis vero error amet harum iste nisi dolorem nihil aspernatur atque aliquid!</p>
      </div>
    </div>
  );
};

export default UseEffectToggle