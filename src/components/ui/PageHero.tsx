import Image from 'next/image';

const heroImages: Record<string, string> = {
  'GREEN ENERGY': 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=95&w=2200',
  'ICT INFRASTRUCTURE': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=95&w=2200',
  'ELECTRONIC SECURITY': 'https://images.unsplash.com/photo-1572044727169-8b7dda92916e?auto=format&fit=crop&q=95&w=2200',
  'ENGINEERING CONSULTANCY': 'https://images.unsplash.com/photo-1735571919545-5bbfd52b8f3d?auto=format&fit=crop&q=95&w=2200',
  'OUR SERVICES': '/images/gnit-reference-hero.png',
  'OUR PROJECTS': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=95&w=2200',
  'INDUSTRIES': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=95&w=2200',
  'HSE & QUALITY': 'https://images.unsplash.com/photo-1581092919535-7146ff1a590a?auto=format&fit=crop&q=95&w=2200',
  'CAREERS': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=95&w=2200',
  'CONTACT': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=95&w=2200',
  'CLIENTS & PARTNERS': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=95&w=2200',
  'COMPANY': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=95&w=2200',
  'ABOUT GNIT': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=95&w=2200',
  'COMPANY PROFILE': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=95&w=2200',
  'BUSINESS UNITS': '/images/gnit-reference-hero.png',
  'DOWNLOADS': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=95&w=2200',
  'DOWNLOAD CENTRE': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=95&w=2200',
  'NEWS & INSIGHTS': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=95&w=2200',
  'CONTACT US': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=95&w=2200',
  'REQUEST A CONSULTATION': '/images/gnit-reference-hero.png',
  'REQUEST A QUOTATION': '/images/gnit-reference-hero.png',
  'RENEWABLE ENERGY': 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=95&w=2200',
  'ICT': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=95&w=2200',
  'SECURITY': 'https://images.unsplash.com/photo-1572044727169-8b7dda92916e?auto=format&fit=crop&q=95&w=2200',
  'REQUEST A QUOTE': '/images/gnit-reference-hero.png',
};

export default function PageHero({ badge, title, description, image }: { badge: string; title: string; description: string; image?: string }) {
  const source = image ?? heroImages[badge] ?? '/images/gnit-reference-hero.png';
  const localReference = source.startsWith('/images/gnit-reference-hero');

  return (
    <section className="relative flex min-h-[430px] items-end overflow-hidden bg-[#0F172A] pt-[92px] lg:pt-[132px]">
      <Image src={source} alt="" fill priority={localReference} quality={95} sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,.94),rgba(15,23,42,.76),rgba(15,23,42,.28))]" />
      <div className="container relative pb-16">
        <span className="border-l-4 border-[#16A34A] pl-3 text-xs font-bold uppercase tracking-[.25em] text-[#9ee49f]">{badge}</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight tracking-[-.04em] text-white md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100">{description}</p>
      </div>
    </section>
  );
}
