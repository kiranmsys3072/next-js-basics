import React from 'react'
import Link from "next/link"

const NavBar = () => {
  return (
    <div>
        <ul>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

        </ul>
    </div>
  )
}

export default NavBar