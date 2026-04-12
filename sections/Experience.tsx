const JOBS = [
  {
    period: "Nov 2025 → Present",
    company: "Opskube",
    role: "SDE-I",
    summary:
      "Production-grade web & mobile across Next.js, NestJS, Flutter. Built live classes, real-time chat, and end-to-end flight booking flows with Centrifugo.",
  },
  {
    period: "Sept – Oct 2025",
    company: "Cognimosity",
    role: "SWE Intern",
    summary:
      "AI-powered learning platform. Multi-source ingestion: YouTube, PDFs, URLs → flashcards, quizzes, chat. Stack: Next.js, Django, FastAPI.",
  },
  {
    period: "July – Aug 2024",
    company: "WeBeeSketch",
    role: "Flutter Intern",
    summary:
      "Insight Talk — expert consultation app. Auth flows, booking screens, Firebase + Firestore.",
  },
];

export default function Experience() {
  return (
    <section
      id="section-experience"
      className="h-screen flex flex-col justify-center pr-16 pl-[45%] relative z-10"
    >
      <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
        Experience
      </p>
      <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight mb-12">
        Every role,<br />a lesson.
      </h2>
      <div className="flex flex-col gap-10">
        {JOBS.map((job) => (
          <div key={job.company} className="border-l border-white/10 pl-6">
            <p className="text-xs tracking-widest uppercase text-white/30 mb-1">
              {job.period}
            </p>
            <p className="text-lg font-medium text-white">
              {job.company}
              <span className="text-white/40 font-light ml-2 text-base">
                · {job.role}
              </span>
            </p>
            <p className="mt-2 text-sm text-white/55 leading-relaxed max-w-sm">
              {job.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}