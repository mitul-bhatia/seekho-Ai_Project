"use client";
import { getProviders, signIn, ClientSafeProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    getProviders().then((prov) => setProviders(prov));
  }, []); // ye different providers ke liye use hota hai aur ye useEffect hook hai jiske through hum providers ko get karte hai

  if (!providers) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Sign in to SEEKHO</h1>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name} className="mb-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => signIn(provider.id, { callbackUrl: "/courses" })} // Redirects to course page
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
