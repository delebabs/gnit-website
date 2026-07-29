import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { services } from '@/data/services';

export default function Page() {
  const data = services.find((service) => service.slug === 'security')!;

  return (
    <>
      <PageHero badge="ELECTRONIC SECURITY" title={data.title} description={data.description} />
      <section className="section">
        <div className="container">
          <SectionHeader badge="CAPABILITIES" title={data.title} description={data.description} center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {['Video Surveillance', 'Access Control', 'Perimeter Protection', 'Intrusion Detection', 'Command & Control', 'Maintenance & Support'].map((item) => (
              <div key={item} className="card p-7">
                <h3 className="text-xl font-bold">{item}</h3>
                <p className="mt-3 text-slate-600">Integrated security solutions designed around facility risk, operational requirements and resilience.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
