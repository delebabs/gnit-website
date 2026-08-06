import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Network, ShieldCheck, Sun, Building2 } from 'lucide-react';

const offerings = [
  { title: 'EPC & Infrastructure', copy: 'Planning, design, procurement, construction management, testing and commissioning.', icon: Building2 },
  { title: 'Energy Solutions', copy: 'Solar PV, battery energy storage, hybrid power, commercial solar and microgrids.', icon: Sun },
  { title: 'ICT Infrastructure', copy: 'Enterprise networks, fibre optics, GPON, structured cabling and wireless infrastructure.', icon: Network },
  { title: 'Security Systems', copy: 'CCTV, access control, intrusion detection, visitor management and perimeter protection.', icon: ShieldCheck },
];

const smartFeatures = ['Renewable energy', 'Fibre & GPON', 'Enterprise Wi-Fi', 'CCTV & access control', 'Smart metering', 'Central monitoring'];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0F172A] pt-[92px] lg:pt-[132px]">
        <div className="relative hidden aspect-[3.14/1] min-h-[445px] lg:block">
          <Image src="/images/gnit-reference-hero-clean.png" alt="GNIT engineering infrastructure: power substation, communications tower, solar panels, CCTV camera and data centre" fill priority quality={100} unoptimized sizes="100vw" className="object-cover object-center" />
          <Link href="/request-consultation" aria-label="Request consultation" className="absolute left-[26.3%] top-[83.8%] h-[8.5%] w-[14.4%]" />
          <Link href="/services" aria-label="Explore services" className="absolute left-[41.4%] top-[83.8%] h-[8.5%] w-[14.4%]" />
        </div>
        <div className="relative flex min-h-[580px] items-center bg-[linear-gradient(90deg,rgba(15,23,42,.90),rgba(15,23,42,.45)),url('/images/reference-infrastructure-hero.jpg')] bg-cover bg-center px-5 py-16 lg:hidden">
          <div className="max-w-3xl"><h1 className="text-5xl font-black uppercase leading-[1.06] tracking-[-.04em] text-white">Engineering<br />Critical Infrastructure<br /><span className="text-[#3fae43]">for Africa</span></h1><p className="mt-6 max-w-2xl text-lg leading-7 text-slate-100">GNIT LTD delivers integrated EPC, renewable energy, ICT infrastructure, security systems and consulting solutions that power industries, connect communities and support sustainable growth across Africa.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/request-consultation" className="bg-[#16A34A] px-6 py-4 text-sm font-bold uppercase text-white">Request consultation</Link><Link href="/services" className="border border-white px-6 py-4 text-sm font-bold uppercase text-white">Explore services</Link></div></div>
        </div>
        <p className="sr-only">Engineering critical infrastructure for Africa. GNIT delivers integrated EPC, renewable energy, ICT infrastructure and security systems.</p>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase text-[#16A34A]">What we do</p><h2 className="mt-2 text-3xl font-black text-[#0F172A] md:text-4xl">Integrated Solutions. End-to-End Delivery.</h2><div className="mx-auto mt-3 h-0.5 w-12 bg-[#16A34A]" /></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {offerings.map(({ title, copy, icon: Icon }) => <article key={title} className="border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#16A34A] hover:shadow-lg"><div className="flex items-start gap-4"><div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-slate-100 text-[#16A34A]"><Icon size={31} /></div><div><h3 className="text-lg font-bold text-[#0F172A]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{copy}</p></div></div><Link href="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase text-[#16A34A]">Learn more <ArrowRight size={15} /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section bg-[#F8FAFC]">
        <div className="container grid items-stretch gap-8 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden bg-[#0F172A]"><Image src="/images/smart-communities-hero.png" alt="GNIT Smart Communities combining energy, connectivity and security for a modern African development" fill quality={95} sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/65 via-transparent to-transparent" /></div>
          <div className="py-3 lg:py-7"><p className="text-sm font-bold uppercase tracking-[.22em] text-[#16A34A]">Flagship solution</p><h2 className="mt-3 text-4xl font-black text-[#0F172A] md:text-5xl">GNIT Smart Communities™</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">A unified platform for modern estates, campuses, institutions, industrial parks and mixed-use developments. GNIT combines resilient energy, fibre connectivity, enterprise networking, integrated security, smart metering and central monitoring in one delivery framework.</p><Link href="/smart-communities" className="mt-7 inline-flex items-center gap-2 bg-[#0F172A] px-6 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#16A34A]">Explore Smart Communities <ArrowRight size={16} /></Link></div>
        </div>
        <div className="container mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{smartFeatures.map((item) => <div key={item} className="border-l-4 border-[#16A34A] bg-white p-5 font-bold text-[#0F172A]">{item}</div>)}</div>
      </section>
    </>
  );
}
