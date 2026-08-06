'use client';

import Link from 'next/link';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import BrandLogo from '@/components/BrandLogo';

const primaryLinks = [
  ['Home', '/'], ['Services', '/services'], ['Projects', '/projects'], ['Industries', '/industries'],
  ['HSE & Quality', '/hse-quality'], ['Careers', '/careers'], ['Contact', '/contact'],
];

const menus = {
  Company: [['Company Overview', '/company'], ['About GNIT', '/about'], ['Clients & Partners', '/clients'], ['HSE & Quality', '/hse-quality']],
  'Business Units': [['Green Energy', '/services/green-energy'], ['ICT Infrastructure', '/services/ict'], ['Electronic Security', '/services/security'], ['Engineering Consultancy', '/services/engineering'], ['Smart Communities', '/smart-communities']],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<keyof typeof menus | null>(null);

  return <header className="fixed inset-x-0 top-0 z-50 shadow-sm">
    <div className="hidden h-10 bg-[#0F172A] text-white lg:block"><div className="flex h-full w-full items-center justify-between px-10 text-sm 2xl:px-14"><div className="flex items-center gap-8"><a className="flex items-center gap-2 hover:text-[#16A34A]" href="tel:+2348059991118"><Phone size={14}/> +234 805 999 1118</a><a className="flex items-center gap-2 hover:text-[#16A34A]" href="mailto:info@gnit-ltd.com"><Mail size={14}/> info@gnit-ltd.com</a></div><div className="font-bold text-[#16A34A]">Engineering · Technology · Energy · Security</div></div></div>
    <div className="bg-white"><div className="flex h-[92px] w-full items-center justify-between px-10 2xl:px-14"><BrandLogo/>
      <nav className="hidden h-full items-center gap-6 xl:flex">
        <Link href="/" className="flex h-full items-center border-b-2 border-transparent text-[12px] font-bold uppercase text-[#0F172A] transition hover:border-[#16A34A] hover:text-[#16A34A]">Home</Link>
        {(Object.keys(menus) as Array<keyof typeof menus>).map(label => <div key={label} onMouseEnter={() => setActiveMenu(label)} onMouseLeave={() => setActiveMenu(null)} className="relative flex h-full items-center"><button aria-expanded={activeMenu === label} onFocus={() => setActiveMenu(label)} className="flex h-full items-center gap-1 border-b-2 border-transparent text-[12px] font-bold uppercase text-[#0F172A] transition hover:border-[#16A34A] hover:text-[#16A34A]">{label}<ChevronDown size={12}/></button>{activeMenu === label && <div className="absolute left-0 top-[72px] min-w-64 border-t-2 border-[#16A34A] bg-white p-3 shadow-xl">{menus[label].map(([name, href]) => <Link key={href} href={href} onClick={() => setActiveMenu(null)} className="block px-4 py-3 text-[12px] font-bold uppercase text-[#0F172A] transition hover:bg-slate-50 hover:text-[#16A34A]">{name}</Link>)}</div>}</div>)}
        {primaryLinks.slice(1).map(([label, href]) => <Link key={href} href={href} className="flex h-full items-center border-b-2 border-transparent text-[12px] font-bold uppercase text-[#0F172A] transition hover:border-[#16A34A] hover:text-[#16A34A]">{label}</Link>)}
        <Link href="/request-consultation" className="bg-[#0F172A] px-5 py-3 text-[12px] font-bold uppercase text-white transition hover:bg-[#16A34A]">Request Consultation</Link>
      </nav>
      <button className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </div>{open && <nav className="border-t bg-white px-6 py-4 xl:hidden">{[['Company', '/company'], ['Business Units', '/business-units'], ...primaryLinks.slice(1)].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block border-b py-3 text-sm font-bold uppercase text-[#0F172A]">{label}</Link>)}<Link href="/request-consultation" onClick={() => setOpen(false)} className="mt-4 block bg-[#16A34A] px-5 py-3 text-center text-sm font-bold uppercase text-white">Request Consultation</Link></nav>}</div>
  </header>;
}
