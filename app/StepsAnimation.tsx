"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { src: "notion", label: "Read PRD + last 10 docs", ms: "0.3s" },
  { src: "drive", label: "Pulled Q3 plan + spreadsheet", ms: "0.5s" },
  { src: "granola", label: "Scanned 14 meeting notes", ms: "0.7s" },
  { src: "slack", label: "Re-read #product-launch", ms: "0.4s" },
  { src: "compose", label: "Drafted launch summary", ms: "1.1s" },
];

export default function StepsAnimation() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % STEPS.length), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="steps-card">
      {STEPS.map((s, i) => {
        const state = i < idx ? "done" : i === idx ? "run" : "";
        return (
          <div key={s.src} className={`step ${state}`}>
            <span className="step-dot" />
            <span>
              <span className="step-src">{s.src}</span>
              &nbsp;&nbsp;{s.label}
            </span>
            <span className="step-ms">{i <= idx ? s.ms : "—"}</span>
          </div>
        );
      })}
    </div>
  );
}
