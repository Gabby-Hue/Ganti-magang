'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { events } from '@/data/portfolio';
import { SectionWrapper } from '../ui/SectionWrapper';

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  return (
    <SectionWrapper id="events">
      <h2 className="section-title">Events &amp; Certificates</h2>
      <motion.div drag="x" dragConstraints={{ left: -900, right: 0 }} className="mt-8 flex gap-6 overflow-hidden pb-4">
        {events.map((e) => (
          <article key={e.title} className="glass min-w-[300px] max-w-[340px] snap-center rounded-2xl">
            <Image src={e.image} alt={e.title} width={400} height={220} className="h-44 w-full rounded-t-2xl object-cover" />
            <div className="p-4">
              <p className="text-xs text-[#5ebd8a]">{e.year}</p>
              <h3 className="mt-1 font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-white/75">{e.description}</p>
              {e.certificate !== '#' ? (
                <a href={e.certificate} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block rounded-full border border-[#5ebd8a] px-4 py-2 text-sm text-[#5ebd8a] transition hover:bg-[#5ebd8a]/10">
                  Preview Certificate
                </a>
              ) : (
                <button onClick={() => setSelectedEvent(e)} className="mt-3 inline-block rounded-full border border-[#5ebd8a] px-4 py-2 text-sm text-[#5ebd8a] transition hover:bg-[#5ebd8a]/10">
                  Preview Certificate
                </button>
              )}
            </div>
          </article>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#071f14] border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition"
              >
                <X size={20} />
              </button>
              
              <div className="relative min-h-[50vh] h-[70vh] w-full bg-black/50">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#5ebd8a]">{selectedEvent.title}</h3>
                <p className="mt-2 text-white/80 leading-relaxed">{selectedEvent.description}</p>
                <p className="mt-2 text-sm font-medium text-[#5ebd8a]">{selectedEvent.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
