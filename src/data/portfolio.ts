export const programmingSkills = [
  { name: 'Java Script', level: 94, icon: '/icons/java.png' },
  { name: 'CSS', level: 95, icon: '/icons/css.png' },
  { name: 'React', level: 90, icon: '/icons/react.png' },
  { name: 'PHP', level: 70, icon: '/icons/php.png' },
];

export const designingSkills = [
  { name: 'Figma', level: 82, icon: '/icons/figma.png' },
  { name: 'Canva', level: 95, icon: '/icons/canva.png' },
  { name: 'WebFlow', level: 75, icon: '/icons/webflow.jpeg' },
  { name: 'Photoshop', level: 60, icon: '/icons/adobe.png' },
];

// Keep original combined list for backward compatibility
export const skills = [...programmingSkills, ...designingSkills];


export const events = [
  { title: 'Kunjungan Industri', year: '2025', description: 'Kunjungan industri Gamelab di Salatiga.', image: '/gamelab.png', certificate: '/gamelab.pdf' },
  { title: 'Pelatihan Domain', year: '2025', description: 'Pelatihan pemasangan domain oleh PT Radnet.', image: '/rednet.png', certificate: '#' },
  { title: 'Rally Game', year: '2026', description: 'Rally game yang diadakan oleh Universitas Ciputra.', image: '/uc.jpg', certificate: '#' },
  { title: 'Olimpiade ITS', year: '2026', description: 'Olimpiade informatika yang diadakan oleh ITS.', image: '/ara.png', certificate: '#' }
];

export const projects = [
  { title: 'Courtease', category: 'Web Development', description: 'Courtease adalah aplikasi untuk mencari, memesan, dan membayar sewa lapangan olahraga secara online, sekaligus membantu pemilik venue mengelola jadwal, harga, dan transaksi.', tech: ['Next.js', 'Tailwind', 'Supabase', 'Shadcn'], image: '/courtease.png', live: 'https://courtease-rpl.vercel.app/', github: '#' },
  { title: 'Pastryfy', category: 'Web Development', description: 'Pastryfy adalah website untuk memesan berbagai pastry dengan cepat efesien dan pastinya praktis tanpa harus keluar rumah', tech: ['Laravel', 'Laragon', 'Bootstrap'], image: '/pastryfy.png', live: '#', github: '#' },
  { title: 'YeLaun', category: 'App', description: 'YeLaun adalah aplikasi mobile laundry on-demand yang memungkinkan pengguna memesan layanan laundry, menjadwalkan penjemputan, dan memantau pesanan dengan mudah melalui satu platform.', tech: ['Expo', 'Supabase', 'React'], image: '/yelaun.jpeg', live: '#', github: '#' },
  { title: 'Poster idul adha', category: 'Graphic Design', description: 'poster idul adha untuk smenalis', tech: ['Canva'], image: '/sapi.jpeg', live: '#', github: '#' },
  { title: 'Courtease', category: 'Graphic Design', description: 'promotional gfx for courtease', tech: ['Figma'], image: '/cease.png', live: '#', github: '#' },
  { title: 'Geara', category: 'Graphic Design', description: 'promotional gfx for geara', tech: ['Figma'], image: '/geara.png', live: '#', github: '#' },
];
