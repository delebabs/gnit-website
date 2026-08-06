'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="space-y-6 border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <input required placeholder="Company Name" className="border border-slate-300 px-4 py-3" />
        <input required placeholder="Contact Person" className="border border-slate-300 px-4 py-3" />
        <input required type="email" placeholder="Email Address" className="border border-slate-300 px-4 py-3" />
        <input placeholder="Phone Number" className="border border-slate-300 px-4 py-3" />
        <input placeholder="Project Location" className="border border-slate-300 px-4 py-3" />
        <select required name="service" defaultValue="" className="border border-slate-300 px-4 py-3">
          <option value="" disabled>Select a service or solution</option>
          <option value="renewable-energy">Renewable Energy</option>
          <option value="ict-infrastructure">ICT Infrastructure</option>
          <option value="electronic-security">Electronic Security</option>
          <option value="engineering-consultancy">Engineering Consultancy</option>
          <option value="smart-communities">GNIT Smart Communities</option>
        </select>
      </div>
      <textarea required rows={8} placeholder="Describe your project requirements" className="w-full border border-slate-300 px-4 py-3" />
      <button className="bg-[#16A34A] px-7 py-3 font-bold uppercase text-white hover:bg-[#0F172A]">Submit Request</button>
      {sent && <p className="text-sm font-semibold text-gnit-green">Request captured for submission.</p>}
    </form>
  );
}
