"use client";
import { useSession } from "next-auth/react";

export default function UserGreeting() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (status === "authenticated" && session?.user?.name) {
    return (
      <div className="text-2xl font-semibold text-center mt-6 mb-2">
        Start learning — <span className="text-blue-600">{session.user.name}</span>!
      </div>
    );
  }

  return null;
}