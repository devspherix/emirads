"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Lock, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { authBenefits } from "@/content/site";

const benefitAccents = ["#FF3AF2", "#00F5D4", "#FFE600"];

export default function LoginPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("You are signed in. Redirecting to the dashboard...");
  };

  return (
    <main className="relative overflow-hidden bg-[#0D0D1A]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(123,47,255,0.3),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(255,58,242,0.25),_transparent_70%)] blur-3xl" />
      </div>
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border-4 border-[#7B2FFF] p-8 sm:p-10"
            style={{
              background: "linear-gradient(135deg, #2D1B4E, #1A0535)",
              boxShadow: "12px 12px 0 #00F5D4, 24px 24px 0 #7B2FFF",
            }}
          >
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(123,47,255,0.4) 1px, transparent 1px)", backgroundSize: "24px 24px", opacity: 0.25 }} />
            <div className="relative space-y-8">
              <SectionHeading
                eyebrow="Client portal"
                title="Log in to track fabrication and installations."
                description="Monitor milestones, upload art files, approve prototypes and raise maintenance tickets."
              />
              <ul className="space-y-4">
                {authBenefits.map((benefit, i) => (
                  <li key={benefit} className="flex gap-4">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black"
                      style={{ borderColor: benefitAccents[i % 3], color: benefitAccents[i % 3], backgroundColor: `${benefitAccents[i % 3]}15` }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-base font-medium text-white/85 pt-0.5">{benefit}</p>
                  </li>
                ))}
              </ul>
              <div
                className="rounded-2xl border-4 border-[#00F5D4] bg-[#00F5D4]/10 p-5"
                style={{ boxShadow: "4px 4px 0 #7B2FFF" }}
              >
                <p className="text-sm font-black text-[#00F5D4]">⚡ Secure & encrypted</p>
                <p className="mt-1 text-sm text-white/75">Multi-user access available for agencies and enterprise teams.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative overflow-hidden rounded-3xl border-4 border-[#FF3AF2] p-7 sm:p-9 space-y-6"
            style={{
              background: "linear-gradient(135deg, #2D1B4E80, #0D0D1A)",
              boxShadow: "8px 8px 0 #FFE600, 16px 16px 0 #FF3AF2",
            }}
          >
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,58,242,0.04) 10px, rgba(255,58,242,0.04) 20px)" }} />
            <div className="relative">
              <Tag tone="magenta" className="mb-4 text-[0.65rem] tracking-[0.4em]">
                <Lock className="h-3 w-3 mr-1" /> Sign in
              </Tag>
              <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)", textShadow: "2px 2px 0px #FF3AF2, 4px 4px 0px #7B2FFF" }}>
                Welcome back.
              </h2>
            </div>
            <label className="relative flex flex-col gap-2 text-xs font-black uppercase tracking-widest text-white/80">
              <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#FF3AF2]" /> Email</span>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="rounded-2xl border-4 border-[#FF3AF2] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FFE600] focus:outline-none transition-colors"
                style={{ boxShadow: "3px 3px 0 #7B2FFF" }}
              />
            </label>
            <label className="relative flex flex-col gap-2 text-xs font-black uppercase tracking-widest text-white/80">
              <span className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-[#00F5D4]" /> Password</span>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="rounded-2xl border-4 border-[#00F5D4] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FFE600] focus:outline-none transition-colors"
                style={{ boxShadow: "3px 3px 0 #7B2FFF" }}
              />
            </label>
            <div className="relative flex items-center justify-between text-xs text-white/60">
              <label className="inline-flex items-center gap-2 font-medium">
                <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-black accent-[#FF3AF2]" />
                Keep me signed in
              </label>
              <Link href="/contact" className="font-black text-[#FF3AF2] hover:underline underline-offset-4">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" fullWidth className="relative">
              <Zap className="h-4 w-4" />
              Log in
            </Button>
            {message ? (
              <p className="relative text-sm font-black text-[#FFE600]" style={{ textShadow: "1px 1px 0 #FF6B35" }}>
                ✨ {message}
              </p>
            ) : null}
            <p className="relative text-sm font-medium text-white/70">
              New to Emirads?{" "}
              <Link href="/auth/signup" className="font-black text-[#00F5D4] underline-offset-4 hover:underline">
                Create an account
              </Link>
            </p>
          </motion.form>
        </div>
      </Container>
    </main>
  );
}

