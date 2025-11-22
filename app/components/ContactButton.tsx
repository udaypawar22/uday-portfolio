"use client";

import { useState } from "react";
import ContactPane from "./ContactPane";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ContactButton({ className, children }: Props) {
  const [active, setActive] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActive(true);
        }}
        className={className}
      >
        {children}
      </button>
      {/* contact me pane */}
      {active && <ContactPane setActive={setActive} />}
    </>
  );
}
