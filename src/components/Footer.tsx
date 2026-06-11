export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center">
      <p className="text-sm text-white/60">© {new Date().getFullYear()} Gerbil Portfolio</p>
      <a href="#hero" className="mt-3 inline-block text-[#5ebd8a] hover:text-[#3da872] transition">Back to top ↑</a>
    </footer>
  );
}
