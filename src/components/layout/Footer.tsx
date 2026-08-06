import Link from 'next/link';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[#07162a] text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo inverse />
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
            Integrated EPC, energy, ICT and security solutions for Africa&apos;s critical infrastructure.
          </p>
          <p className="mt-4 text-xs font-black uppercase tracking-[.15em] text-[#65d66a]">
            RC 1551039
          </p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-[#3fae43]">Company</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <Link className="block hover:text-white" href="/company">Company profile</Link>
            <Link className="block hover:text-white" href="/projects">Projects</Link>
            <Link className="block hover:text-white" href="/hse-quality">HSE &amp; Quality</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-[#3fae43]">Business units</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <Link className="block hover:text-white" href="/services/green-energy">GNIT Energy</Link>
            <Link className="block hover:text-white" href="/services/ict">GNIT ICT</Link>
            <Link className="block hover:text-white" href="/services/security">GNIT Security</Link>
            <Link className="block hover:text-white" href="/services/engineering">GNIT EPC</Link>
            <Link className="block hover:text-white" href="/smart-communities">Smart Communities</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-[#3fae43]">Contact</h3>
          <p className="mt-5 text-sm text-slate-300">Abuja, Nigeria</p>
          <div className="mt-5 space-y-3">
            <a className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white" href="https://wa.me/2348059991118" target="_blank" rel="noreferrer"><MessageCircle size={18} className="text-[#3fae43]" />WhatsApp GNIT</a>
            <a className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white" href="mailto:info@gnit-ltd.com"><Mail size={18} className="text-[#3fae43]" />info@gnit-ltd.com</a>
            <a className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white" href="tel:+2348059991118"><Phone size={18} className="text-[#3fae43]" />+234 805 999 1118</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 text-xs text-slate-400">
          © {new Date().getFullYear()} GNIT LTD. Engineering Critical Infrastructure for Africa.
        </div>
      </div>
    </footer>
  );
}
