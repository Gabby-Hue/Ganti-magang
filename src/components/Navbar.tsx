'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = ['hero', 'about', 'skills', 'events', 'projects', 'contact'];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">
        <p className="font-bold tracking-widest text-tropical">MOONJUNGLE</p>
        <div className="hidden gap-6 md:flex">{links.map((l)=><a key={l} href={`#${l}`} className="text-sm capitalize hover:text-tropical">{l}</a>)}</div>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </nav>
      {open && <div className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-4 md:hidden">{links.map((l)=><a key={l} href={`#${l}`} onClick={()=>setOpen(false)} className="block py-2 capitalize">{l}</a>)}</div>}
    </header>
  );
}
