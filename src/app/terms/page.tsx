import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service | Emir Ads",
  description:
    "Terms and conditions for using Emir Ads services and website.",
};

export default function TermsPage() {
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
              Terms of Service
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
            <Section title="1. Acceptance of Terms">
              <p>
                By using the {SITE.name} website or engaging our services, you agree to be
                bound by these Terms of Service. If you do not agree, please do not use our
                services.
              </p>
            </Section>

            <Section title="2. Quotes & Pricing">
              <p>
                Prices displayed on our website and quote tools are estimates only and do
                not constitute a formal contract. Final pricing is confirmed in writing
                after site survey and design approval. All prices are quoted in AED and
                exclude 5% VAT unless stated otherwise.
              </p>
            </Section>

            <Section title="3. Production & Delivery">
              <p>
                Production lead times begin after artwork approval and receipt of advance
                payment (typically 50%). Delivery dates are estimates and may be affected
                by material availability, authority approvals and on-site conditions.
              </p>
            </Section>

            <Section title="4. Approvals & Permits">
              <p>
                Where applicable, the client is responsible for obtaining landlord
                approvals and municipality permits. {SITE.name} can assist with permit
                applications at an additional fee.
              </p>
            </Section>

            <Section title="5. Warranty">
              <p>
                We warrant our workmanship for a period of 12 months from installation.
                Material warranties vary by product and are passed through from the
                manufacturer. Warranty does not cover damage from accidents, misuse,
                vandalism or extreme weather.
              </p>
            </Section>

            <Section title="6. Payment Terms">
              <ul className="list-disc space-y-2 pl-6">
                <li>50% advance to begin production.</li>
                <li>50% on completion / before delivery.</li>
                <li>Net-30 terms available for approved corporate accounts.</li>
              </ul>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>
                {SITE.name}&apos;s total liability for any claim arising from a project
                shall not exceed the total amount paid for that specific project.
              </p>
            </Section>

            <Section title="8. Contact">
              <p>
                For any questions about these terms, email{" "}
                <a href={`mailto:${SITE.email}`} className="font-bold text-[#FF6A1A] hover:underline">
                  {SITE.email}
                </a>{" "}
                or call{" "}
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
