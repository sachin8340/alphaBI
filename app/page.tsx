"use client";
import DisplayBoard from "@/components/DisplayBoard";
import Navbar from "@/components/Navbar";
import { useAuthContext } from "@/context/AuthContextProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user } = useAuthContext() || {};
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user]);

  return (
    <main>
      <Navbar />
      <DisplayBoard />
    </main>
  );
}
