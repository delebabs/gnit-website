import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Cable, Camera, ChartNoAxesCombined, RadioTower, SunMedium } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({ title: 'Smart Communities', description: 'GNIT Smart Communities integrates resilient energy, fibre connectivity, enterprise Wi-Fi, electronic security and smart operations for modern developments.', path: '/smart-communities', keywords: ['smart communities Nigeria', 'smart estate infrastructure', 'integrated infrastructure'] });

const pillars = [
  { title: 'Resilient Energy', description: 'Solar PV, storage, backup generation and intelligent energy management for dependable daily operations.', icon: SunMedium },
  { title: 'Digital Connectivity', description: 'Fibre backbone, enterprise Wi-Fi, GPON, structured cabling and secure network architecture.', icon: RadioTower },
  { title: 'Integrated Security', description: 'CCTV, access control, visitor management, perimeter protection and central command capability.', icon: Camera },
  { title: 'Smart Operations', description: 'Metering, analytics, condition monitoring and central dashboards that support informed decisions.', icon: ChartNoAxesCombined },
];

const environments = ['Residential estates', 'University campuses', 'Healthcare facilities', 'Industrial parks', 'Commercial developments', 'Government facilities'];

export default function SmartCommunities() {
  return (
    <>
      <PageHero badge="SMART COMMUNITIES" title="Integrated infrastructure for places that need to perform." description="GNIT Smart Communities brings energy, connectivity, security and intelligent operations together in one coordinated delivery model." />

      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div><SectionHeader badge="ONE DELIVERY FRAMEWORK" title="Designed as one system, not disconnected installations." description="We coordinate the critical infrastructure that makes modern communities safer, better connected, more efficient and easier to operate." /><p className="mt-6 leading-8 text-slate-600">From early planning through design, procurement, construction, commissioning and lifecycle support, GNIT provides a single accountable partner for complex multi-service environments.</p><Link href="/request-consultation" className="mt-8 inline-flex items-center gap-2 bg-[#16A34A] px-6 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#0F172A]">Discuss your development <ArrowRight size={16} /></Link></div>
          <div className="relative min-h-[370px] overflow-hidden"><Image src="/images/smart-communities-hero.png" alt="Modern smart community with renewable energy, connectivity and access security" fill quality={95} sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
        </div>
      </section>

      <section className="section bg-[#F8FAFC]">
        <div className="container"><SectionHeader badge="CONNECTED CAPABILITIES" title="Every essential layer of a modern community." center /><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{pillars.map(({ title, description, icon: Icon }) => <article key={title} className="border border-slate-200 bg-white p-7"><Icon className="text-[#16A34A]" size={38} /><h2 className="mt-6 text-2xl font-black text-[#0F172A]">{title}</h2><p className="mt-4 leading-7 text-slate-600">{description}</p></article>)}</div></div>
      </section>

      <section className="section bg-[#0F172A] text-white">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div><p className="text-sm font-bold uppercase tracking-[.22em] text-[#65d66a]">Built for real environments</p><h2 className="mt-4 text-4xl font-black">A scalable framework for growing developments.</h2><p className="mt-5 max-w-xl leading-8 text-slate-200">Start with the systems your site needs today, then expand as occupancy, operations and service requirements grow.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{environments.map((environment) => <div key={environment} className="flex items-center gap-4 border-l-2 border-[#16A34A] bg-white/5 p-5"><Building2 className="text-[#65d66a]" size={22} /><span className="font-bold">{environment}</span></div>)}</div>
        </div>
      </section>

      <section className="section"><div className="container grid gap-8 border-y border-slate-200 py-12 lg:grid-cols-3"><div><Cable className="text-[#16A34A]" size={35} /><h2 className="mt-4 text-2xl font-black text-[#0F172A]">Plan with confidence</h2><p className="mt-3 leading-7 text-slate-600">A coordinated design reduces duplication, disruption and lifecycle cost.</p></div><div><ChartNoAxesCombined className="text-[#16A34A]" size={35} /><h2 className="mt-4 text-2xl font-black text-[#0F172A]">Operate with visibility</h2><p className="mt-3 leading-7 text-slate-600">Unified monitoring gives facility teams the information they need to act quickly.</p></div><div><Link href="/request-consultation" className="inline-flex items-center gap-2 bg-[#0F172A] px-6 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#16A34A]">Request consultation <ArrowRight size={16} /></Link></div></div></section>
    </>
  );
}
