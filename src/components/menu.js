import React from 'react'
import Link from 'next/link';

export const Menu = () => {
  return (
    <div className='menu'>
        <ul>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/bcontact">contact</Link>
      </li>
    </ul>

    </div>
  )
}

