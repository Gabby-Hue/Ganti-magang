import { MapPin, Github, Phone, Mail } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';

export function ContactSection() {
  return (
    <SectionWrapper id="contact" disableReveal>
      <div className="grid gap-6 lg:grid-cols-2">
        <form className="glass rounded-2xl p-6">
          <h2 className="section-title text-3xl">Contact Me</h2>
          <div className="mt-4 space-y-3">
            <input placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 focus:border-[#5ebd8a] focus:outline-none transition" />
            <input placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 focus:border-[#5ebd8a] focus:outline-none transition" />
            <textarea rows={5} placeholder="Message" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 focus:border-[#5ebd8a] focus:outline-none transition" />
          </div>
          <button className="mt-4 rounded-xl bg-[#5ebd8a] px-5 py-3 font-semibold text-[#071f14] shadow-glow transition hover:bg-[#3da872]">Send Message</button>
        </form>
        <aside className="glass rounded-2xl p-6">
          <h3 className="text-2xl font-bold">Download CV &amp; Reach Me</h3>
          <a href="/Gerbil Fajar Ferdianto.pdf" download="Gerbil Fajar Ferdianto.pdf" className="mt-4 inline-block rounded-xl border border-[#5ebd8a] px-4 py-2 text-[#5ebd8a] transition hover:bg-[#5ebd8a]/10">Download CV</a>
          <ul className="mt-5 space-y-3 text-white/85">
            <li className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:gerbilafajarf@gmail.com" className="hover:text-[#5ebd8a] transition">gerbilafajarf@gmail.com</a></li>
            <li className="flex items-center gap-2"><Phone size={16} /> <a href="https://wa.me/6287811496665" target="_blank" rel="noopener noreferrer" className="hover:text-[#5ebd8a] transition">+62 878-1149-6665</a></li>
            <li className="flex items-center gap-2"><Github size={16} /> <a href="https://github.com/Gabby-Hue" target="_blank" rel="noopener noreferrer" className="hover:text-[#5ebd8a] transition">github.com/Gabby-Hue</a></li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Indonesia</li>
          </ul>
        </aside>
      </div>
    </SectionWrapper>
  );
}
