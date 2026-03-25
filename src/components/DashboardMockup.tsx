export default function DashboardMockup() {
  return (
    <div className="dashboard-card p-5 sm:p-6 w-full max-w-md">
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[10px] text-[#555]">EcomPulse Dashboard</span>
      </div>

      {/* Revenue display */}
      <div className="mb-1">
        <p className="text-[10px] uppercase tracking-wider text-[#666] mb-1">Total Revenue</p>
        <p className="text-2xl sm:text-3xl font-bold text-white">A$1,334,591.40</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div>
          <p className="text-[10px] text-[#666]">Attributed Revenue</p>
          <p className="text-sm font-semibold text-white">A$222,832.41</p>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-green-500">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M7 17l5-5 5 5M7 7l5 5 5-5" />
          </svg>
          23.77%
        </div>
      </div>

      {/* Mini metrics row */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: "Per recipient", value: "$4.52" },
          { label: "Campaigns", value: "24" },
          { label: "Flows", value: "12" },
          { label: "Email", value: "89.2%" },
        ].map((m) => (
          <div key={m.label}>
            <p className="text-[9px] text-[#555]">{m.label}</p>
            <p className="text-xs font-semibold text-white">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="relative h-24 overflow-hidden">
        <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c4622d" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c4622d" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 80 C50 70, 80 40, 120 50 C160 60, 180 30, 220 25 C260 20, 300 45, 340 15 C360 8, 380 12, 400 5"
            fill="none"
            stroke="#c4622d"
            strokeWidth="2"
          />
          <path
            d="M0 80 C50 70, 80 40, 120 50 C160 60, 180 30, 220 25 C260 20, 300 45, 340 15 C360 8, 380 12, 400 5 L400 100 L0 100 Z"
            fill="url(#chartGradient)"
          />
        </svg>
      </div>
    </div>
  );
}
