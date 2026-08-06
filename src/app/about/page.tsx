import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';

export default function About() {
  return (
    <>
      <PageHero
        badge="ABOUT GNIT"
        title="Building Reliable Infrastructure Through Engineering Excellence."
        description="GNIT combines engineering knowledge, innovative technology, renewable energy and digital infrastructure."
      />
      <section className="section">
        <div className="container grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              badge="COMPANY PROFILE"
              title="Engineering Solutions Designed Around Performance."
              description="GNIT is an engineering and technology company delivering integrated solutions across renewable energy, ICT infrastructure, engineering consultancy and electronic security."
            />
            <p className="mt-6 leading-8 text-slate-600">
              We help governments, commercial organisations, educational institutions and industrial clients design, implement and maintain reliable infrastructure.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-100 p-10">
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="mt-4 leading-8 text-slate-600">
              To deliver innovative engineering and technology solutions that improve operational efficiency, resilience and sustainable development.
            </p>
            <h3 className="mt-10 text-2xl font-bold">Vision</h3>
            <p className="mt-4 leading-8 text-slate-600">
              To become one of Africa&apos;s most respected engineering and infrastructure solution providers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
