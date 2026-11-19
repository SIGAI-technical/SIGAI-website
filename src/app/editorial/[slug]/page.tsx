import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EditorialArticle from '@/components/EditorialArticle';
import { FEATURE_ARTICLES } from '@/lib/editorial-features';
import { EDITORIALS } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FEATURE_ARTICLES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = FEATURE_ARTICLES.find((item) => item.slug === slug);
  if (!article) return {};
  const path = `/editorial/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: path },
    authors: article.authors.map((name) => ({ name })),
    openGraph: {
      type: 'article', title: article.title, description: article.excerpt,
      url: path, siteName: 'DJS ACM SIGAI',
      images: [{ url: article.image, width: article.imageWidth ?? 1200, height: article.imageHeight ?? 630, alt: article.imageAlt }],
      authors: article.authors,
      publishedTime: `${article.dateTime}T00:00:00+05:30`,
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.excerpt, images: [article.image] },
  };
}

export default async function FeatureArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = FEATURE_ARTICLES.find((item) => item.slug === slug);
  if (!article) notFound();
  const post = EDITORIALS.find((item) => item.slug === slug);
  if (!post) notFound();
  const path = `/editorial/${article.slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: article.title, description: article.excerpt,
    image: `${SITE_URL}${article.image}`, datePublished: article.dateTime,
    author: article.authors.map((name) => ({ '@type': 'Person', name })),
    publisher: { '@type': 'Organization', name: 'DJS ACM SIGAI' },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <EditorialArticle
      post={post}
      dateTime={article.dateTime}
      deck={article.deck}
      summary={article.summary}
      imageAlt={article.imageAlt}
      imageWidth={article.imageWidth}
      imageHeight={article.imageHeight}
      sections={article.sections.map(({ id, title }) => ({ id, title }))}
      references={article.sources}
      acknowledgement={article.acknowledgement}
    >
      {article.opening}
      {article.sections.map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.content}</section>)}
    </EditorialArticle>
  </>;
}
