import React from 'react'

export default function Header() {
  return (
    <> <header className="container mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Emphathia</h1>
    <nav className="flex gap-12">
      <a href="/" className="hover:text-blue-300 font-bold">Home</a>
      <a href="#trailer" className="hover:text-blue-300 font-bold">About</a>
      <a href="#blog" className="hover:text-blue-300 font-bold">Blog</a>
      <a href='/game'><button className="px-4 py-0.5 bg-blue-500 rounded-full hover:bg-blue-400 font-bold">Play</button></a>
    </nav>
  </header>
  <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500"></div></>
  )
}
