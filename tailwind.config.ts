import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { gnit: { navy:'#0F172A', green:'#16A34A', steel:'#64748B', light:'#F8FAFC', gold:'#16A34A' } } } },
  plugins: []
};
export default config;
