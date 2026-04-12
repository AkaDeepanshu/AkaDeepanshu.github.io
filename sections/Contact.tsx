export default function Contact() {
  return (
    <section
      id="section-contact"
      className="h-screen flex flex-col justify-center items-center text-center relative z-10"
    >
      <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
        Contact
      </p>
      <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight">
        Let&apos;s build something<br />that scales.
      </h2>
      <p className="mt-6 text-lg text-white/50 max-w-md">
        Open to full-time roles, interesting problems,
        and teams that care about craft.
      </p>
      <div className="mt-12 flex gap-8 text-sm text-white/40">
        <a href="mailto:deepanshu0859@gmail.com" className="hover:text-white transition-colors">
          deepanshu0859@gmail.com
        </a>
        <a href="https://github.com/AkaDeepanshu" className="hover:text-white transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/akadeepanshu" className="hover:text-white transition-colors">
          LinkedIn
        </a>
      </div>
    </section>
  );
}