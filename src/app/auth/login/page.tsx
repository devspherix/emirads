"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { authBenefits } from "@/content/site";

export default function LoginPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("You are signed in. Redirecting to the dashboard...");
  };

  return (
    <main className="relative overflow-hidden">
      <Container className="relative">
        <GlassPanel className="p-6 sm:p-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <SectionHeading
                eyebrow="Client portal"
                title="Log in to track fabrication, approvals and installations."
                description="Monitor milestones, upload art files, approve prototypes and raise maintenance tickets inside your private workspace."
              />
              <ul className="space-y-3 text-white/80">
                {authBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm">
                    <span className="text-[var(--brand-cyan)]">▸</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 rounded-3xl border border-white/10 bg-black/30 p-6"
            >
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Email
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Password
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                />
              </label>
              <div className="flex items-center justify-between text-xs text-white/60">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-black" />
                  Keep me signed in
                </label>
                <Link
                  href="/contact"
                  className="text-white underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" fullWidth>
                Log in
              </Button>
              {message ? (
                <p className="text-sm text-[var(--brand-yellow)]">{message}</p>
              ) : null}
              <p className="text-sm text-white/70">
                New to Emirads?{" "}
                <Link
                  href="/auth/signup"
                  className="text-white underline-offset-4 hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </motion.form>
          </div>
        </GlassPanel>
      </Container>
    </main>
  );
}

