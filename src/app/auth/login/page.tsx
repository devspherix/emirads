"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { authBenefits } from "@/content/site";

export default function LoginPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("You are signed in. Redirecting to the dashboard...");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-gray-100 py-16 text-center">
        <span className="mb-3 inline-block rounded-full border border-[#D50367]/20 bg-[#D50367]/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#D50367]">
          Client Portal
        </span>
        <h1 className="text-4xl font-black text-black" style={{ fontFamily: "var(--font-display)" }}>
          Welcome back.
        </h1>
        <p className="mt-2 text-sm text-gray-500">Sign in to track your projects, upload files and manage invoices.</p>
      </div>
      <Container className="py-16">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_0.85fr]">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-100 bg-[#f9f9f9] p-8"
          >
            <div className="mb-2 h-1 w-10 rounded-full bg-[#D50367]" />
            <h2 className="mb-1 text-xl font-black text-black" style={{ fontFamily: "var(--font-display)" }}>What you get</h2>
            <p className="mb-8 text-sm text-gray-500">Multi-user access available for agencies and enterprise teams.</p>
            <ul className="space-y-5">
              {authBenefits.map((benefit, i) => (
                <li key={benefit} className="flex items-start gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-xs font-black text-white">
                    {i + 1}
                  </div>
                  <p className="pt-0.5 text-sm font-medium text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-[#00BBFE]/20 bg-[#00BBFE]/5 p-4">
              <p className="text-xs font-bold text-[#00BBFE]">🔒 Secure &amp; encrypted</p>
              <p className="mt-1 text-xs text-gray-500">End-to-end encrypted. Your data is never shared.</p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          >
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                <Mail size={12} className="text-[#D50367]" /> Email address
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm font-medium text-black outline-none transition-colors placeholder:text-gray-300 focus:border-[#00BBFE]"
              />
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                <Lock size={12} className="text-[#D50367]" /> Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm font-medium text-black outline-none transition-colors placeholder:text-gray-300 focus:border-[#00BBFE]"
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="inline-flex cursor-pointer items-center gap-2 font-medium text-gray-600">
                <input type="checkbox" className="rounded" />
                Keep me signed in
              </label>
              <Link href="/contact" className="font-bold text-[#D50367] underline-offset-4 hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-black py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#D50367]"
            >
              Sign in
            </button>
            {message && (
              <p className="rounded-xl bg-[#FFD705]/30 px-4 py-3 text-sm font-bold text-black">
                ✅ {message}
              </p>
            )}
            <p className="text-center text-sm text-gray-500">
              New to Emirads?{" "}
              <Link href="/auth/signup" className="font-bold text-[#00BBFE] underline-offset-4 hover:underline">
                Create an account
              </Link>
            </p>
          </motion.form>
        </div>
      </Container>
    </main>
  );
}

