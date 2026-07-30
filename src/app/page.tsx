import Link from 'next/link';
import { ArrowRight, Building2, ChevronRight, Headphones, Network, ShieldCheck, Sun } from 'lucide-react';
import { services } from '@/data/services';

const icons = [Sun, Network, ShieldCheck, Building2];

export default function Home() {
  return <>
    <section className="relative isolate overflow-hidden bg-[#061d39] pt-[74px] lg:pt-[110px]">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(112deg,rgba(6,29,57,.98)_4%,rgba(6,29,57,.86)_47%,rgba(6,29,57,.32)),url('/images/home-engineering-collage.svg')] [background-position:center] [background-size:cover]" />
      <div className="absolute -right-28 top-20 h-[560px] w-[560px] rounded-full border border-white/10" />
      <div className="container relative grid min-h-[660px] items-center py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-6 border-l-4 border-[#7cc447] pl-4 text-xs font-bold uppercase tracking-[.25em] text-[#b8df93]">Building infrastructure that performs</p>
          <h1 className="text-5xl font-black uppercase leading-[.96] tracking-[-.05em] text-white md:text-7xl xl:text-[82px]">Engineering<br />a <span className="text-[#78be45]">smarter</span><br />tomorrow.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-100 md:text-xl">GNIT delivers integrated engineering, renewable energy, ICT infrastructure and electronic security solutions for organisations building Nigeria&apos;s future.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/request-quote" className="inline-flex items-center gap-3 bg-[#43a047] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2f7d33]">Start a project <ArrowRight size={18}/></Link>
            <Link href="/services" className="inline-flex items-center gap-3 border border-white/60 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#78be45] hover:text-[#a5da77]">Explore services <ChevronRight size={18}/></Link>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/15 bg-[#061d39]/80"><div className="container grid divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0"><div className="py-5 text-sm font-semibold text-white"><span className="mr-3 text-[#78be45]">01</span> Integrated expertise</div><div className="py-5 text-sm font-semibold text-white md:px-7"><span className="mr-3 text-[#78be45]">02</span> Quality-led delivery</div><div className="py-5 text-sm font-semibold text-white md:px-7"><span className="mr-3 text-[#78be45]">03</span> Long-term support</div></div></div>
    </section>

    <section className="section bg-white"><div className="container">
      <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#43a047]">What we do</p><h2 className="mt-4 text-4xl font-black uppercase tracking-[-.04em] text-[#061d39] md:text-5xl">One partner. Critical infrastructure.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">We bring specialist disciplines together to plan, deliver and maintain reliable systems that help organisations operate with confidence.</p></div>
      <div className="mt-14 grid border-l border-t border-slate-200 md:grid-cols-2 xl:grid-cols-4">{services.map((service, index) => { const Icon = icons[index]; return <Link key={service.slug} href={`/services/${service.slug}`} className="group min-h-[300px] border-b border-r border-slate-200 p-8 transition hover:bg-[#061d39]"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf7e8] text-[#43a047] transition group-hover:bg-[#43a047] group-hover:text-white"><Icon size={27}/></div><p className="mt-9 text-xs font-bold tracking-[.2em] text-[#43a047]">0{index + 1}</p><h3 className="mt-2 text-2xl font-black uppercase text-[#061d39] transition group-hover:text-white">{service.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600 transition group-hover:text-slate-200">{service.description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#43a047]">Learn more <ArrowRight size={16}/></span></Link> })}</div>
    </div></section>

    <section className="bg-[#061d39] py-16"><div className="container grid gap-y-10 text-center md:grid-cols-4 md:divide-x md:divide-white/20">{[['100+','Projects delivered'],['25MW+','Renewable capacity'],['20+','Industry sectors'],['24/7','Technical support']].map(([value,label]) => <div key={label} className="px-5"><div className="text-5xl font-black tracking-[-.05em] text-[#78be45]">{value}</div><p className="mt-3 text-xs font-bold uppercase tracking-[.17em] text-white">{label}</p></div>)}</div></section>

    <aside aria-label="Quick contact" className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 overflow-hidden shadow-lg md:block"><a href="tel:+2340000000000" className="flex h-12 w-12 items-center justify-center bg-[#43a047] text-white" aria-label="Call GNIT"><Headphones size={21}/></a><Link href="/request-quote" className="flex h-12 w-12 items-center justify-center bg-white text-[#061d39]" aria-label="Request a quote"><ArrowRight size={21}/></Link></aside>
  </>;
}
