import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { services } from '@/data/services';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({ title: 'Engineering, Energy, ICT & Security Services', description: 'Explore GNIT capabilities in green energy, ICT infrastructure, electronic security and engineering consultancy across Nigeria.', path: '/services', keywords: ['engineering services Nigeria', 'solar EPC Nigeria', 'ICT infrastructure', 'electronic security'] });

const imagery = [
  {src:'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=95&w=1800',alt:'Commercial solar PV installation'},
  {src:'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&q=95&w=1800',alt:'Enterprise network and server equipment'},
  {src:'https://images.unsplash.com/photo-1572044727169-8b7dda92916e?auto=format&fit=crop&q=95&w=1800',alt:'Professional CCTV surveillance camera'},
  {src:'https://images.unsplash.com/photo-1735571919545-5bbfd52b8f3d?auto=format&fit=crop&q=95&w=1800',alt:'Electrical infrastructure and power systems'},
];

export default function Services(){return <><PageHero badge="OUR SERVICES" title="Integrated Engineering & Technology Solutions." description="Complete project lifecycle solutions across four core disciplines."/><section className="section bg-[#F8FAFC]"><div className="container"><SectionHeader badge="CAPABILITIES" title="Four Core Service Areas" center/><div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{services.map((service,index)=><Link key={service.slug} href={`/services/${service.slug}`} className="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-52 overflow-hidden bg-slate-900"><Image src={imagery[index].src} alt={imagery[index].alt} fill quality={95} sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent"/></div><div className="p-7"><h3 className="text-2xl font-black text-[#0F172A]">{service.title}</h3><p className="mt-3 leading-7 text-slate-600">{service.description}</p><span className="mt-6 inline-flex text-sm font-bold uppercase text-[#16A34A]">Explore capability →</span></div></Link>)}</div></div></section></>}
