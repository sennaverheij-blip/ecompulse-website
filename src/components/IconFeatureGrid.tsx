import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: "retention",
    title: "Keep More Customers Coming Back",
    description: "Predict churn risks and boost customer loyalty with AI-driven insights.",
  },
  {
    icon: "campaigns",
    title: "Emails That Feel Personal, At Scale",
    description: "Tailor campaigns to individual preferences using data analytics to increase engagement.",
  },
  {
    icon: "funnel",
    title: "Plug the Revenue Leaks in Your Funnel",
    description: "Utilize predictive modeling to identify bottlenecks and streamline the purchasing process.",
  },
  {
    icon: "recommend",
    title: "Show Every Customer Their Next Purchase",
    description: "Leverage machine learning algorithms to suggest products based on user behavior.",
  },
  {
    icon: "segment",
    title: "Target the Right Customer at the Right Moment",
    description: "Divide your customer base into distinct groups to target marketing efforts effectively.",
  },
  {
    icon: "feedback",
    title: "Know What\u2019s Working \u2014 In Real Time",
    description: "Implement real-time feedback loops to improve products and services based on user input.",
  },
];

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    retention: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    campaigns: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    funnel: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    recommend: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    segment: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    feedback: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  };

  return <span className="text-[#c4622d]">{icons[type]}</span>;
}

export default function IconFeatureGrid() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.07}>
            <div>
              <FeatureIcon type={f.icon} />
              <h3 className="mt-4 font-display text-[var(--text-h3)] font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-[#6b6b6b] leading-relaxed">{f.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
