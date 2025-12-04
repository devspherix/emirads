"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { authBenefits } from "@/content/site";

export default function SignupPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Account created. We emailed you onboarding instructions.");
  };

  return (
    <main className="relative overflow-hidden">
      <Container className="relative">
        <GlassPanel className="p-6 sm:p-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 rounded-3xl border border-white/10 bg-black/30 p-6"
            >
              <SectionHeading
                eyebrow="Create account"
                title="Collaborate with Emirads in one command center."
                description="Get real-time production updates, upload design files, request maintenance and manage invoices."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-white/80">
                  First name
                  <input
                    type="text"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/80">
                  Last name
                  <input
                    type="text"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Email
                <input
                  type="email"
                  required
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Company / Organization
                <input
                  type="text"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Password
                <input
                  type="password"
                  required
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                />
              </label>
              <Button type="submit" fullWidth>
                Create my account
              </Button>
              {message ? (
                <p className="text-sm text-[var(--brand-yellow)]">{message}</p>
              ) : null}
              <p className="text-sm text-white/70">
                Already onboard?{" "}
                <Link
                  href="/auth/login"
                  className="text-white underline-offset-4 hover:underline"
                >
                  Log in
                </Link>
              </p>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6"
            >
              <h2 className="text-2xl font-semibold text-white">
                Why clients love the portal
              </h2>
              <ul className="space-y-3 text-white/80">
                {authBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm">
                    <span className="text-[var(--brand-magenta)]">▹</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/70">
                Securely hosted on encrypted infrastructure. Multi-user access
                available for agencies and enterprise teams.
              </div>
            </motion.div>
          </div>
        </GlassPanel>
      </Container>
    </main>
  );
}

