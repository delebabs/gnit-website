import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({ title: 'About GNIT', description: 'Learn about GNIT LTD, an Abuja-based multidisciplinary EPC company delivering energy, ICT, security and engineering solutions across Nigeria.', path: '/company', keywords: ['GNIT LTD', 'engineering company Abuja', 'EPC company Nigeria'] });

const values = ['Integrity', 'Excellence', 'Safety', 'Innovation', 'Sustainability', 'Client Focus'];
const delivery = ['Assessment & Planning', 'Engineering & Design', 'Procurement', 'Implementation', 'Support & Optimisation'];

export default function Company() {
  return (
    <>
      <PageHero badge="COMPANY" title="Engineering Critical Infrastructure For Africa." description="GNIT LTD is a multidisciplinary EPC company delivering integrated Energy, ICT, Security and Engineering solutions throughout Nigeria." />
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.35fr_.65fr]">
          <div>
            <SectionHeader badge="WHO WE ARE" title="A trusted partner for reliable, sustainable infrastructure." description="Established in 2019 and headquartered in Abuja, GNIT provides consultancy, system design, procurement, installation, commissioning and lifecycle support." />
            <p className="mt-6 leading-8 text-slate-600">We integrate engineering expertise with emerging technologies to improve operational efficiency, strengthen connectivity, enhance security and create long-term value for clients and communities.</p>
          </div>
          <aside className="bg-[#0F172A] p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#65d66a]">Company snapshot</p>
            <dl className="mt-7 space-y-5">
              <div><dt className="text-sm text-slate-300">Corporate registration</dt><dd className="mt-1 text-2xl font-black">RC 1551039</dd></div>
              <div><dt className="text-sm text-slate-300">Established</dt><dd className="mt-1 text-2xl font-black">2019</dd></div>
              <div><dt className="text-sm text-slate-300">Head office</dt><dd className="mt-1 text-2xl font-black">Abuja, Nigeria</dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="section bg-[#F8FAFC]">
        <div className="container grid gap-6 lg:grid-cols-2">
          <article className="border-l-4 border-[#16A34A] bg-white p-8"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#16A34A]">Vision</p><p className="mt-5 text-2xl font-black leading-snug text-[#0F172A]">To be a trusted infrastructure partner delivering sustainable, innovative and resilient engineering solutions across Africa.</p></article>
          <article className="border-l-4 border-[#16A34A] bg-white p-8"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#16A34A]">Mission</p><p className="mt-5 text-2xl font-black leading-snug text-[#0F172A]">To design, build and support critical infrastructure that enhances productivity, security, connectivity and quality of life.</p></article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader badge="HOW WE WORK" title="A disciplined project delivery framework." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {delivery.map((item) => <div key={item} className="border border-slate-200 p-6"><h3 className="text-xl font-black text-[#0F172A]">{item}</h3></div>)}
          </div>
          <SectionHeader badge="OUR VALUES" title="What guides every GNIT engagement." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => <div key={value} className="border-b-2 border-[#16A34A] bg-[#F8FAFC] p-6 text-xl font-black text-[#0F172A]">{value}</div>)}
          </div>
        </div>
      </section>
    </>
  );
}
