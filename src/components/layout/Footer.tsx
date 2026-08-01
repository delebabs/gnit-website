import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo inverse />
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">Integrated EPC, energy, ICT and security solutions for Africa&apos;s critical infrastructure.</p>
          <p className="mt-4 text-xs font-bold text-[#65d66a]">RC 1551039 · Established 2019</p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-[#16A34A]">Company</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-300"><Link className="block hover:text-white" href="/company">Company profile</Link><Link className="block hover:text-white" href="/projects">Projects</Link><Link className="block hover:text-white" href="/hse-quality">HSE & Quality</Link></div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-[#16A34A]">Business units</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-300"><Link className="block hover:text-white" href="/services/green-energy">GNIT Energy</Link><Link className="block hover:text-white" href="/services/ict">GNIT ICT</Link><Link className="block hover:text-white" href="/services/security">GNIT Security</Link><Link className="block hover:text-white" href="/services/engineering">GNIT EPC</Link><Link className="block hover:text-white" href="/smart-communities">Smart Communities</Link></div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-[#16A34A]">Contact</h3>
          <p className="mt-5 text-sm leading-7 text-slate-300">Abuja, Nigeria<br /><a className="hover:text-white" href="mailto:info@gnit-ltd.com">info@gnit-ltd.com</a><br /><a className="hover:text-white" href="tel:+2348059991118">+234 805 999 1118</a></p>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="container py-5 text-xs text-slate-400">© {new Date().getFullYear()} GNIT LTD. Engineering Critical Infrastructure for Africa.</div></div>
    </footer>
  );
}
