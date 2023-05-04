import React ,{useState,useEffect} from 'react'
import Link from 'next/link';

export const Menu = () => {
  const [menuitem,setmenuitem]=useState('')
  useEffect(()=>{
 let Pathname=window.location.pathname
 setmenuitem(Pathname.slice(1)||"home")
  },[])
  const fnmenuclick=(eve)=>{
    setmenuitem(eve.target.id)
  }
  return (
    <div className='menu'>
        <ul>

      <li>
        <Link id="home"  className={menuitem=="home" &&"active-menu"}onClick={fnmenuclick} href="/home">Home</Link>
      </li>
      <li>
        <Link  id="about"className={menuitem=="about" &&"active-menu"} onClick={fnmenuclick}href="/about">About Us</Link>
      </li>
      <li>
        <Link  id="contact" className={menuitem=="contact" &&"active-menu"}onClick={fnmenuclick} href="/contact">contact</Link>
      </li>
    </ul>

    </div>
  )
}

