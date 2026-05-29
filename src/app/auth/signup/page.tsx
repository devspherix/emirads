"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { authBenefits } from "@/content/site";

export default function SignupPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Account created. We emailed you onboarding instructions.");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-gray-100 py-16 text-center">
        <span className="mb-3 inline-block rounded-full border border-[#00BBFE]/20 bg-[#00BBFE]/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#00BBFE]">
          <Star size={10} className="mr-1 inline" /> Create Account
        </span>
        <h1 className="text-4xl font-black text-black" style={{ fontFamily: "var(--font-display)" }}>
          Collaborate with us.
        </h1>
        <p className="mt-2 text-sm text-gray-500">Get real-time updates, upload design files and manage invoices.</p>
      </div>
      <Container className="py-16">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_0.85fr]">
          {/* Left: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {["First name", "Last name"].map((label) => (
                <div key={label}>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">{label}</label>
                  <input type="text" required placeholder={label} className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm font-medium text-black outline-none transition-colors placeholder:text-gray-300 focus:border-[#00BBFE]" />
                </div>
              ))}
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">Email address</label>
              <input type="email" required placeholder="you@company.com" className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm font-medium text-black outline-none transition-colors placeholder:text-gray-300 focus:border-[#00BBFE]" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">Company / Organization <span className="font-normal normal-case text-gray-400">(optional)</span></label>
              <input type="text" placeholder="Emirads LLC" className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm font-medium text-black outline-none transition-colors placeholder:text-gray-300 focus:border-[#00BBFE]" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">Password</label>
              <input type="password" required placeholder="••••••••" className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm font-medium text-black outline-none transition-colors placeholder:text-gray-300 focus:border-[#00BBFE]" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-black py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#00BBFE]">
              Create my account
            </button>
            {message && (
              <p className="rounded-xl bg-[#FFD705]/30 px-4 py-3 text-sm font-bold text-black">✅ {message}</p>
            )}
            <p className="text-center text-sm text-gray-500">
              Already onboard?{" "}
              <Link href="/auth/login" className="font-bold text-[#D50367] underline-offset-4 hover:underline">Log in</Link>
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-gray-100 bg-[#f9f9f9] p-8"
          >
            <div className="mb-2 h-1 w-10 rounded-full bg-[#00BBFE]" />
            <h2 className="mb-1 text-xl font-black text-black" style={{ fontFamily: "var(--font-display)" }}>Why clients love the portal</h2>
            <p className="mb-8 text-sm text-gray-500">Securely hosted. Multi-user access for agencies and teams.</p>
            <ul className="space-y-5">
              {authBenefits.map((benefit, i) => (
                <li key={benefit} className="flex items-start gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-xs font-black text-white">{i + 1}</div>
                  <p className="pt-0.5 text-sm font-medium text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-[#FFD705]/40 bg-[#FFD705]/10 p-4">
              <p className="text-xs font-bold text-black">🔒 Secure &amp; encrypted</p>
              <p className="mt-1 text-xs text-gray-500">Your data is protected and never shared with third parties.</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}

