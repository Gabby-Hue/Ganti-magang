import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <p className="text-[#5ebd8a]">Software Engineer</p>
          <h2 className="section-title mt-2">About Me</h2>
          <p className="mt-4 text-white/80">I craft immersive digital experiences where engineering precision meets cinematic storytelling.</p>
          <div className="mt-6 flex gap-4">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="rounded-full border border-white/20 p-3 transition hover:border-[#5ebd8a] hover:text-[#5ebd8a]">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="glass mx-auto w-full max-w-md rounded-3xl p-6">
          <div className="animate-float rounded-3xl border border-white/20 p-2">
            <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop" alt="Profile" width={500} height={500} className="rounded-2xl" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
