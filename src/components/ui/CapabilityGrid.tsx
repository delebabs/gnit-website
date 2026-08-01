import Image from 'next/image';

export type Capability={title:string;description:string;image:string;imageAlt?:string};

export default function CapabilityGrid({items}:{items:Capability[]}){
  return <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {items.map(item=><article key={item.title} className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <Image src={item.image} alt={item.imageAlt ?? item.title} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" quality={95} className="object-cover object-center transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061733]/35 to-transparent" />
      </div>
      <div className="p-7"><h3 className="text-xl font-black text-[#0F172A]">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.description}</p></div>
    </article>)}
  </div>
}
