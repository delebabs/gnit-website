import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { gnit: { navy:'#0B1F3A', gold:'#F5A623', green:'#16A34A' } } } },
  plugins: []
};
export default config;
