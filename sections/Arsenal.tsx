const SKILLS = [
  { label: "Web", items: ["Next.js", "React", "Node.js", "NestJS", "Express"] },
  { label: "Mobile", items: ["Flutter", "Riverpod", "Firebase"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { label: "Infra", items: ["Docker", "Nginx", "Kafka", "Socket.IO"] },
];

export default function Arsenal() {
  return (
    <section
      id="section-arsenal"
      className="h-screen flex flex-col justify-center px-16 relative z-10"
    >
      <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
        Arsenal
      </p>
      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-tight">
        The stack behind<br />the strike.
      </h2>
      <div className="mt-12 grid grid-cols-2 gap-8 max-w-lg">
        {SKILLS.map((group) => (
          <div key={group.label}>
            <p className="text-xs tracking-widest uppercase text-white/30 mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1 border border-white/10 text-white/70 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}