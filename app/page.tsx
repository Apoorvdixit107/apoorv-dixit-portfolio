import { BackToTop } from "@/components/BackToTop";
import { ContactActions } from "@/components/ContactActions";
import { InstallPrompt } from "@/components/InstallPrompt";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteNav } from "@/components/SiteNav";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { credentials, experience, impact, projects, skills, stats, techBadges } from "@/components/data";
import type { ReactNode } from "react";

const navItems = [
  { href: "#summary", label: "Summary" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#credentials", label: "Credentials" },
  { href: "#impact", label: "Impact" }
];

const socialLinks = [
  { href: "https://github.com/Apoorvdixit107/apoorv-dixit-portfolio", label: "GitHub", text: "GH" },
  { href: "https://www.linkedin.com/in/apoorvdixit1087/", label: "LinkedIn", text: "in" },
  { href: "https://wa.me/918130455129", label: "WhatsApp", text: "WA" },
  { href: "mailto:apoorv.dixit.developer@gmail.com", label: "Email", text: "@" }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;
const STOCK_REGISTER_URL = "https://www.stockregister.in/";

function StockRegisterLink() {
  return (
    <a
      href={STOCK_REGISTER_URL}
      target="_blank"
      rel="noreferrer"
      className="text-teal-700 underline decoration-teal-700/40 underline-offset-2 transition hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200"
    >
      StockRegister
    </a>
  );
}

function linkStockRegister(text: string) {
  const parts = text.split("StockRegister");
  if (parts.length === 1) return text;

  return parts.flatMap((part, index) => {
    const nodes: ReactNode[] = [part];
    if (index < parts.length - 1) nodes.push(<StockRegisterLink key={`stock-register-${index}`} />);
    return nodes;
  });
}

function ProjectGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.name}
          className="animate-fade-up flex flex-col rounded-lg border-l-4 border-teal-700 bg-white p-7 shadow-[0_10px_30px_rgba(23,32,42,0.06)] transition hover:-translate-y-1 hover:shadow-soft dark:border-teal-300 dark:bg-[#0d1f24]"
        >
          <h3 className="flex items-center gap-3 text-lg font-black text-slate-900 dark:text-cyan-50">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-teal-50 text-base dark:bg-[#12343a]">
              {project.icon}
            </span>
            {project.name}
          </h3>
          <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-700 dark:border-slate-700 dark:bg-[#102a2f] dark:text-cyan-50"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-teal-700 bg-teal-700 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-teal-600 dark:border-teal-300 dark:bg-teal-300 dark:text-teal-950 dark:hover:bg-teal-200 sm:w-auto"
            >
              Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-teal-700 hover:text-teal-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-300 dark:hover:text-teal-200 sm:w-auto"
            >
              GitHub
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function CardGrid({ items }: { items: typeof experience }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="animate-fade-up rounded-lg border-l-4 border-teal-700 bg-white p-7 shadow-[0_10px_30px_rgba(23,32,42,0.06)] transition hover:-translate-y-1 hover:shadow-soft dark:border-teal-300 dark:bg-[#0d1f24]"
        >
          <h3 className="flex items-center gap-3 text-lg font-black text-slate-900 dark:text-cyan-50">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-teal-50 text-base dark:bg-[#12343a]">
              {item.icon}
            </span>
            {item.title}
          </h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{linkStockRegister(item.body)}</p>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <header
        id="home"
        className="hero-bg relative grid min-h-[88vh] items-start px-4 pb-16 pt-8 text-white sm:min-h-[92vh] sm:px-6 sm:pb-20 sm:pt-10 md:px-[6vw]"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(5, 13, 18, 0.9), rgba(5, 13, 18, 0.54)), url("${asset("/hero-vector.svg")}")`
        }}
      >
        <SiteNav items={navItems} />

        <section className="pointer-events-none relative z-10 w-full max-w-4xl animate-fade-up pb-6 pt-24 sm:pb-8 sm:pt-28 md:pt-32 [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
          <p className="mb-2 text-base font-bold text-white/80 sm:text-lg">Hello there, I&apos;m</p>
          <p className="mb-4 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white/85 before:h-0.5 before:w-9 before:bg-teal-300 sm:text-xs">
            Backend Software Engineer
          </p>
          <h1 className="text-4xl font-black leading-none tracking-normal sm:text-5xl md:text-6xl lg:text-8xl">Apoorv Dixit</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/85 sm:mt-7 sm:text-xl md:text-2xl">
            Building resilient <span className="highlight-text animate-shimmer">microservices</span> for high-scale inventory
            platforms.
          </p>

          <div className="mt-6 flex max-w-4xl flex-wrap gap-x-2 gap-y-2 text-xs font-extrabold text-white/85 sm:gap-x-3 sm:text-sm md:text-base">
            {["Java 17", "Spring Boot", "OAuth2/JWT", "MySQL", "Redis", "AWS", "Docker"].map((tech, index) => (
              <span key={tech} className={index === 6 ? "" : "after:ml-3 after:text-teal-300 after:content-['•']"}>
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-3xl text-base text-white/85 sm:mt-6 sm:text-lg">
            Results-driven engineer with 3+ years of experience designing low-latency REST APIs, event-driven systems, and
            cloud-native distributed architectures for large-scale inventory management platforms.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.me/918130455129?text=Hi%20Apoorv%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20backend%20development%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-teal-300 bg-teal-300 px-5 font-black text-teal-950 transition hover:-translate-y-0.5 sm:w-auto"
            >
              Hire Me
            </a>
            <a
              href={asset("/resume.pdf")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 font-black text-white backdrop-blur transition hover:-translate-y-0.5 sm:w-auto"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/30 px-5 font-black text-white transition hover:-translate-y-0.5 sm:w-auto"
            >
              View Work
            </a>
          </div>
          <p className="mt-4 max-w-2xl text-sm font-bold text-white/70">
            Available for backend engineering, Spring Boot microservices, API optimization, and AWS deployment work.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-sm font-black text-white/75 sm:flex-row sm:items-center">
            <span>Let&apos;s connect</span>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/25 bg-white/10 text-xs text-white transition hover:-translate-y-1 hover:bg-teal-300/20"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="pointer-events-none static mt-7 grid w-full gap-3 md:absolute md:bottom-[12vw] md:right-[5vw] md:mt-0 md:w-[min(270px,34vw)]">
          {["⚡ Low-latency APIs", "🔐 Secure OAuth2/JWT systems", "☁️ AWS cloud-native delivery"].map((note, index) => (
            <div
              key={note}
              className="animate-float-note rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm font-extrabold text-white/90 shadow-lg backdrop-blur"
              style={{ animationDelay: `${index * 700}ms` }}
            >
              {note}
            </div>
          ))}
        </div>
      </header>

      <section className="pointer-events-none relative z-10 mx-auto -mt-8 grid w-[min(1120px,calc(100%-2rem))] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft dark:border-slate-700 dark:bg-[#0d1f24] sm:-mt-12 sm:w-[min(1120px,calc(100%-44px))] md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-b border-slate-200 p-5 last:border-b-0 dark:border-slate-700 sm:p-7 md:border-b-0 md:border-r md:last:border-r-0">
            <strong className="block text-2xl font-black leading-none text-teal-800 dark:text-teal-200 sm:text-3xl">{stat.value}</strong>
            <span className="mt-2 block text-sm font-bold text-slate-600 dark:text-slate-300">{stat.label}</span>
          </div>
        ))}
      </section>

      <div className="mx-auto my-12 w-[min(1120px,calc(100%-2rem))] space-y-12 sm:my-20 sm:w-[min(1120px,calc(100%-44px))] sm:space-y-20">
        <section id="summary" className="scroll-mt-28">
          <SectionHeader
            kicker="Professional Summary"
            title="Engineering backend systems that stay fast, reliable, and maintainable under real production pressure."
          />
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-lg border border-slate-200 bg-white p-8 text-slate-600 dark:border-slate-700 dark:bg-[#0d1f24] dark:text-slate-300">
              I am a Backend Software Engineer focused on architecting scalable, high-performance microservices using Java
              17, Spring Boot, Spring Security, OAuth2/JWT, MySQL, Redis, and AWS. My work centers on clean service
              boundaries, secure API design, distributed architecture, and measurable performance improvements across
              large-scale inventory management platforms.
            </article>
            <aside className="grid content-center gap-5 rounded-lg border border-slate-200 bg-[#102a2a] p-8 text-white dark:border-slate-700">
              <div className="grid h-16 w-16 animate-float-note place-items-center rounded-lg bg-amber-500 text-2xl font-black text-slate-950">
                AWS
              </div>
              <h3 className="text-lg font-black">AWS Certified Developer - Associate</h3>
              <p className="text-white/75">Experienced in cloud-native engineering practices, resilient service design, and deployment-minded backend development.</p>
            </aside>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28">
          <SectionHeader
            kicker="Experience"
            title={
              <>
                Backend Software Engineer at RipeTech Solutions, building <StockRegisterLink /> for real production scale.
              </>
            }
          />
          <CardGrid items={experience} />
        </section>

        <section id="projects" className="scroll-mt-28">
          <SectionHeader
            kicker="Projects"
            title="Full-stack backend systems built end to end — from microservices and APIs to live deployments."
          />
          <ProjectGrid />
        </section>

        <section id="expertise" className="scroll-mt-28">
          <SectionHeader kicker="Core Expertise" title="A practical backend toolkit for secure, distributed, high-throughput products." />
          <div className="grid gap-5 lg:grid-cols-3">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="flex min-h-56 flex-col justify-between rounded-lg border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-teal-700/40 hover:shadow-soft dark:border-slate-700 dark:bg-[#0d1f24]"
              >
                <div>
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-teal-700 font-black text-white">{skill.marker}</div>
                  <h3 className="mt-4 flex items-center gap-3 text-lg font-black text-slate-900 dark:text-cyan-50">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-50 dark:bg-[#12343a]">{skill.icon}</span>
                    {skill.title}
                  </h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">{skill.body}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-700 dark:border-slate-700 dark:bg-[#102a2f] dark:text-cyan-50">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {techBadges.map((badge, index) => (
              <span
                key={badge}
                className="grid min-h-16 animate-float-note place-items-center rounded-lg border border-slate-200 bg-white p-3 text-center text-sm font-black shadow-[0_10px_25px_rgba(23,32,42,0.05)] transition hover:-translate-y-1 hover:scale-[1.03] hover:border-teal-700 hover:bg-teal-50 dark:border-slate-700 dark:bg-[#0d1f24] dark:hover:bg-[#12343a]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {badge}
              </span>
            ))}
          </div>
        </section>

        <section id="credentials" className="scroll-mt-28">
          <SectionHeader kicker="Credentials" title="Certified, cloud-focused, and trained in computer science fundamentals." />
          <CardGrid items={credentials} />
        </section>

        <section id="impact" className="scroll-mt-28">
          <SectionHeader kicker="Measurable Impact" title="Focused on outcomes that users, teams, and systems can feel." />
          <CardGrid items={impact} />
        </section>

        <section className="grid gap-7 rounded-lg bg-slate-900 p-6 text-white sm:p-8 md:grid-cols-[minmax(0,1.5fr)_auto] md:p-12">
          <div>
            <h2 className="max-w-3xl text-2xl font-black leading-tight sm:text-3xl md:text-4xl">Have a backend problem that needs speed, scale, or cleaner architecture?</h2>
            <p className="mt-4 max-w-3xl text-white/75">
              I can help with Java/Spring Boot APIs, microservices, Redis caching, secure authentication, AWS deployment,
              CI/CD, and production reliability.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                ["Build", "REST APIs, microservices, auth flows, and backend modules."],
                ["Optimize", "Latency, database load, caching, and service reliability."],
                ["Deploy", "AWS infrastructure, Docker workflows, and CI/CD pipelines."]
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg border border-white/15 bg-white/5 p-5">
                  <strong className="block">{title}</strong>
                  <span className="mt-2 block text-sm text-white/70">{body}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-3 text-sm font-black text-white/70">
              <span>Profile views</span>
              <img
                src="https://hits.sh/apoorvdixit107.github.io/apoorv-dixit-portfolio.svg?label=Visitors&color=0f766e&labelColor=17202a"
                alt="Visitor count for Apoorv Dixit's portfolio"
                className="h-6 rounded-md"
              />
            </div>
          </div>
          <ContactActions resumeHref={asset("/resume.pdf")} />
        </section>
      </div>

      <InstallPrompt />
      <WhatsAppChat />
      <BackToTop />
    </main>
  );
}
