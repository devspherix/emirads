"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { authBenefits } from "@/content/site";

const fieldAccents = ["#FF3AF2", "#00F5D4", "#FFE600", "#FF6B35", "#7B2FFF"];

export default function SignupPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Account created. We emailed you onboarding instructions.");
  };

  return (
    <main className="relative overflow-hidden bg-[#0D0D1A]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(0,245,212,0.2),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(255,58,242,0.2),_transparent_70%)] blur-3xl" />
      </div>
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Left: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border-4 border-[#00F5D4] p-7 sm:p-9 space-y-6"
            style={{
              background: "linear-gradient(135deg, #2D1B4E80, #0D0D1A)",
              boxShadow: "8px 8px 0 #7B2FFF, 16px 16px 0 #00F5D4",
            }}
          >
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,245,212,0.04) 10px, rgba(0,245,212,0.04) 20px)" }} />
            <div className="relative">
              <Tag tone="cyan" className="mb-4 text-[0.65rem] tracking-[0.4em]">
                <Star className="h-3 w-3 mr-1" /> Create account
              </Tag>
              <SectionHeading
                eyebrow="Join Emirads"
                title="Collaborate with us."
                description="Get real-time production updates, upload design files, request maintenance and manage invoices."
              />
            </div>
            <div className="relative grid gap-4 sm:grid-cols-2">
              {["First name", "Last name"].map((label, i) => (
                <label key={label} className="flex flex-col gap-2 text-xs font-black uppercase tracking-widest text-white/80">
                  {label}
                  <input
                    type="text"
                    required
                    className="rounded-2xl border-4 bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:outline-none transition-colors"
                    style={{ borderColor: fieldAccents[i], boxShadow: `3px 3px 0 ${fieldAccents[i + 1]}` }}
                  />
                </label>
              ))}
            </div>
            <label className="relative flex flex-col gap-2 text-xs font-black uppercase tracking-widest text-white/80">
              Email
              <input
                type="email"
                required
                className="rounded-2xl border-4 border-[#FFE600] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FF3AF2] focus:outline-none transition-colors"
                style={{ boxShadow: "3px 3px 0 #FF6B35" }}
              />
            </label>
            <label className="relative flex flex-col gap-2 text-xs font-black uppercase tracking-widest text-white/80">
              Company / Organization
              <input
                type="text"
                className="rounded-2xl border-4 border-[#FF6B35] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FF3AF2] focus:outline-none transition-colors"
                style={{ boxShadow: "3px 3px 0 #FF3AF2" }}
              />
            </label>
            <label className="relative flex flex-col gap-2 text-xs font-black uppercase tracking-widest text-white/80">
              Password
              <input
                type="password"
                required
                className="rounded-2xl border-4 border-[#7B2FFF] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FF3AF2] focus:outline-none transition-colors"
                style={{ boxShadow: "3px 3px 0 #00F5D4" }}
              />
            </label>
            <Button type="submit" fullWidth className="relative">
              <Zap className="h-4 w-4" />
              Create my account
            </Button>
            {message ? (
              <p className="relative text-sm font-black text-[#FFE600]" style={{ textShadow: "1px 1px 0 #FF6B35" }}>
                ✨ {message}
              </p>
            ) : null}
            <p className="relative text-sm font-medium text-white/70">
              Already onboard?{" "}
              <Link href="/auth/login" className="font-black text-[#FF3AF2] underline-offset-4 hover:underline">
                Log in
              </Link>
            </p>
          </motion.form>

          {/* Right: benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative overflow-hidden rounded-3xl border-4 border-[#FF3AF2] p-8 sm:p-10 space-y-8"
            style={{
              background: "linear-gradient(135deg, #2D1B4E, #1A0535)",
              boxShadow: "12px 12px 0 #FFE600, 24px 24px 0 #FF3AF2",
            }}
          >
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "conic-gradient(from 90deg at 1px 1px, transparent 90deg, rgba(255,58,242,0.06) 0)", backgroundSize: "40px 40px" }} />
            <div className="relative">
              <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)", textShadow: "2px 2px 0px #FF3AF2, 4px 4px 0px #7B2FFF" }}>
                Why clients love the portal
              </h2>
            </div>
            <ul className="relative space-y-5">
              {authBenefits.map((benefit, i) => (
                <li key={benefit} className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 text-sm font-black"
                    style={{ borderColor: fieldAccents[i % 5], color: fieldAccents[i % 5], backgroundColor: `${fieldAccents[i % 5]}15`, boxShadow: `2px 2px 0 ${fieldAccents[(i + 1) % 5]}` }}
                  >
                    {i + 1}
                  </div>
                  <p className="flex-1 text-base font-medium text-white/85 pt-1.5">{benefit}</p>
                </li>
              ))}
            </ul>
            <div
              className="relative rounded-2xl border-4 border-[#FFE600] bg-[#FFE600]/10 p-5"
              style={{ boxShadow: "4px 4px 0 #FF6B35" }}
            >
              <p className="font-black text-[#FFE600]" style={{ fontFamily: "var(--font-display)" }}>🔒 Secure & encrypted</p>
              <p className="mt-2 text-sm text-white/75">
                Securely hosted on encrypted infrastructure. Multi-user access available for agencies and enterprise teams.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}

