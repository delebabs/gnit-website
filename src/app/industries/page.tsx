import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';

const industries = [
  {name:'Government', description:'Resilient public infrastructure, secure facilities and smart public services.', image:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=95&w=1600'},
  {name:'Power & Utilities', description:'Generation, substations, renewable energy and utility modernisation.', image:'https://images.unsplash.com/photo-1735571919545-5bbfd52b8f3d?auto=format&fit=crop&q=95&w=1600'},
  {name:'Manufacturing', description:'Reliable industrial power, process facilities, safety and plant connectivity.', image:'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=95&w=1600'},
  {name:'Healthcare', description:'Critical power, technology and security systems for care environments.', image:'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=95&w=1600'},
  {name:'Education', description:'Connected, secure campuses built for learning, research and growth.', image:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=95&w=1600'},
  {name:'Commercial', description:'Smart buildings, dependable power and integrated building technologies.', image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=95&w=1600'},
  {name:'Financial Services', description:'Secure, available infrastructure for branches, offices and data operations.', image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=95&w=1600'},
  {name:'Telecommunications', description:'Fibre, radio, network and data infrastructure that keeps communities connected.', image:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=95&w=1600'},
  {name:'Oil & Gas', description:'Safety-led, mission-critical electrical and security infrastructure.', image:'https://images.unsplash.com/photo-1581093458791-9f3c3250f279?auto=format&fit=crop&q=95&w=1600'},
  {name:'Residential', description:'Reliable energy, smart technology and protection for modern estates.', image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=95&w=1600'},
];

export default function Industries(){return <><PageHero badge="INDUSTRIES" title="Engineering Solutions Tailored For Every Industry." description="GNIT supports public and private-sector organisations with dependable, high-performance infrastructure."/><section className="section"><div className="container"><SectionHeader badge="SECTORS" title="Where We Deliver" description="Specialist infrastructure capabilities applied to the needs of each sector." center/><div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{industries.map(({name,description,image})=><article key={name} className="group relative h-72 overflow-hidden bg-[#0F172A]"><Image src={image} alt={`${name} infrastructure`} fill quality={95} sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-110"/><div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-6"><h2 className="text-xl font-black text-white">{name}</h2><p className="mt-2 text-sm leading-6 text-white/80">{description}</p></div></article>)}</div></div></section></>}
