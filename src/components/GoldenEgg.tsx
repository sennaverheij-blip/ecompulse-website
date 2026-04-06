"use client";

import { useState, useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/31683355115?text=I%20have%20found%20the%20golden%20egg%20and%20I%20am%20here%20to%20redeem%20my%2030%25%20off%20on%20ecompulse%20flows!%20Let's%20get%20started.";

export default function GoldenEgg({
  id,
  className = "",
  size = "text-[10px]",
}: {
  id: string;
  className?: string;
  size?: string;
}) {
  const [visible, setVisible] = useState(false);
  const storageKey = `golden_egg_${id}`;

  useEffect(() => {
    if (!localStorage.getItem(storageKey)) {
      setVisible(true);
    }
  }, [storageKey]);

  if (!visible) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        localStorage.setItem(storageKey, "found");
        setVisible(false);
      }}
      className={`inline-block opacity-40 hover:opacity-100 transition-all duration-300 cursor-default hover:cursor-pointer hover:scale-125 ${size} ${className}`}
    >
      🥚
    </a>
  );
}
