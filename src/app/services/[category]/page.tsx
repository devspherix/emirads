import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCategoryParams, getCategory, getServicesByCategory } from "@/content/services";
import { CategoryLandingTemplate } from "@/components/services/category-landing-template";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getAllCategoryParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} | Emir Ads — Dubai`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const services = getServicesByCategory(categorySlug);
  return <CategoryLandingTemplate category={category} services={services} />;
}
