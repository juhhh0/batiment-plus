import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black text-white flex py-10'>
        <div className='flex-1 flex justify-center'>
            <img className='w-20' src="/next.svg" alt="" />
        </div>
        <div className='flex-1 flex justify-center'>
            <ul>
                <li><Link href={"/"}>Accueil</Link></li>
                <li><Link href={"/"}>Services</Link></li>
                <li><Link href={"/"}>A propos</Link></li>
                <li><Link href={"/"}>Contact</Link></li>
            </ul>
        </div>
    </footer>
  )
}
