import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Emir Ads",
  description:
    "How Emir Ads collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF6A1A]">
              Legal
            </p>
            <h1
              className="text-4xl font-black md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-white/60">
              Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 text-gray-700">
            <Section title="1. Introduction">
              <p>
                {SITE.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your
                privacy and is committed to protecting the personal information you
                share with us through our website {SITE.email.split("@")[1] ? `emirads.ae` : ""},
                quote forms, phone, WhatsApp and email.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <ul className="list-disc space-y-2 pl-6">
                <li>Contact details you submit through our forms (name, company, email, phone).</li>
                <li>Project information you share when requesting a quote.</li>
                <li>Basic analytics about how visitors use our site (anonymised).</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul className="list-disc space-y-2 pl-6">
                <li>To respond to your enquiries and prepare quotes.</li>
                <li>To send you project updates and invoices.</li>
                <li>To improve our website and services.</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent or trade your personal information with third parties.
              </p>
            </Section>

            <Section title="4. Data Retention">
              <p>
                We keep your information only as long as needed to fulfil the purpose for
                which it was collected, and as required by UAE law.
              </p>
            </Section>

            <Section title="5. Your Rights">
              <p>
                You may request access to, correction of, or deletion of your personal data
                at any time by emailing{" "}
                <a href={`mailto:${SITE.email}`} className="font-bold text-[#FF6A1A] hover:underline">
                  {SITE.email}
                </a>.
              </p>
            </Section>

            <Section title="6. Contact">
              <p>
                If you have questions about this Privacy Policy, contact us at{" "}
                <a href={`mailto:${SITE.email}`} className="font-bold text-[#FF6A1A] hover:underline">
                  {SITE.email}
                </a>{" "}
                or{" "}
                <a href={`tel:${SITE.phoneRaw}`} className="font-bold text-[#FF6A1A] hover:underline">
                  {SITE.phone}
                </a>.
              </p>
            </Section>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="mb-3 text-xl font-black text-black"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <div className="space-y-2 leading-relaxed">{children}</div>
    </div>
  );
}
