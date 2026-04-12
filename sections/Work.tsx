const PROJECTS = [
  {
    name: "Connectly",
    tag: "In Progress",
    desc: "Highly scalable chat application. Redis Pub/Sub, Kafka message broker, built for scale from day one.",
    stack: "Next.js · Express · PostgreSQL · Redis · Kafka",
    href: null,
  },
  {
    name: "EduSphere",
    tag: "Live",
    desc: "Full stack EdTech platform. Course marketplace with instructor tools.",
    stack: "React · Node.js · MongoDB · Cloudinary",
    href: "#",
  },
  {
    name: "VedaMind",
    tag: null,
    desc: "Ayurvedic health app. Dosha prediction engine and content-based recommender.",
    stack: "Flutter · Node.js · MongoDB",
    href: "#",
  },
  {
    name: "Sign Language Detection",
    tag: "88% accuracy",
    desc: "Real-time CV system translating gestures to text. Under 500ms latency.",
    stack: "MediaPipe · TensorFlow · OpenCV",
    href: "#",
  },
];

export default function Work() {
  return (
    <section
      id="section-work"
      className="h-screen flex flex-col justify-center px-16 relative z-10"
    >
      <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
        Work
      </p>
      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-tight mb-12">
        Cuts that landed.
      </h2>
      <div className="grid grid-cols-2 gap-6 max-w-2xl">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="border border-white/8 p-6 rounded-xl hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-white font-medium">{p.name}</span>
              {p.tag && (
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/15 text-white/40">
                  {p.tag}
                </span>
              )}
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-3">{p.desc}</p>
            <p className="text-xs text-white/25 tracking-wide">{p.stack}</p>
          </div>
        ))}
      </div>
    </section>
  );
}