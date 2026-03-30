# Portfolio

Terminal-themed portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (nav, footer, fonts, metadata)
│   ├── page.tsx            # Homepage (hero, services, projects, about, contact)
│   ├── globals.css         # Tailwind + custom CSS variables
│   ├── services/page.tsx   # Standalone services page
│   ├── contact/page.tsx    # Standalone contact page
│   ├── book/page.tsx       # Booking / consultation (Calendly embed)
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API → Resend email
└── components/
    ├── Navbar.tsx           # Sticky nav with mobile hamburger
    ├── Footer.tsx           # Self-hosted flex footer
    ├── Hero.tsx             # Portrait + intro + skill tags + CTAs
    ├── Services.tsx         # 4 service cards with accent colors
    ├── Projects.tsx         # Project cards with image galleries
    ├── About.tsx            # Bio + toolbox grid
    ├── ContactForm.tsx      # Form with submit state handling
    ├── TerminalCommand.tsx  # "$ command" section headers
    └── SectionDivider.tsx   # Colored gradient divider lines
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Email**: Resend
- **Booking**: Calendly (embed)
- **Process Manager**: PM2
- **Web Server**: Nginx (reverse proxy)
- **SSL**: Let's Encrypt via Certbot
- **Host**: Proxmox LXC
