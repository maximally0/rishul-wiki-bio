import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Wikipedia-specific colors
        wiki: {
          link: "hsl(var(--wiki-link))",
          "link-hover": "hsl(var(--wiki-link-hover))",
          "link-visited": "hsl(var(--wiki-link-visited))",
          "link-new": "hsl(var(--wiki-link-new))",
          border: "hsl(var(--wiki-border))",
          "border-light": "hsl(var(--wiki-border-light))",
          "infobox-bg": "hsl(var(--wiki-infobox-bg))",
          "toc-bg": "hsl(var(--wiki-toc-bg))",
          "edit-bg": "hsl(var(--wiki-edit-bg))",
          "nav-bg": "hsl(var(--wiki-nav-bg))",
          "nav-border": "hsl(var(--wiki-nav-border))",
          "sidebar-bg": "hsl(var(--wiki-sidebar-bg))",
          text: "hsl(var(--wiki-text))",
          "text-muted": "hsl(var(--wiki-text-muted))",
          "text-light": "hsl(var(--wiki-text-light))",
          "text-small": "hsl(var(--wiki-text-small))",
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        wiki: ['Georgia', 'Times New Roman', 'serif'],
      },
      spacing: {
        'wiki-content-padding': 'var(--wiki-content-padding)',
        'wiki-sidebar-width': 'var(--wiki-sidebar-width)',
      },
      width: {
        'wiki-sidebar-width': 'var(--wiki-sidebar-width)',
      },
      maxWidth: {
        'wiki-content': 'var(--wiki-content-width)',
        'wiki-infobox': 'var(--wiki-infobox-width)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
