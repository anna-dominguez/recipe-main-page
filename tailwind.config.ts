import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkCharcoal: '#312E2C',
        darkRaspberry: '#7A284E',
        brandyRed: '#854632',
        wengeBrown: '#5F564D',
        eggShell: '#F3E5D7',
        whiteCoffee: '#E3DDD7',
        snow: '#FFF7FB',
      },
    },
  },
  plugins: [],
}
export default config
