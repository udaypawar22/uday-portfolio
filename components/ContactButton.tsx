"use client";

import { useState } from "react";
import ContactPane from "./ContactPane";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ContactButton({ className, children }: Props) {
  const [active, setActive] = useState(false);
  const paneClassName = active ? "bottom-0" : "-bottom-12/12";
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
      <ContactPane className={paneClassName} setActive={setActive} />
    </>
  );
}
