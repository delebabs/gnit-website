import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Cable,
  Headphones,
  Network,
  ShieldCheck,
  Sun,
} from 'lucide-react';

const offerings = [
  {
    title: 'EPC & Infrastructure',
    copy: 'Engineering, procurement and construction services for infrastructure and industrial projects.',
    icon: Building2,
    href: '/services/engineering',
  },
  {
    title: 'Energy Solutions',
    copy: 'Solar, wind, hybrid and energy-storage solutions for a sustainable and reliable future.',
    icon: Sun,
    href: '/services/green-energy',
  },
  {
    title: 'ICT Infrastructure',
    copy: 'Enterprise networking, data centres, cybersecurity and systems integration solutions.',
    icon: Network,
    href: '/services/ict',
  },
  {
    title: 'Security Systems',
    copy: 'Integrated CCTV, access control, intrusion detection and intelligent monitoring systems.',
    icon: ShieldCheck,
    href: '/services/security',
  },
];

const metrics = [
  { title: 'Integrated Delivery', copy: 'End-to-End Solutions', icon: Building2 },
  { title: 'Multi-Sector Expertise', copy: 'Across Critical Industries', icon: Cable },
  { title: '24/7 Technical Support', copy: 'Lifecycle Service', icon: Headphones },
  { title: 'Pan-African Operations', copy: 'Built for Africa', icon: Network },
];

const smartFeatures = [
  'Renewable energy',
  'Fibre & GPON',
  'Enterprise Wi-Fi',
  'CCTV & access control',
  'Smart metering',
  'Central monitoring',
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#07162a] pt-[92px] lg:pt-[132px]">
        <div className="relative hidden min-h-[490px] aspect-[3.14/1] lg:block">
          <Image
            src="/images/gnit-reference-hero-clean.png"
            alt="GNIT engineering infrastructure across power, telecommunications, renewable energy, security and data systems"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031126]/30 via-transparent to-[#031126]/10" />
          <Link
            href="/request-consultation"
            aria-label="Request consultation"
            className="absolute left-[26.3%] top-[83.8%] h-[8.5%] w-[14.4%]"
          />
          <Link
            href="/services"
            aria-label="Explore services"
            className="absolute left-[41.4%] top-[83.8%] h-[8.5%] w-[14.4%]"
          />
        </div>

        <div className="relative flex min-h-[610px] items-center bg-[linear-gradient(90deg,rgba(3,17,38,.92),rgba(3,17,38,.45)),url('/images/reference-infrastructure-hero.jpg')] bg-cover bg-center px-5 py-16 lg:hidden">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#65d66a]">
              Engineering · Technology · Energy · Security
            </p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[1.03] tracking-[-.045em] text-white sm:text-6xl">
              Engineering
              <br />
              Critical Infrastructure
              <br />
              <span className="text-[#45b649]">for Africa</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              GNIT LTD delivers integrated EPC, renewable energy, ICT infrastructure,
              security systems and consulting solutions that power industries, connect
              communities and support sustainable growth across Africa.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/request-consultation"
                className="inline-flex min-h-14 items-center gap-2 bg-[#3fae43] px-7 text-sm font-black uppercase text-white transition hover:-translate-y-0.5 hover:bg-[#2f9234] hover:shadow-xl"
              >
                Request consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-14 items-center gap-2 border border-white px-7 text-sm font-black uppercase text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#07162a]"
              >
                Explore our services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase text-[#3fae43]">What we do</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#07162a] md:text-4xl">
              Integrated Solutions. End-to-End Delivery.
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-[#3fae43]" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {offerings.map(({ title, copy, icon: Icon, href }) => (
              <article
                key={title}
                className="group border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#3fae43] hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-slate-100 text-[#0d2850] ring-1 ring-slate-200 transition group-hover:bg-[#effaf0] group-hover:text-[#3fae43]">
                    <Icon size={31} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#07162a]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{copy}</p>
                  </div>
                </div>
                <Link
                  href={href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase text-[#3fae43]"
                >
                  Learn more <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06264b] text-white">
        <div className="container grid divide-y divide-white/15 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
          {metrics.map(({ title, copy, icon: Icon }) => (
            <div key={title} className="flex min-h-28 items-center gap-5 px-6 py-7 first:pl-0 last:pr-0">
              <Icon size={42} strokeWidth={1.6} className="shrink-0 text-white" />
              <div>
                <p className="text-xl font-black leading-tight">{title}</p>
                <p className="mt-1 text-sm text-slate-200">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-[#F8FAFC]">
        <div className="container grid items-stretch gap-8 lg:grid-cols-2">
          <div className="relative min-h-[340px] overflow-hidden bg-[#07162a]">
            <Image
              src="/images/smart-communities-hero.png"
              alt="GNIT Smart Communities combining energy, connectivity and security for a modern African development"
              fill
              quality={95}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07162a]/65 via-transparent to-transparent" />
          </div>
          <div className="py-3 lg:py-7">
            <p className="text-sm font-black uppercase tracking-[.22em] text-[#3fae43]">
              Flagship solution
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#07162a] md:text-5xl">
              GNIT Smart Communities™
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              A unified platform for modern estates, campuses, institutions, industrial parks
              and mixed-use developments. GNIT combines resilient energy, fibre connectivity,
              enterprise networking, integrated security, smart metering and central monitoring
              in one delivery framework.
            </p>
            <Link
              href="/smart-communities"
              className="mt-7 inline-flex items-center gap-2 bg-[#07162a] px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-[#3fae43]"
            >
              Explore Smart Communities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="container mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {smartFeatures.map((item) => (
            <div key={item} className="border-l-4 border-[#3fae43] bg-white p-5 font-black text-[#07162a] shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
