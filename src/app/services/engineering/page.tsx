import PageHero from '@/components/ui/PageHero'; import SectionHeader from '@/components/ui/SectionHeader'; import CapabilityGrid,{Capability} from '@/components/ui/CapabilityGrid';
const engineeringImages=[
  'https://images.unsplash.com/photo-1735571919545-5bbfd52b8f3d?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1581092919535-7146ff1a590a?auto=format&fit=crop&q=90&w=1600',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=90&w=1600',
];
const items:Capability[]=[['Feasibility Studies','Technical and commercial assessments that establish an informed project path.'],['Engineering Design','Concept-to-detail design for safe, compliant and efficient infrastructure.'],['Procurement Support','Technical specifications, vendor evaluation and equipment selection support.'],['Project Management','Planning, risk management, coordination and disciplined project delivery.'],['Construction Supervision','Site supervision, inspection and quality assurance through execution.'],['Technical Advisory','Independent expert support for complex infrastructure decisions and assurance.']].map(([title,description],index)=>({title,description,image:engineeringImages[index]}));
export default function Engineering(){return <><PageHero badge="ENGINEERING CONSULTANCY" title="Engineering Expertise From Concept To Completion." description="Engineering design, project management, feasibility studies and technical advisory."/><section className="section bg-[#F8FAFC]"><div className="container"><SectionHeader badge="CAPABILITIES" title="Engineering Consultancy" description="Professional guidance and technical control throughout the infrastructure lifecycle." center/><CapabilityGrid items={items}/></div></section></>}
