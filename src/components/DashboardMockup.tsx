import Image from "next/image";

export default function DashboardMockup() {
  return (
    <div className="w-full max-w-md sm:max-w-lg">
      <Image
        src="/dashboard-new.jpg"
        alt="EcomPulse Dashboard — ZAR 122,185.15 total revenue"
        width={800}
        height={500}
        className="w-full h-auto rounded-xl sm:rounded-2xl"
        priority
      />
    </div>
  );
}
