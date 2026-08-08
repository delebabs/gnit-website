import PageHero from '@/components/ui/PageHero';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({ title: 'Projects & Sector Capabilities', description: 'Explore representative GNIT project capabilities in renewable energy, ICT infrastructure, electronic security, engineering and Smart Communities across Nigeria.', path: '/projects', keywords: ['engineering projects Nigeria', 'solar projects Nigeria', 'ICT projects Nigeria', 'security projects Nigeria'] });

const projectVisuals: Record<string, { image: string; reference: string; referenceUrl: string }> = {
  'healthcare-energy-resilience': { image: 'https://static.longi.com/P_Vsolution_095dc7e7cc.jpg', reference: 'LONGi PV solutions', referenceUrl: 'https://www.longi.com/us/' },
  'education-network-backbone': { image: 'https://static.tp-link.com/assets/images/omada/case-study.png', reference: 'Omada enterprise Wi-Fi', referenceUrl: 'https://www.omadanetworks.com/us/landing/omada-access-point/' },
  'financial-services-security': { image: 'https://tpp.hikvision.com/Common/Images/SolarPoweredSecurityCameras/offer-img_m.png', reference: 'Hikvision security solutions', referenceUrl: 'https://tpp.hikvision.com/Solution/ExploreSolutions' },
  'manufacturing-hybrid-power': { image: 'https://eo.deyeinverter.com/template/eo/images/storage-1.jpg', reference: 'Deye commercial energy storage', referenceUrl: 'https://eo.deyeinverter.com/solutions/commercial-energy-storage-systems/' },
  'utility-substation-automation': { image: 'https://images.unsplash.com/photo-1735571919545-5bbfd52b8f3d?auto=format&fit=crop&q=90&w=1800', reference: 'Legrand electrical infrastructure', referenceUrl: 'https://www.legrand.ng/en/legrand-nigeria' },
  'estate-fibre-gpon-rollout': { image: 'https://static.tp-link.com/assets/images/omada/case-study.png', reference: 'Omada managed network platform', referenceUrl: 'https://www.omadanetworks.com/us/business-networking/omada/wifi/' },
  'logistics-terminal-security': { image: 'https://tpp.hikvision.com/Common/Images/SolarPoweredSecurityCameras/offer-img_m.png', reference: 'Hikvision entrance and exit management', referenceUrl: 'https://tpp.hikvision.com/tpp/EE-Integration' },
  'commercial-development-supervision': { image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=90&w=1800', reference: 'Legrand project services', referenceUrl: 'https://www.legrand.ng/en/legrand-services' },
  'public-facility-solar-microgrid': { image: 'https://static.longi.com/P_Vsolution_095dc7e7cc.jpg', reference: 'LONGi commercial and industrial PV', referenceUrl: 'https://www.longi.com/us/' },
  'public-sector-data-centre': { image: 'https://www.hpe.com/content/dam/hpe/shared-publishing/images-norend/0xx/05/0525618-1600x1064.jpg', reference: 'HPE data-centre networking', referenceUrl: 'https://www.hpe.com/us/en/networking/data-center.html' },
  'industrial-estate-smart-community': { image: '/images/smart-communities-hero.png', reference: 'Integrated GNIT Smart Communities framework', referenceUrl: '/smart-communities' },
  'hospitality-security-connectivity': { image: 'https://static.tp-link.com/assets/images/omada/case-study.png', reference: 'Omada business Wi-Fi', referenceUrl: 'https://www.omadanetworks.com/us/business-networking/omada/wifi/' },
};

export default function Projects() {
  return (
    <>
      <PageHero badge="OUR PROJECTS" title="Infrastructure Delivered With Purpose." description="Representative GNIT sector capabilities spanning energy, ICT, security, engineering and Smart Communities across Nigeria." />
      <section className="section bg-[#F8FAFC]">
        <div className="container">
          <div className="mb-10 max-w-3xl border-l-4 border-[#16A34A] bg-white p-6 text-sm leading-7 text-slate-600">These sector project profiles demonstrate the kinds of solutions GNIT delivers. Client names and confidential project details are withheld until approved for publication. Product brands shown are reference technologies only; final equipment selection follows project requirements and client approval.</div>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const visual = projectVisuals[project.slug] ?? { image: project.image, reference: 'GNIT solution reference', referenceUrl: '/services' };
              return (
                <article key={project.slug} className="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <Link href={`/projects/${project.slug}`} className="block">
                    <div className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,.08),rgba(15,23,42,.08)),url('${visual.image}')` }} />
                    <div className="p-8"><span className="text-sm font-bold uppercase text-[#16A34A]">{project.category}</span><h2 className="mt-3 text-2xl font-black text-[#0F172A]">{project.title}</h2><p className="mt-3 leading-7 text-slate-600">{project.description}</p><div className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-500">{project.sector} · {project.location}</div></div>
                  </Link>
                  <div className="px-8 pb-8"><a href={visual.referenceUrl} target={visual.referenceUrl.startsWith('http') ? '_blank' : undefined} rel={visual.referenceUrl.startsWith('http') ? 'noreferrer' : undefined} className="inline-block text-xs font-bold uppercase text-[#16A34A] hover:text-[#0F172A]">Technology reference: {visual.reference} ↗</a></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
