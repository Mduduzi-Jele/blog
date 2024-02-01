export const content = [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  colors: {
    'blue': '#2563eb',
    'purple': '#9c27b0',
    'background': '#0E2E50',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#d4d4d4',
    'white': '#fff',
    'black': '#0a0a0a',
    'red': '#FF0000',
    'edit': '#0000FF',
    'card': '#d3dce6',
    'postcolor': '#7D7D7D',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      '30': '26rem',
      'icon': '1000px',
      'iconwidth': '70px',
      
    },
    
    // borderRadius: {
    //   '4xl': '2rem',
    // }
  }
};