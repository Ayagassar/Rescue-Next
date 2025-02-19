"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function DonateButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <button onClick={handleClick} className="btn2">
      Donate
    </button>
  );
}
