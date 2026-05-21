'use client';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { SectionWrapper } from '../ui/SectionWrapper';

export function SkillsSection() {
  return <SectionWrapper id="skills"><h2 className="section-title">Skills & Tech Stack</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{skills.map((s,i)=><motion.div key={s.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.04}} className="glass rounded-2xl p-5"><div className="mb-2 flex justify-between"><span>{s.name}</span><span>{s.level}%</span></div><div className="h-2 rounded-full bg-white/20"><div style={{width:`${s.level}%`}} className="h-2 rounded-full bg-tropical shadow-glow"/></div></motion.div>)}</div></SectionWrapper>;
}
