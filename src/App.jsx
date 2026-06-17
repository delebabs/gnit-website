import React, { useState, useEffect, useRef } from 'react';
import {
  Sun, Wind, Battery, ArrowRight, Menu, X, CheckCircle2,
  Gauge, MapPin, Mail, Phone, TrendingUp, ClipboardCheck,
  Wrench, Quote, Leaf
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

/* ---------- Design tokens ---------- */
const C = {
  slate: '#16243A',
  ink: '#0E1826',
  amber: '#F2A93B',
  amberDeep: '#D88B1F',
  teal: '#3FA9A4',
  tealDeep: '#2C8782',
  mist: '#EDEFE9',
  cloud: '#FAFAF7',
  graphite: '#23262B',
  graphiteSoft: '#5B6470',
  hair: 'rgba(237,239,233,0.14)',
  hairDark: 'rgba(22,36,58,0.12)',
};

const FONT_DISPLAY = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

/* ---------- Static content ---------- */
const NAV_LINKS = [
  { id: 'solutions', label: 'Solutions' },
  { id: 'estimator', label: 'Estimator' },
  { id: 'process', label: 'How it works' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const STATS = [
  { value: 42, suffix: ' MW', label: 'Installed capacity' },
  { value: 186, suffix: '', label: 'Commercial sites live' },
  { value: 61400, suffix: ' t', label: 'CO2 offset per year' },
  { value: 14, suffix: '', label: 'States served' },
];

const SOLUTIONS = [
  {
    icon: Sun,
    title: 'Commercial solar',
    body: 'Rooftop and ground-mount arrays sized to your load profile and roof geometry, not a generic per-square-foot estimate.',
  },
  {
    icon: Wind,
    title: 'Wind microgrids',
    body: 'Small-scale turbines for sites with steady wind exposure — coastal yards, ridgelines, and open flatland warehouses.',
  },
  {
    icon: Battery,
    title: 'Hybrid storage & control',
    body: 'Battery buffering and a control layer that blends solar, wind, and grid power automatically as conditions shift.',
  },
];

const PROCESS = [
  {
    icon: ClipboardCheck,
    title: 'Site assessment',
    body: 'We model your roof, land, load curve, and local wind data before proposing a single panel or pole.',
  },
  {
    icon: Gauge,
    title: 'System design',
    body: 'Engineers size the solar array, turbines, and storage together as one system, not three separate quotes.',
  },
  {
    icon: Wrench,
    title: 'Permitting & install',
    body: 'We handle utility interconnection and permitting, then install with our own certified crews.',
  },
  {
    icon: TrendingUp,
    title: 'Monitoring & tuning',
    body: 'Live telemetry tracks output against the model, and we tune the system as your load or weather patterns change.',
  },
];

const PROJECTS = [
  {
    name: 'Loom Logistics Distribution Center',
    location: 'Spartanburg, SC',
    detail: '80 kW solar + 2 turbines',
    result: 'Cut grid draw 64% in year one',
  },
  {
    name: 'Bridgeport Cold Storage',
    location: 'Bridgeport, CT',
    detail: '50 kW solar + battery',
    result: 'Avoided 2 demand-charge tiers',
  },
  {
    name: 'Harrow Mills Textile Plant',
    location: 'Greenville, SC',
    detail: '24 kW solar + 1 turbine',
    result: 'Paid back in 5.4 years',
  },
];

const WIND_OPTIONS = [
  { id: 'low', label: 'Low', mult: 0.06 },
  { id: 'medium', label: 'Medium', mult: 0.12 },
  { id: 'high', label: 'High', mult: 0.2 },
];

/* ---------- Helpers ---------- */
function formatNumber(n) {
  return Math.round(n).toLocaleString('en-US');
}

function useCountUp(target, duration = 1300) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStarted(true);
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    let startTime = null;
    let frame;
    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return [value, ref];
}

/* ---------- Small subcomponents ---------- */
function Mark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M10 28 L16 4 L22 28" stroke="#D64545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 22 H20.5" stroke="#D64545" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 16 H19" stroke="#D64545" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.5 10 H17.5" stroke="#D64545" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 28 H25" stroke="#D64545" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 4 V1" stroke="#D64545" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19.5 3.5 A4.2 4.2 0 0 1 19.5 9.5" stroke="#D64545" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
      <path d="M22 1.5 A7.3 7.3 0 0 1 22 11.5" stroke="#D64545" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={C.amber} />
    </svg>
  );
}

