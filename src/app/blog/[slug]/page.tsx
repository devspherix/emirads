import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/content/blog";
import { BlogPostClient } from "./BlogPostClient";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Emirads Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const sameCategory = blogPosts.filter(
    (p) => p.id !== post.id && p.category === post.category,
  );
  const related =
    sameCategory.length >= 3
      ? sameCategory.slice(0, 3)
      : [
          ...sameCategory,
          ...blogPosts
            .filter((p) => p.id !== post.id && p.category !== post.category)
            .slice(0, 3 - sameCategory.length),
        ];

  return <BlogPostClient post={post} related={related} />;
}
