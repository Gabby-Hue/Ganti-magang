'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';

export function Effects(){
 useEffect(()=>{const lenis=new Lenis({duration:1.2,smoothWheel:true}); let raf:number; const loop=(time:number)=>{lenis.raf(time); raf=requestAnimationFrame(loop)}; raf=requestAnimationFrame(loop); return ()=>{cancelAnimationFrame(raf); lenis.destroy();};},[]);
 return <div className="pointer-events-none fixed inset-0 z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(94,189,138,0.06),transparent_55%)]"/>;
}
