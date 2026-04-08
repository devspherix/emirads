"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Calculator,
  CheckCircle,
  Send,
  Phone,
  Mail,
  User,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import {
  servicePricingList,
  type ServicePricing,
  type MaterialOption,
  type PriceResult,
} from "@/lib/pricing";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// ─── Step Indicator ──────────────────────────────────────────────────────────

function StepBar({ step }: { step: number }) {
  const steps = [
    { n: 1, label: "Service" },
    { n: 2, label: "Specs" },
    { n: 3, label: "Price" },
    { n: 4, label: "Submit" },
  ];
  return (
    <div className="flex items-center justify-center gap-0 mb-10 select-none">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-3 transition-all duration-300
                ${step >= s.n
                  ? "bg-[#FFE600] border-[#FFE600] text-black shadow-[3px_3px_0px_#FF3AF2]"
                  : "border-white/30 text-white/40 bg-transparent"}
              `}
            >
              {step > s.n ? <CheckCircle size={18} /> : s.n}
            </div>
            <span
              className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                step >= s.n ? "text-[#FFE600]" : "text-white/30"
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-12 md:w-20 h-1 mb-5 mx-1 rounded-full transition-all duration-500 ${
                step > s.n ? "bg-[#FFE600]" : "bg-white/10"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Step 1: Service Selection ────────────────────────────────────────────────

function Step1ServiceSelect({
  onSelect,
}: {
  onSelect: (service: ServicePricing) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-white mb-2 text-center">
        What can we build for you?
      </h2>
      <p className="text-white/60 text-center mb-8 font-medium">
        Select a service to get an instant price
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicePricingList.map((service, i) => (
          <motion.button
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(service)}
            className="group relative text-left rounded-2xl p-5 border-2 border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 overflow-hidden"
            style={{
              "--svc-accent": service.accentColor,
              "--svc-shadow": service.shadowColor,
            } as React.CSSProperties}
          >
            {/* Hover border */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-2"
              style={{ borderColor: service.accentColor }}
            />
            {/* Glow blob */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-200"
              style={{ background: service.accentColor }}
            />
            <div className="relative z-10">
              <div className="text-4xl mb-3">{service.emoji}</div>
              <h3
                className="text-lg font-black mb-1 transition-colors duration-200"
                style={{ color: service.accentColor }}
              >
                {service.name}
              </h3>
              <p className="text-white/50 text-sm font-medium leading-snug">
                {service.tagline}
              </p>
              <div
                className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: service.accentColor }}
              >
                Select <ArrowRight size={12} />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Step 2: Specs Input ──────────────────────────────────────────────────────

function Step2Specs({
  service,
  specValues,
  selectedMaterial,
  onSpecChange,
  onMaterialChange,
  onBack,
  onNext,
}: {
  service: ServicePricing;
  specValues: Record<string, string>;
  selectedMaterial: MaterialOption | null;
  onSpecChange: (key: string, val: string) => void;
  onMaterialChange: (m: MaterialOption) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const isValid =
    selectedMaterial !== null &&
    service.specs
      .filter((s) => s.required)
      .every((s) => {
        const v = specValues[s.key];
        if (!v || v === "") return false;
        if (s.type === "number") return Number(v) > 0;
        return true;
      });

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/50 hover:text-white mb-6 text-sm font-bold uppercase tracking-widest transition-colors"
      >
        <ArrowLeft size={14} /> Back
      </button>

      {/* Service badge */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{service.emoji}</span>
        <div>
          <h2
            className="text-xl font-black"
            style={{ color: service.accentColor }}
          >
            {service.name}
          </h2>
          <p className="text-white/50 text-sm">{service.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Material selector */}
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-white/70 mb-2">
            Material / Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.materials.map((m) => (
              <button
                key={m.key}
                onClick={() => onMaterialChange(m)}
                className={`text-left p-3 rounded-xl border-2 transition-all duration-150 ${
                  selectedMaterial?.key === m.key
                    ? "border-[#FFE600] bg-[#FFE600]/10 shadow-[3px_3px_0px_#FF3AF2]"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                <div className="font-bold text-sm text-white">{m.label}</div>
                <div className="text-white/40 text-xs mt-0.5">{m.description}</div>
                <div className="text-[#FFE600] font-black text-xs mt-1">
                  AED {m.ratePerUnit.toLocaleString()} / {m.unit}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Spec fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.specs.map((field) => (
            <div key={field.key}>
              <label className="block text-xs font-black uppercase tracking-widest text-white/70 mb-1.5">
                {field.label}
                {field.unit && (
                  <span className="text-white/30 ml-1 normal-case font-normal">
                    ({field.unit})
                  </span>
                )}
              </label>
              {field.type === "select" ? (
                <div className="relative">
                  <select
                    value={specValues[field.key] ?? ""}
                    onChange={(e) => onSpecChange(field.key, e.target.value)}
                    className="w-full bg-white/5 border-2 border-white/20 focus:border-[#FFE600] rounded-xl px-4 py-3 text-white font-medium outline-none transition-colors appearance-none pr-10"
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#1a0a2e]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                  />
                </div>
              ) : (
                <input
                  type={field.type}
                  min={field.min}
                  max={field.max}
                  placeholder={field.placeholder}
                  value={specValues[field.key] ?? ""}
                  onChange={(e) => onSpecChange(field.key, e.target.value)}
                  className="w-full bg-white/5 border-2 border-white/20 focus:border-[#FFE600] rounded-xl px-4 py-3 text-white font-medium outline-none transition-colors placeholder:text-white/20"
                />
              )}
            </div>
          ))}
        </div>

        {service.minOrderNote && (
          <p className="text-white/30 text-xs font-medium">
            ℹ️ {service.minOrderNote}
          </p>
        )}

        <button
          onClick={onNext}
          disabled={!isValid}
          className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            isValid
              ? "bg-[#FFE600] text-black shadow-[4px_4px_0px_#FF3AF2] hover:shadow-[2px_2px_0px_#FF3AF2] hover:translate-x-[2px] hover:translate-y-[2px]"
              : "bg-white/10 text-white/30 cursor-not-allowed"
          }`}
        >
          <Calculator size={16} />
          Calculate My Price
        </button>
      </div>
    </div>
  );
}

// ─── Step 3: Price Result ─────────────────────────────────────────────────────

function Step3Price({
  service,
  material,
  result,
  onBack,
  onNext,
}: {
  service: ServicePricing;
  material: MaterialOption;
  result: PriceResult;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="text-center">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/50 hover:text-white mb-6 text-sm font-bold uppercase tracking-widest transition-colors"
      >
        <ArrowLeft size={14} /> Edit specs
      </button>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Big price */}
        <div className="inline-block border-4 border-[#FFE600] rounded-3xl px-10 py-8 mb-8 bg-[#FFE600]/5 shadow-[8px_8px_0px_#FF3AF2]">
          <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-1">
            Estimated Price
          </p>
          <div className="text-5xl md:text-6xl font-black text-[#FFE600]">
            {result.unit}{" "}
            {result.total.toLocaleString("en-AE", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <p className="text-white/40 text-xs mt-2">
            {service.name} — {material.label}
          </p>
        </div>

        {/* Breakdown */}
        <div className="max-w-sm mx-auto mb-8 text-left space-y-2">
          {result.breakdown.map((row, i) => (
            <div
              key={i}
              className={`flex justify-between items-center py-2 text-sm font-medium border-b border-white/5 ${
                row.label === "Total"
                  ? "text-[#FFE600] font-black text-base border-t-2 border-t-[#FFE600]/30 mt-2 pt-3"
                  : "text-white/60"
              }`}
            >
              <span>{row.label}</span>
              <span>{row.value}</span>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs mb-8 max-w-sm mx-auto">
          * This is an estimate. Final price depends on site survey and material availability.
          VAT not included.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onNext}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FF3AF2] text-white font-black uppercase tracking-widest rounded-xl border-2 border-[#FF3AF2] shadow-[4px_4px_0px_#FFE600] hover:shadow-[2px_2px_0px_#FFE600] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
          >
            <Send size={16} /> Get Formal Quote
          </button>
          <a
            href="https://wa.me/971552682030"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl border-2 border-[#25D366] shadow-[4px_4px_0px_#128C7E] hover:shadow-[2px_2px_0px_#128C7E] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Step 4: Contact Form ─────────────────────────────────────────────────────

function Step4Submit({
  service,
  result,
  formData,
  onChange,
  onBack,
  onSubmit,
  submitting,
  done,
}: {
  service: ServicePricing;
  result: PriceResult;
  formData: FormData;
  onChange: (key: keyof FormData, val: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  submitting: boolean;
  done: boolean;
}) {
  if (done) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-10"
      >
        <div className="text-7xl mb-4">📧</div>
        <h2 className="text-3xl font-black text-[#FFE600] mb-3">Email App Opened!</h2>
        <p className="text-white/60 max-w-sm mx-auto font-medium">
          Your email client has opened with the full quote pre-filled.
          Just hit <span className="text-white font-bold">Send</span> to submit your request.
        </p>
        <p className="text-white/40 text-sm mt-3 max-w-xs mx-auto">
          Email didn't open?{" "}
          <a
            href="mailto:info@emirads.ae"
            className="text-[#00F5D4] font-bold underline"
          >
            Click here to email us
          </a>
          {" "}or call{" "}
          <a
            href="tel:+971552682030"
            className="text-[#00F5D4] font-bold underline"
          >
            +971 55 268 2030
          </a>
        </p>
        <a
          href="https://wa.me/971552682030"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl text-sm"
          style={{ boxShadow: "4px 4px 0px #128C7E" }}
        >
          💬 Or send via WhatsApp instead
        </a>
      </motion.div>
    );
  }

  const fields: {
    key: keyof FormData;
    label: string;
    placeholder: string;
    icon: React.ReactNode;
    type?: string;
  }[] = [
    {
      key: "name",
      label: "Your Name",
      placeholder: "e.g. Ahmed Al Rashid",
      icon: <User size={16} />,
    },
    {
      key: "phone",
      label: "Phone / WhatsApp",
      placeholder: "+971 50 123 4567",
      icon: <Phone size={16} />,
      type: "tel",
    },
    {
      key: "email",
      label: "Email Address",
      placeholder: "you@company.com",
      icon: <Mail size={16} />,
      type: "email",
    },
  ];

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/50 hover:text-white mb-6 text-sm font-bold uppercase tracking-widest transition-colors"
      >
        <ArrowLeft size={14} /> Back to price
      </button>

      <h2 className="text-2xl font-black text-white mb-1">
        Get Your Formal Quote
      </h2>
      <p className="text-white/50 text-sm mb-6">
        {service.name} estimate:{" "}
        <span className="text-[#FFE600] font-black">
          {result.unit}{" "}
          {result.total.toLocaleString("en-AE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </p>

      <div className="space-y-4">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="block text-xs font-black uppercase tracking-widest text-white/70 mb-1.5">
              {f.label}
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                {f.icon}
              </div>
              <input
                type={f.type ?? "text"}
                placeholder={f.placeholder}
                value={formData[f.key]}
                onChange={(e) => onChange(f.key, e.target.value)}
                className="w-full bg-white/5 border-2 border-white/20 focus:border-[#FF3AF2] rounded-xl pl-10 pr-4 py-3 text-white font-medium outline-none transition-colors placeholder:text-white/20"
              />
            </div>
          </div>
        ))}

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-white/70 mb-1.5">
            Project Details{" "}
            <span className="text-white/30 normal-case font-normal">(optional)</span>
          </label>
          <div className="relative">
            <MessageSquare
              size={16}
              className="absolute left-3 top-4 text-white/30"
            />
            <textarea
              rows={3}
              placeholder="Any additional info about your project…"
              value={formData.message}
              onChange={(e) => onChange("message", e.target.value)}
              className="w-full bg-white/5 border-2 border-white/20 focus:border-[#FF3AF2] rounded-xl pl-10 pr-4 py-3 text-white font-medium outline-none transition-colors placeholder:text-white/20 resize-none"
            />
          </div>
        </div>

        <button
          onClick={onSubmit}
          disabled={submitting || !formData.name || !formData.phone}
          className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            !submitting && formData.name && formData.phone
              ? "bg-[#FF3AF2] text-white shadow-[4px_4px_0px_#FFE600] hover:shadow-[2px_2px_0px_#FFE600] hover:translate-x-[2px] hover:translate-y-[2px]"
              : "bg-white/10 text-white/30 cursor-not-allowed"
          }`}
        >
          {submitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Opening email…
            </>
          ) : (
            <>
              <Mail size={16} /> Open Email & Send Quote
            </>
          )}
        </button>

        <p className="text-white/20 text-xs text-center">
          This will open your email app with the quote pre-filled. Just hit Send.
        </p>
      </div>
    </div>
  );
}

