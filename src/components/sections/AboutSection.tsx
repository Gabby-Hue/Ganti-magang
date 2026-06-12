import Image from 'next/image';
import { Github, Phone, Mail } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';

/* ── Reusable wood-textured frame (matches Navbar style) ─────────── */
function WoodFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-2xl border-2 border-[#8b6914]/40 p-[6px] ${className}`}
      style={{
        background: '#c49a3c',
        boxShadow: '0 4px 0 #9a7520, 0 6px 16px rgba(0,0,0,0.25)',
      }}
    >
      {/* Wood grain texture */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.06) 20%, transparent 22%,
                transparent 45%, rgba(0,0,0,0.04) 47%, transparent 49%,
                transparent 70%, rgba(0,0,0,0.06) 72%, transparent 74%)
            `,
          }}
        />
        {/* Highlight strip at top */}
        <div className="absolute top-0 left-2 right-2 h-[3px] rounded-full bg-[#e8c86a]/50" />
      </div>

      {/* Corner nails */}
      <div className="absolute top-2 left-2 h-2 w-2 rounded-full bg-[#a37e28] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]" />
      <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#a37e28] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]" />
      <div className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-[#a37e28] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]" />
      <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-[#a37e28] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]" />

      {/* Inner content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 lg:grid-cols-2">
        <WoodFrame className="order-last lg:order-first">
          <div className="rounded-xl p-8" style={{ background: '#0a2e1c' }}>
            <p className="text-[#5ebd8a]">Siswa RPL — SMK Negeri 2 Surabaya</p>
            <h2 className="section-title mt-2">About Me</h2>
            <p className="mt-4 text-white/80 leading-relaxed">Saya adalah siswa SMK Negeri 2 Surabaya jurusan Rekayasa Perangkat Lunak yang memiliki ketertarikan besar pada pengembangan web, desain antarmuka, dan teknologi digital. Saya menikmati proses mengubah ide menjadi produk yang tidak hanya menarik secara visual, tetapi juga fungsional, responsif, dan mudah digunakan.</p>
            <p className="mt-3 text-white/80 leading-relaxed">Dengan pengalaman mengerjakan berbagai proyek pembelajaran maupun proyek pribadi, saya terus mengembangkan kemampuan di bidang frontend development, UI/UX design, serta pemanfaatan platform modern seperti Next.js, WordPress, dan Webflow. Saya percaya bahwa kombinasi antara desain yang baik dan teknologi yang tepat dapat menciptakan pengalaman digital yang memberikan nilai bagi pengguna.</p>
            <div className="mt-6 flex gap-4">
              {[
                { Icon: Github, href: 'https://github.com/Gabby-Hue' },
                { Icon: Phone, href: 'https://wa.me/6287811496665' },
                { Icon: Mail, href: 'mailto:gerbilafajarf@gmail.com' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 p-3 transition hover:border-[#5ebd8a] hover:text-[#5ebd8a]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </WoodFrame>
        <WoodFrame className="mx-auto w-full max-w-md">
          <div className="rounded-xl p-6" style={{ background: '#0a2e1c' }}>
            <div className="animate-float rounded-2xl border border-white/20 p-2">
              <Image src="/pp.jpeg" alt="Profile" width={500} height={500} className="rounded-xl object-cover" />
            </div>
            <blockquote className="mt-5 text-center">
              <p className="text-lg italic text-[#5ebd8a]/90 tracking-wide">&ldquo;Faber est suae quisque fortunae&rdquo;</p>
              <cite className="mt-2 block text-sm text-white/40 not-italic">— Appius Claudius Caecus</cite>
            </blockquote>
          </div>
        </WoodFrame>
      </div>
    </SectionWrapper>
  );
}
