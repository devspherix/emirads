import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServiceParams, getCategory, getService } from "@/content/services";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";

type Props = {
  params: Promise<{ category: string; service: string }>;
};

export function generateStaticParams() {
  return getAllServiceParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug } = await params;
  const service = getService(categorySlug, serviceSlug);
  if (!service) return {};
  return {
    title: `${service.title} | Emirads — Dubai`,
    description:
      service.description.blocks.find((b) => b.type === "paragraph")?.text ??
      `${service.title} in Dubai, Sharjah and across the UAE by Emirads.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category: categorySlug, service: serviceSlug } = await params;
  const category = getCategory(categorySlug);
  const service = getService(categorySlug, serviceSlug);
  if (!category || !service) notFound();

  return <ServiceDetailTemplate service={service} category={category} />;
}