function StatBlock({ stat }) {
  const [value, ref] = useCountUp(stat.value);
  return (
    <div ref={ref} className="flex flex-col gap-1 py-2">
      <span style={{ fontFamily: FONT_MONO, color: C.cloud, fontSize: '2rem', fontWeight: 600 }}>
        {formatNumber(value)}{stat.suffix}
      </span>
      <span style={{ fontFamily: FONT_BODY, color: 'rgba(250,250,247,0.6)', fontSize: '0.85rem' }}>
        {stat.label}
      </span>
    </div>
  );
}

function HeroScene() {
  return (
    <svg
      viewBox="0 0 640 440"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C.amber} stopOpacity="0.55" />
          <stop offset="100%" stopColor={C.amber} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.slate} stopOpacity="0" />
          <stop offset="100%" stopColor={C.ink} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="640" height="440" fill="url(#skyFade)" />

      <circle cx="470" cy="120" r="110" fill="url(#sunGlow)" className="solv-sun-pulse" />
      <circle cx="470" cy="120" r="34" fill={C.amber} className="solv-sun-pulse" />

      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M -40 ${260 + i * 38} C 120 ${220 + i * 38}, 260 ${300 + i * 38}, 420 ${250 + i * 38} S 640 ${230 + i * 38}, 700 ${260 + i * 38}`}
          fill="none"
          stroke={C.teal}
          strokeOpacity={0.22 - i * 0.03}
          strokeWidth="2"
          strokeDasharray="10 16"
          className={`solv-wind-line solv-wind-line-${i}`}
        />
      ))}

      <line x1="0" y1="400" x2="640" y2="400" stroke={C.hair} strokeWidth="1" />

      <g style={{ transformOrigin: '560px 330px' }} className="solv-turbine">
        <line x1="560" y1="330" x2="560" y2="400" stroke="rgba(250,250,247,0.35)" strokeWidth="2" />
        <circle cx="560" cy="330" r="3" fill="rgba(250,250,247,0.5)" />
        {[0, 120, 240].map((deg) => (
          <rect
            key={deg}
            x="558"
            y="296"
            width="4"
            height="34"
            rx="2"
            fill="rgba(250,250,247,0.4)"
            transform={`rotate(${deg} 560 330)`}
          />
        ))}
      </g>
    </svg>
  );
}

/* ---------- Main page ---------- */
export default function GnitLtdSite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [systemSize, setSystemSize] = useState(120);
  const [sunHours, setSunHours] = useState(5.2);
  const [windExposure, setWindExposure] = useState('medium');
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [pastHero, setPastHero] = useState(false);
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    const targets = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (targets.length === 0) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const heroEnd = document.getElementById('hero-end');
    if (!heroEnd) return undefined;
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0 });
    observer.observe(heroEnd);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const contact = document.getElementById('contact');
    if (!contact) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInContact(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const windMult = WIND_OPTIONS.find((w) => w.id === windExposure).mult;
  const solarAnnualKWh = systemSize * sunHours * 365 * 0.78;
  const windBonusKWh = solarAnnualKWh * windMult;
  const totalAnnualKWh = solarAnnualKWh + windBonusKWh;
  const annualSavings = totalAnnualKWh * 0.14;
  const co2OffsetKg = totalAnnualKWh * 0.42;
  const treesEquivalent = co2OffsetKg / 21;

  const chartData = [
    { name: 'Solar only', solar: solarAnnualKWh, wind: 0 },
    { name: 'Solar + Wind', solar: solarAnnualKWh, wind: windBonusKWh },
  ];

  return (
    <div style={{ fontFamily: FONT_BODY, backgroundColor: C.cloud, color: C.graphite }} className="w-full min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

        @keyframes solv-sun-pulse {
          0%, 100% { opacity: 0.92; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.035); }
        }
        @keyframes solv-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes solv-wind-flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -260; }
        }
        .solv-sun-pulse {
          transform-origin: 470px 120px;
          animation: solv-sun-pulse 5s ease-in-out infinite;
        }
        .solv-turbine {
          animation: solv-spin 7s linear infinite;
        }
        .solv-wind-line {
          animation: solv-wind-flow 7s linear infinite;
        }
        .solv-wind-line-1 { animation-duration: 9s; }
        .solv-wind-line-2 { animation-duration: 11s; }
        .solv-wind-line-3 { animation-duration: 13s; }

        .solv-segment {
          transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .solv-sun-pulse, .solv-turbine, .solv-wind-line {
            animation: none !important;
          }
        }
      `}</style>

      {/* ---------- Nav ---------- */}
      <header
        className="sticky top-0 z-40 w-full"
        style={{ backgroundColor: 'rgba(22,36,58,0.92)', backdropFilter: 'blur(6px)', borderBottom: `1px solid ${C.hair}` }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('top')}
            className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
            style={{ color: C.cloud }}
          >
            <Mark size={40} />
            <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: '1.6rem', letterSpacing: '0.01em' }}>
              GNIT LTD
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
                className="text-sm font-medium pb-1 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
                style={{
                  color: activeSection === link.id ? C.amber : 'rgba(250,250,247,0.78)',
                  borderBottom: activeSection === link.id ? `2px solid ${C.amber}` : '2px solid transparent',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="text-sm font-semibold px-4 py-2 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ backgroundColor: C.amber, color: C.ink }}
            >
              Request a proposal
            </button>
          </nav>

          <button
            className="md:hidden focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
            style={{ color: C.cloud }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: mobileOpen ? '420px' : '0px',
            borderTop: mobileOpen ? `1px solid ${C.hair}` : '1px solid transparent',
          }}
        >
          <div className="px-5 pb-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-sm font-medium pt-3"
                style={{ color: activeSection === link.id ? C.amber : 'rgba(250,250,247,0.85)' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="text-sm font-semibold px-4 py-2.5 rounded-full text-center"
              style={{ backgroundColor: C.amber, color: C.ink }}
            >
              Request a proposal
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.slate }}>
          <HeroScene />
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="max-w-xl">
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6"
                style={{ backgroundColor: 'rgba(63,169,164,0.16)', color: C.teal, fontFamily: FONT_MONO, letterSpacing: '0.04em' }}
              >
                COMMERCIAL &amp; INDUSTRIAL ENERGY
              </span>
              <h1
                style={{ fontFamily: FONT_DISPLAY, color: C.cloud, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, lineHeight: 1.08 }}
              >
                Solar and wind, run as one system.
              </h1>
              <p className="mt-6 text-base sm:text-lg" style={{ color: 'rgba(250,250,247,0.75)', lineHeight: 1.6 }}>
                GNIT LTD designs, builds, and monitors hybrid renewable systems for commercial
                sites — engineered to keep producing when the sun clouds over and the wind drops.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo('estimator')}
                  className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ backgroundColor: C.amber, color: C.ink }}
                >
                  Estimate your yield <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollTo('process')}
                  className="text-sm font-semibold px-5 py-3 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ border: `1px solid ${C.hair}`, color: C.cloud }}
                >
                  See our process
                </button>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2" style={{ borderTop: `1px solid ${C.hair}`, paddingTop: '1.75rem' }}>
              {STATS.map((stat) => (
                <StatBlock key={stat.label} stat={stat} />
              ))}
            </div>
            <div id="hero-end" />
          </div>
        </section>

        {/* ---------- Solutions ---------- */}
        <section id="solutions" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span style={{ fontFamily: FONT_MONO, color: C.tealDeep, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              SOLUTIONS
            </span>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>
              One system, two sources
            </h2>
            <p className="mt-4 text-base" style={{ color: C.graphiteSoft, lineHeight: 1.6 }}>
              Most installers sell solar. We size solar and wind against the same load profile,
              so your site keeps producing across more hours of the day and more days of the year.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {SOLUTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ border: `1px solid ${C.hairDark}`, backgroundColor: C.mist }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(242,169,59,0.16)' }}
                  >
                    <Icon size={20} color={C.amberDeep} />
                  </div>
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: '1.1rem' }}>{item.title}</h3>
                  <p style={{ color: C.graphiteSoft, fontSize: '0.92rem', lineHeight: 1.6 }}>{item.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------- Estimator ---------- */}
        <section id="estimator" style={{ backgroundColor: C.ink }} className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl">
              <span style={{ fontFamily: FONT_MONO, color: C.teal, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                ESTIMATOR
              </span>
              <h2 style={{ fontFamily: FONT_DISPLAY, color: C.cloud, fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>
                See what your site could produce
              </h2>
              <p className="mt-4 text-base" style={{ color: 'rgba(250,250,247,0.65)', lineHeight: 1.6 }}>
                Move the controls to match your site. These figures are illustrative — your
                proposal will be modeled against your actual roof, load, and local wind data.
              </p>
            </div>

            <div className="mt-12 grid lg:grid-cols-2 gap-10">
              {/* Controls */}
              <div className="flex flex-col gap-8">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <label htmlFor="systemSize" className="text-sm font-medium" style={{ color: C.cloud }}>
                      System size
                    </label>
                    <span style={{ fontFamily: FONT_MONO, color: C.amber }}>{systemSize} kW</span>
                  </div>
                  <input
                    id="systemSize"
                    type="range"
                    min="20"
                    max="400"
                    step="10"
                    value={systemSize}
                    onChange={(e) => setSystemSize(Number(e.target.value))}
                    className="w-full"
                    style={{ accentColor: C.amber }}
                  />
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <label htmlFor="sunHours" className="text-sm font-medium" style={{ color: C.cloud }}>
                      Average daily sun hours
                    </label>
                    <span style={{ fontFamily: FONT_MONO, color: C.amber }}>{sunHours.toFixed(1)} hrs</span>
                  </div>
                  <input
                    id="sunHours"
                    type="range"
                    min="3"
                    max="7"
                    step="0.1"
                    value={sunHours}
                    onChange={(e) => setSunHours(Number(e.target.value))}
                    className="w-full"
                    style={{ accentColor: C.amber }}
                  />
                </div>

                <div>
                  <span className="text-sm font-medium block mb-2" style={{ color: C.cloud }}>
                    Wind exposure
                  </span>
                  <div className="flex gap-2">
                    {WIND_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setWindExposure(opt.id)}
                        className="solv-segment flex-1 text-sm font-medium py-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                        style={{
                          backgroundColor: windExposure === opt.id ? C.teal : 'transparent',
                          color: windExposure === opt.id ? C.ink : 'rgba(250,250,247,0.7)',
                          border: `1px solid ${windExposure === opt.id ? C.teal : C.hair}`,
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output */}
              <div
                className="rounded-2xl p-7 sm:p-8 flex flex-col gap-6"
                style={{ backgroundColor: C.slate, border: `1px solid ${C.hair}` }}
              >
                <div>
                  <span className="text-xs" style={{ color: 'rgba(250,250,247,0.55)', fontFamily: FONT_MONO, letterSpacing: '0.04em' }}>
                    ESTIMATED ANNUAL OUTPUT
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span style={{ fontFamily: FONT_MONO, color: C.cloud, fontSize: '2.4rem', fontWeight: 600 }}>
                      {formatNumber(totalAnnualKWh)}
                    </span>
                    <span style={{ color: 'rgba(250,250,247,0.6)' }}>kWh</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2" style={{ borderTop: `1px solid ${C.hair}` }}>
                  <div>
                    <span className="text-xs" style={{ color: 'rgba(250,250,247,0.55)' }}>Annual savings</span>
                    <div style={{ fontFamily: FONT_MONO, color: C.amber, fontSize: '1.3rem', fontWeight: 600 }}>
                      ${formatNumber(annualSavings)}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs" style={{ color: 'rgba(250,250,247,0.55)' }}>CO2 offset</span>
                    <div style={{ fontFamily: FONT_MONO, color: C.teal, fontSize: '1.3rem', fontWeight: 600 }}>
                      {formatNumber(co2OffsetKg / 1000)} t/yr
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2" style={{ borderTop: `1px solid ${C.hair}` }}>
                  <Leaf size={16} color={C.teal} />
                  <span className="text-sm" style={{ color: 'rgba(250,250,247,0.7)' }}>
                    Roughly equivalent to {formatNumber(treesEquivalent)} trees planted per year
                  </span>
                </div>

                <div className="pt-2" style={{ borderTop: `1px solid ${C.hair}` }}>
                  <span
                    className="text-xs"
                    style={{ color: 'rgba(250,250,247,0.55)', fontFamily: FONT_MONO, letterSpacing: '0.04em' }}
                  >
                    SOLAR ONLY VS. SOLAR + WIND
                  </span>
                  <div className="mt-3" style={{ height: 180 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
                        <CartesianGrid stroke={C.hair} vertical={false} />
                        <XAxis dataKey="name" tick={{ fill: 'rgba(250,250,247,0.6)', fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis
                          tick={{ fill: 'rgba(250,250,247,0.45)', fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          tickFormatter={(v) => `${Math.round(v / 1000)}k`}
                          width={36}
                        />
                        <Tooltip
                          cursor={{ fill: 'rgba(250,250,247,0.06)' }}
                          contentStyle={{ backgroundColor: C.ink, border: `1px solid ${C.hair}`, borderRadius: 8 }}
                          labelStyle={{ color: C.cloud }}
                          formatter={(value, key) => [`${formatNumber(value)} kWh`, key === 'solar' ? 'Solar' : 'Wind bonus']}
                        />
                        <Bar dataKey="solar" stackId="a" fill={C.amber} radius={[4, 4, 0, 0]} />
                        <Bar dataKey="wind" stackId="a" fill={C.teal} radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section id="process" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span style={{ fontFamily: FONT_MONO, color: C.tealDeep, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              HOW IT WORKS
            </span>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>
              How a GNIT LTD system gets built
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span style={{ fontFamily: FONT_MONO, color: C.amberDeep, fontSize: '0.85rem' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1" style={{ backgroundColor: C.hairDark }} />
                    <Icon size={18} color={C.graphiteSoft} />
                  </div>
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: '1.02rem' }}>{step.title}</h3>
                  <p style={{ color: C.graphiteSoft, fontSize: '0.9rem', lineHeight: 1.6 }}>{step.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" style={{ backgroundColor: C.mist }} className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl">
              <span style={{ fontFamily: FONT_MONO, color: C.tealDeep, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                PROJECTS
              </span>
              <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>
                Recently commissioned
              </h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <div
                  key={project.name}
                  className="p-6 rounded-2xl flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: C.cloud, border: `1px solid ${C.hairDark}` }}
                >
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: C.graphiteSoft }}>
                    <MapPin size={13} />
                    {project.location}
                  </div>
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: '1.02rem' }}>{project.name}</h3>
                  <span style={{ fontFamily: FONT_MONO, fontSize: '0.82rem', color: C.graphiteSoft }}>
                    {project.detail}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-medium mt-1" style={{ color: C.tealDeep }}>
                    <CheckCircle2 size={15} />
                    {project.result}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-7 sm:p-8 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: C.slate }}>
              <Quote size={22} color={C.amber} />
              <p style={{ color: C.cloud, fontSize: '1.05rem', lineHeight: 1.6, fontFamily: FONT_DISPLAY, fontWeight: 500 }}>
                GNIT LTD modeled our cold storage load down to the compressor cycles. The wind
                turbines cover the night shift that solar never could.
              </p>
              <span className="text-sm" style={{ color: 'rgba(250,250,247,0.6)' }}>
                Priya Chandran, Facilities Director, Bridgeport Cold Storage
              </span>
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span style={{ fontFamily: FONT_MONO, color: C.tealDeep, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                CONTACT
              </span>
              <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>
                Get a proposal in five business days
              </h2>
              <p className="mt-4 text-base" style={{ color: C.graphiteSoft, lineHeight: 1.6 }}>
                Tell us about your site and current energy spend. An engineer will follow up with
                a modeled proposal, not a generic quote.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm" style={{ color: C.graphiteSoft }}>
                  <Mail size={16} /> proposals@gnitltd.example
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: C.graphiteSoft }}>
                  <Phone size={16} /> (843) 555-0142
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: C.graphiteSoft }}>
                  <MapPin size={16} /> Charleston, SC — serving the Southeast and Mid-Atlantic
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-7 sm:p-8" style={{ backgroundColor: C.mist, border: `1px solid ${C.hairDark}` }}>
              {submitted ? (
                <div className="flex flex-col items-center text-center gap-3 py-10">
                  <CheckCircle2 size={32} color={C.tealDeep} />
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: '1.1rem' }}>Request received</h3>
                  <p style={{ color: C.graphiteSoft, fontSize: '0.92rem' }}>
                    An engineer will reach out within five business days with a modeled proposal.
                  </p>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="px-3 py-2.5 rounded-lg text-sm focus-visible:ring-2 focus-visible:ring-offset-2"
                        style={{ border: `1px solid ${C.hairDark}`, backgroundColor: C.cloud }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-sm font-medium">Company</label>
                      <input
                        id="company"
                        type="text"
                        required
                        className="px-3 py-2.5 rounded-lg text-sm focus-visible:ring-2 focus-visible:ring-offset-2"
                        style={{ border: `1px solid ${C.hairDark}`, backgroundColor: C.cloud }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="px-3 py-2.5 rounded-lg text-sm focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ border: `1px solid ${C.hairDark}`, backgroundColor: C.cloud }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium">Tell us about your site</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="px-3 py-2.5 rounded-lg text-sm resize-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ border: `1px solid ${C.hairDark}`, backgroundColor: C.cloud }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 text-sm font-semibold px-5 py-3 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ backgroundColor: C.amber, color: C.ink }}
                  >
                    Send request
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer style={{ backgroundColor: C.ink }} className="py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-2" style={{ color: C.cloud }}>
            <Mark size={34} />
            <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: '1.35rem' }}>GNIT LTD</span>
          </div>
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
                style={{ color: 'rgba(250,250,247,0.6)' }}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <span className="text-xs" style={{ color: 'rgba(250,250,247,0.4)' }}>
            © 2026 GNIT LTD. Figures shown are illustrative.
          </span>
        </div>
      </footer>

      {pastHero && !inContact && (
        <div className="fixed bottom-5 inset-x-5 sm:inset-x-auto sm:right-6 sm:bottom-6 z-30 flex justify-center sm:justify-end">
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ backgroundColor: C.amber, color: C.ink }}
          >
            Request a proposal <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
