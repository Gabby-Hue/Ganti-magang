import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Cinematic Jungle Portfolio', description: 'Immersive parallax portfolio' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
