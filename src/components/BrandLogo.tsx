import Image from 'next/image';
import Link from 'next/link';
export default function BrandLogo({inverse=false}:{inverse?:boolean}){return <Link href="/" aria-label="GNIT home" className={inverse?'inline-block bg-white px-3 py-2':'inline-block'}><Image src="/brand/gnit-a2-horizontal.png" alt="GNIT LTD — Engineering Critical Infrastructure for Africa" width={330} height={120} priority className="h-auto w-[238px] md:w-[270px]"/></Link>}
