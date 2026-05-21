'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { events } from '@/data/portfolio';
import { SectionWrapper } from '../ui/SectionWrapper';

export function EventsSection() {
  return <SectionWrapper id="events"><h2 className="section-title">Events & Certificates</h2><motion.div drag="x" dragConstraints={{left:-900,right:0}} className="mt-8 flex gap-6 overflow-hidden pb-4">{events.map((e)=><article key={e.title} className="glass min-w-[300px] max-w-[340px] snap-center rounded-2xl"><Image src={e.image} alt={e.title} width={400} height={220} className="h-44 w-full rounded-t-2xl object-cover"/><div className="p-4"><p className="text-xs text-tropical">{e.year}</p><h3 className="mt-1 font-bold">{e.title}</h3><p className="mt-2 text-sm text-white/75">{e.description}</p><a href={e.certificate} className="mt-3 inline-block rounded-full border border-tropical px-4 py-2 text-sm">Preview Certificate</a></div></article>)}</motion.div></SectionWrapper>;
}
