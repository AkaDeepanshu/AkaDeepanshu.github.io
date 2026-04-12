export default function Hero() {
  return (
    <section
      id="section-hero"
      className="h-screen flex flex-col justify-end pb-24 px-16 relative z-10"
    >
      <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">
        Software Development Engineer
      </p>
      <h1 className="text-[clamp(3rem,8vw,7rem)] font-light leading-none tracking-tight">
        Deepanshu<br />Sharma
      </h1>
      <p className="mt-6 text-xl text-white/50 max-w-sm">
        I build things that move.
      </p>
    </section>
  );
}