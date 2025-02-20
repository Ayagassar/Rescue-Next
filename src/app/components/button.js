"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/report");
  };

  return (
    <button onClick={handleClick} className="btn" type="button">
      Donate Now
    </button>
  );
}
