"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { UserButton } from '@stackframe/stack'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 border-b">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" width={120} height={120} alt="Logo" className="cursor-pointer" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          <UserButton />
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 py-4 bg-white border-t shadow">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-500">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Contact</Link>
          <UserButton />
        </div>
      )}
    </nav>
  )
}
