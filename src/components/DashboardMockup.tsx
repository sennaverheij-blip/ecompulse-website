import Image from "next/image";

export default function DashboardMockup() {
  return (
    <div className="w-full max-w-md sm:max-w-lg">
      <Image
        src="/dashboard.png"
        alt="EcomPulse Dashboard — A$1,354,591.40 total revenue, A$222,032.41 attributed revenue"
        width={800}
        height={500}
        className="w-full h-auto rounded-xl sm:rounded-2xl"
        priority
      />
    </div>
  );
}
