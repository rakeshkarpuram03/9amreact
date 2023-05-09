
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export const Menu = () => {
  const [menuitem,setMenuItem]=useState('')
  const [isMobileMenu,setIsMobileMenu]=useState(false)
  const [left,setLeft]=useState(-150)
  const getBrowserWidth=()=>{
    let timeoutId;
    let flag=true
    setIsMobileMenu(document.body.offsetWidth <600 ? true : false)
    window.addEventListener('resize',()=>{
      let width=document.body.offsetWidth
    
      if(flag){
        flag=false;
        setIsMobileMenu(width <600 ? true : false)
      }
      clearTimeout(timeoutId)
      timeoutId=setTimeout(()=>{
        setIsMobileMenu(width <600 ? true : false)
      },500)
   
    })
  }

  
  useEffect(()=>{
      let pathName=window.location.pathname
      setMenuItem(pathName.slice(1) || 'home')
      getBrowserWidth()
  },[])
  
  const fnMenuClick=(eve)=>{
       setMenuItem(eve.target.id)
       if(isMobileMenu){
        setLeft(-150)
       }
  }
  const fnMobileMenuBtnClick=()=>{
     setLeft(left === 0 ? -150 : 0)
  }
  const fnClose=()=>{
    setLeft(-150)
  }
   return (
    <div className='menu'>
      {isMobileMenu && <button onClick={fnMobileMenuBtnClick}className='mobile-menu-btn'>menu</button>}
        <ul style={{left:left}}className={isMobileMenu?"mobile-menu":"menu"}>
        <li>
        {isMobileMenu && <span onClick={fnClose}className='close-btn'>x</span>}
        <Link id="home"  className={menuitem=="home" &&"active-menu"} onClick={fnMenuClick} href="/home">Home</Link>
      </li>
      <li>
        <Link  id="about"className={menuitem=="about" &&"active-menu"} onClick={fnMenuClick}href="/about">About Us</Link>
      </li>
      <li>
        <Link  id="contact" className={menuitem=="contact" &&"active-menu"} onClick={fnMenuClick} href="/contact">contact</Link>

      </li>
    </ul>
    </div>
  )
}
