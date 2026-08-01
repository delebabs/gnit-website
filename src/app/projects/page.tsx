import PageHero from '@/components/ui/PageHero';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <PageHero badge="OUR PROJECTS" title="Infrastructure Delivered With Purpose." description="Representative GNIT sector capabilities spanning energy, ICT, security, engineering and Smart Communities across Nigeria." />
      <section className="section bg-[#F8FAFC]">
        <div className="container">
          <div className="mb-10 max-w-3xl border-l-4 border-[#16A34A] bg-white p-6 text-sm leading-7 text-slate-600">These sector project profiles demonstrate the kinds of solutions GNIT delivers. Client names and confidential project details are withheld until approved for publication.</div>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,.08),rgba(15,23,42,.08)),url('${project.image}')` }} />
                <div className="p-8"><span className="text-sm font-bold uppercase text-[#16A34A]">{project.category}</span><h2 className="mt-3 text-2xl font-black text-[#0F172A]">{project.title}</h2><p className="mt-3 leading-7 text-slate-600">{project.description}</p><div className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-500">{project.sector} · {project.location}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
