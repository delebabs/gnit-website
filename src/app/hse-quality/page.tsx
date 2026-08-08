import PageHero from '@/components/ui/PageHero';
import { CheckCircle2, ShieldCheck, UsersRound } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({ title: 'HSE & Quality', description: 'GNIT quality, health, safety and environmental commitments for safe, compliant and continuously improving operations.', path: '/hse-quality', keywords: ['HSE policy Nigeria', 'quality management engineering', 'safe operations'] });

const quality = ['Deliver projects on time and within budget.', 'Achieve client satisfaction through reliable delivery.', 'Maintain technical excellence and competent personnel.', 'Apply a structured process approach and improve continually.'];
const hse = ['Conduct all operations safely and prevent workplace injuries and illnesses.', 'Protect the environment and comply with applicable laws and regulations.', 'Provide adequate resources, training and regular HSE reviews.', 'Promote participation, correct PPE use, hazard reporting and a proactive safety culture.'];
const hseObjectives = ['Zero fatalities', 'Zero lost-time injuries', 'Environmental protection', 'Risk reduction', 'Continuous improvement'];

export default function HseQuality() {
  return (
    <>
      <PageHero badge="HSE & QUALITY" title="Quality delivery. Zero-harm mindset." description="GNIT integrates quality, health, safety and environmental management into every stage of planning, delivery and lifecycle support." />
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <article className="border-t-4 border-[#16A34A] bg-[#F8FAFC] p-8 md:p-10">
              <ShieldCheck className="text-[#16A34A]" size={48} />
              <h2 className="mt-5 text-3xl font-black text-[#0F172A]">Quality policy</h2>
              <p className="mt-4 leading-8 text-slate-600">GNIT is committed to delivering products and services that meet or exceed client expectations while complying with applicable standards and regulations.</p>
              <div className="mt-7 space-y-4">{quality.map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-1 shrink-0 text-[#16A34A]" size={19} /><p className="leading-7 text-slate-700">{item}</p></div>)}</div>
            </article>
            <article className="border-t-4 border-[#16A34A] bg-[#0F172A] p-8 text-white md:p-10">
              <UsersRound className="text-[#65d66a]" size={48} />
              <h2 className="mt-5 text-3xl font-black">HSE policy</h2>
              <p className="mt-4 leading-8 text-slate-200">GNIT protects the health and safety of employees, clients, contractors and visitors, while minimising environmental impact.</p>
              <div className="mt-7 space-y-4">{hse.map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-1 shrink-0 text-[#65d66a]" size={19} /><p className="leading-7 text-slate-100">{item}</p></div>)}</div>
            </article>
          </div>
        </div>
      </section>
      <section className="section bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.22em] text-[#16A34A]">Our shared commitments</p><h2 className="mt-3 text-4xl font-black text-[#0F172A]">Safe, compliant operations that improve continuously.</h2></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {hseObjectives.map((item) => <div key={item} className="border border-slate-200 bg-white p-6"><h3 className="text-lg font-black text-[#0F172A]">{item}</h3></div>)}
          </div>
        </div>
      </section>
    </>
  );
}