// ─── Main QuoteBuilder ────────────────────────────────────────────────────────

interface QuoteBuilderProps {
  /** Pre-select a service by id and skip Step 1 */
  preselectedServiceId?: string;
  className?: string;
}

export default function QuoteBuilder({
  preselectedServiceId,
  className = "",
}: QuoteBuilderProps) {
  const preselected = preselectedServiceId
    ? servicePricingList.find((s) => s.id === preselectedServiceId) ?? null
    : null;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(preselected ? 2 : 1);
  const [selectedService, setSelectedService] =
    useState<ServicePricing | null>(preselected);
  const [selectedMaterial, setSelectedMaterial] =
    useState<MaterialOption | null>(null);
  const [specValues, setSpecValues] = useState<Record<string, string>>({});
  const [priceResult, setPriceResult] = useState<PriceResult | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSpecChange = useCallback(
    (key: string, val: string) =>
      setSpecValues((prev) => ({ ...prev, [key]: val })),
    []
  );

  const handleFormChange = useCallback(
    (key: keyof FormData, val: string) =>
      setFormData((prev) => ({ ...prev, [key]: val })),
    []
  );

  const handleCalculate = useCallback(() => {
    if (!selectedService || !selectedMaterial) return;
    const result = selectedService.calculatePrice(specValues, selectedMaterial);
    setPriceResult(result);
    setStep(3);
  }, [selectedService, selectedMaterial, specValues]);

  const handleSubmit = useCallback(() => {
    if (!selectedService || !selectedMaterial || !priceResult) return;

    const specLines = selectedService.specs
      .map((field) => {
        const val = specValues[field.key];
        if (!val) return null;
        return `  ${field.label}: ${val}${field.unit ? " " + field.unit : ""}`;
      })
      .filter(Boolean)
      .join("\n");

    const breakdownLines = priceResult.breakdown
      .map((row) => `  ${row.label}: ${row.value}`)
      .join("\n");

    const totalFormatted = `${priceResult.unit} ${priceResult.total.toLocaleString("en-AE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    const body = [
      "══════════════════════════════════════════",
      "  QUOTE REQUEST — EMIRADS",
      "══════════════════════════════════════════",
      "",
      `SERVICE   : ${selectedService.name}`,
      `MATERIAL  : ${selectedMaterial.label}`,
      "",
      "── SPECIFICATIONS ─────────────────────────",
      specLines,
      "",
      "── PRICE BREAKDOWN ─────────────────────────",
      breakdownLines,
      "",
      "── ESTIMATED TOTAL ─────────────────────────",
      `  ${totalFormatted}`,
      "  * Estimate only. Final price confirmed after site survey.",
      "  * VAT not included.",
      "",
      "── CONTACT DETAILS ─────────────────────────",
      `  Name   : ${formData.name}`,
      `  Phone  : ${formData.phone}`,
      ...(formData.email ? [`  Email  : ${formData.email}`] : []),
      ...(formData.message ? ["", `  Notes  : ${formData.message}`] : []),
      "",
      "────────────────────────────────────────────",
      "Quote generated via emirads.ae",
      "To confirm this quote, please reply to this email.",
    ].join("\n");

    const subject = encodeURIComponent(
      `Quote Request — ${selectedService.name} | ${totalFormatted}`
    );
    const encodedBody = encodeURIComponent(body);
    const mailto = `mailto:info@emirads.ae?subject=${subject}&body=${encodedBody}`;

    window.open(mailto, "_self");
    setDone(true);
  }, [selectedService, selectedMaterial, priceResult, specValues, formData]);

  const resetToService = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedMaterial(null);
    setSpecValues({});
    setPriceResult(null);
    setDone(false);
  };

  return (
    <div
      className={`relative rounded-3xl border-2 border-white/10 bg-gradient-to-b from-[#1a0a2e] to-[#0D0D1A] p-6 md:p-10 overflow-hidden ${className}`}
    >
      {/* BG glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#FF3AF2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#7B2FFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <StepBar step={step} />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              <Step1ServiceSelect
                onSelect={(s) => {
                  setSelectedService(s);
                  setStep(2);
                  setSpecValues({});
                  setSelectedMaterial(null);
                }}
              />
            </motion.div>
          )}

          {step === 2 && selectedService && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              <Step2Specs
                service={selectedService}
                specValues={specValues}
                selectedMaterial={selectedMaterial}
                onSpecChange={handleSpecChange}
                onMaterialChange={setSelectedMaterial}
                onBack={resetToService}
                onNext={handleCalculate}
              />
            </motion.div>
          )}

          {step === 3 && selectedService && selectedMaterial && priceResult && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              <Step3Price
                service={selectedService}
                material={selectedMaterial}
                result={priceResult}
                onBack={() => setStep(2)}
                onNext={() => setStep(4)}
              />
            </motion.div>
          )}

          {step === 4 && selectedService && priceResult && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              <Step4Submit
                service={selectedService}
                result={priceResult}
                formData={formData}
                onChange={handleFormChange}
                onBack={() => setStep(3)}
                onSubmit={handleSubmit}
                submitting={submitting}
                done={done}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
