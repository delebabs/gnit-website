'use client';

import { ArrowUp, Mail, MessageCircle, Phone } from 'lucide-react';

const contacts = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348059991118',
    icon: MessageCircle,
    external: true,
    className: 'bg-[#3fae43]',
  },
  {
    label: 'Email GNIT',
    href: 'mailto:info@gnit-ltd.com',
    icon: Mail,
    className: 'bg-[#06264b]',
  },
  {
    label: 'Call GNIT',
    href: 'tel:+2348059991118',
    icon: Phone,
    className: 'bg-[#06264b]',
  },
];

export default function FloatingContact() {
  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 overflow-hidden shadow-2xl lg:block">
      {contacts.map(({ label, href, icon: Icon, external, className }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          className={`grid h-14 w-14 place-items-center border-b border-white/15 text-white transition hover:w-16 ${className}`}
        >
          <Icon size={25} strokeWidth={1.8} />
        </a>
      ))}
      <button
        type="button"
        aria-label="Back to top"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="grid h-14 w-14 place-items-center bg-[#07162a] text-white transition hover:w-16 hover:bg-[#3fae43]"
      >
        <ArrowUp size={25} strokeWidth={1.8} />
      </button>
    </div>
  );
}
