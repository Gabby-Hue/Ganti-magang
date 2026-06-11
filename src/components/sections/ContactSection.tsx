import { MapPin, Github, Linkedin, Mail } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
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
          <a href="#" className="mt-4 inline-block rounded-xl border border-[#5ebd8a] px-4 py-2 text-[#5ebd8a] transition hover:bg-[#5ebd8a]/10">Download CV</a>
          <ul className="mt-5 space-y-3 text-white/85">
            <li className="flex items-center gap-2"><Mail size={16} /> hello@domain.com</li>
            <li className="flex items-center gap-2"><Linkedin size={16} /> linkedin.com/in/yourname</li>
            <li className="flex items-center gap-2"><Github size={16} /> github.com/yourname</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Indonesia</li>
          </ul>
        </aside>
      </div>
    </SectionWrapper>
  );
}
