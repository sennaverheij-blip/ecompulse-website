const initials = ["SK", "MT", "ER"];
const colors = ["#c4622d", "#7a4420", "#555"];

export default function HeroAvatars() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {initials.map((init, i) => (
          <div
            key={init}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold text-white border-2 border-[#050505]"
            style={{ background: colors[i] }}
          >
            {init}
          </div>
        ))}
      </div>
      <div>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#c4622d">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p className="text-[11px] text-[#555] mt-0.5">
          Trusted by <span className="text-[#999]">500+</span> stores
        </p>
      </div>
    </div>
  );
}
