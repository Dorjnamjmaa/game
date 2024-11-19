'use client'
import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Emphathia</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12">
          <a href="/" className="hover:text-blue-300 font-bold">Home</a>
          <a href="#trailer" className="hover:text-blue-300 font-bold">About</a>
          <a href="#blog" className="hover:text-blue-300 font-bold">Blog</a>
          <a href="/game">
            <button className="px-4 py-0.5 bg-blue-500 rounded-full hover:bg-blue-400 font-bold">Play</button>
          </a>
        </nav>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden flex items-center text-blue-500" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white w-full px-6 py-4 flex flex-col gap-4">
          <a href="/" className="hover:text-blue-300 font-bold">Home</a>
          <a href="#trailer" className="hover:text-blue-300 font-bold">About</a>
          <a href="#blog" className="hover:text-blue-300 font-bold">Blog</a>
          <a href="/game">
            <button className="px-4 py-0.5 bg-blue-500 rounded-full hover:bg-blue-400 font-bold">Play</button>
          </a>
        </nav>
      )}

      <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500"></div>
    </>
  );
}
