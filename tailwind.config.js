/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        primary: "#054E72",  
        secondary: "#053B56",
        accent: "#021824",    
        background: "#FFFFFF", 
        muted: "#F0F3F5",  
        border: "#E1E7EB",
        textColor: "#4C5B63",
      },
    },
  },
  plugins: [],
}
