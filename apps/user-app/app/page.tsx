"use client"

import Image from "next/image";
import { useBalance } from "@repo/store/useBalance";

export default function Home() {
  const val = useBalance();
  return (
    <div className="text-3xl">{val}</div>
  );
}
