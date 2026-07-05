"use client";

import { LockKeyhole, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin12345");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setIsLoading(false);

    if (!response.ok) {
      setError("Email or password is incorrect.");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#0d2623] px-5 py-10 text-white">
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 md:grid-cols-[1fr_440px]">
        <div className="relative">
          <div className="absolute -left-8 -top-10 h-40 w-40 rounded-full bg-[#f2c96f]/12 blur-3xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Jain Dental Studio"
            className="mb-8 h-14 w-14 rounded-lg shadow-[0_18px_45px_rgba(242,201,111,0.22)]"
          />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#f2c96f]">
            Clinic CMS
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] md:text-7xl">
            Update your website without opening the code.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Sign in to manage homepage copy, service cards, gallery images,
            testimonials, and contact details.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/12 bg-white/[0.06] p-4">
              <Sparkles className="mb-3 text-[#f2c96f]" size={20} />
              <p className="font-semibold">Premium homepage control</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/[0.06] p-4">
              <ShieldCheck className="mb-3 text-[#f2c96f]" size={20} />
              <p className="font-semibold">Protected admin session</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-white/12 bg-white p-7 text-[#17211f] shadow-[0_28px_90px_rgba(0,0,0,0.22)]"
        >
          <h2 className="text-3xl font-semibold">Admin login</h2>
          <p className="mt-2 text-sm leading-6 text-[#61706c]">
            Use environment variables to change these demo credentials.
          </p>

          <label className="mt-7 block text-sm font-bold">Email</label>
          <div className="mt-2 flex items-center gap-3 rounded-md border border-black/10 bg-[#fbfaf7] px-3 focus-within:border-[#1f6f68]">
            <Mail size={18} className="text-[#1f6f68]" />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-12 flex-1 bg-transparent outline-none"
              type="email"
              required
            />
          </div>

          <label className="mt-4 block text-sm font-bold">Password</label>
          <div className="mt-2 flex items-center gap-3 rounded-md border border-black/10 bg-[#fbfaf7] px-3 focus-within:border-[#1f6f68]">
            <LockKeyhole size={18} className="text-[#1f6f68]" />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-12 flex-1 bg-transparent outline-none"
              type="password"
              required
            />
          </div>

          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

          <button
            className="mt-7 h-12 w-full rounded-md bg-[#0f3f3b] font-bold text-white shadow-[0_14px_32px_rgba(15,63,59,0.24)] hover:bg-[#123631] disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  );
}
