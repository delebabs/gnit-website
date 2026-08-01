import PageHero from '@/components/ui/PageHero'; import SectionHeader from '@/components/ui/SectionHeader'; import CapabilityGrid,{Capability} from '@/components/ui/CapabilityGrid';
const securityImages=[
  'https://images.unsplash.com/photo-1572044727169-8b7dda92916e?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?auto=format&fit=crop&q=90&w=1600',
];
const items:Capability[]=[['Video Surveillance','Enterprise CCTV systems, video management and intelligent monitoring.'],['Access Control','Secure access control for people, vehicles and protected areas.'],['Perimeter Protection','Layered perimeter detection, electric fencing and secure-site design.'],['Intrusion Detection','Integrated alarm systems that detect and communicate threats quickly.'],['Command & Control','Centralised security operations and visibility across connected systems.'],['Maintenance & Support','Preventive servicing and responsive support for reliable security operations.']].map(([title,description],index)=>({title,description,image:securityImages[index]}));
export default function Security(){return <><PageHero badge="ELECTRONIC SECURITY" title="Security Systems That Protect What Matters." description="CCTV, access control, perimeter protection and command-centre solutions."/><section className="section bg-[#F8FAFC]"><div className="container"><SectionHeader badge="CAPABILITIES" title="Electronic Security" description="Integrated security technology that protects people, assets and critical facilities." center/><CapabilityGrid items={items}/></div></section></>}
