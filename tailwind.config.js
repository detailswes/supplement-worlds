/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        border: "#E2E8F0",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        red: "#FE1B1B",
        "dark-text": "#1C1C1C",
        "under-blue": "#013DC3",
        "light-gray": "rgba(255, 255, 255, 0.20)",
        "light-text": "#718096",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(15deg, #090F26 26.3%, #002E93 86.4%)",
        "btn-gradient": "linear-gradient(15deg, #4A25E1 26.3%, #7B5AFF 86.4%)",
      },
      boxShadow: {
        "btn-shadow":
          "7px 63px 18px 0px rgba(0, 0, 0, 0.00), 5px 40px 16px 0px rgba(0, 0, 0, 0.01), 3px 23px 14px 0px rgba(0, 0, 0, 0.05), 1px 10px 10px 0px rgba(0, 0, 0, 0.09), 0px 3px 6px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
