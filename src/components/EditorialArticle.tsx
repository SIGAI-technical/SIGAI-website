import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArticleTools from '@/components/ArticleTools';
import RelatedEditorials from '@/components/RelatedEditorials';
import ReadingThemeToggle from '@/components/ReadingThemeToggle';
import { EDITORIALS, type EditorialPost } from '@/lib/content';

export interface ArticleSectionLink {
  id: string;
  title: string;
}

export interface ArticleReference {
  label: string;
  href: string;
}

export default function EditorialArticle({
  post,
  dateTime,
  deck,
  summary,
  imageAlt,
  imageWidth = 1672,
  imageHeight = 941,
  sections,
  references,
  acknowledgement,
  children,
}: {
  post: EditorialPost;
  dateTime: string;
  deck: string;
  summary: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  sections: ArticleSectionLink[];
  references: ArticleReference[];
  acknowledgement: string;
  children: ReactNode;
}) {
  const index = EDITORIALS.findIndex((item) => item.slug === post.slug);
  const previous = index > 0 ? EDITORIALS[index - 1] : null;
  const next = index >= 0 ? EDITORIALS[index + 1] : null;
  const related = EDITORIALS.filter((item) => item.slug !== post.slug).map(({ href, title, category, image, excerpt }) => ({ href, title, category, image, excerpt }));

  return (
    <article className="reading-page" data-reading-theme="dark">
      <div className="reading-shell">
        <nav className="reading-top-nav" aria-label="Article navigation">
          <Link href="/editorial">Editorial</Link>
          <a href="#summary">Summary</a>
          <a href="#contents">Contents</a>
          <a href="#references">References</a>
          <ReadingThemeToggle />
        </nav>

        <header className="reading-header">
          <p className="reading-kicker">{post.category} <span aria-hidden="true">·</span> {post.readingTime}</p>
          <h1>{post.title}</h1>
          {post.image && (
            <figure className="reading-hero">
              <Image src={post.image} alt={imageAlt} width={imageWidth} height={imageHeight} sizes="(max-width: 800px) 100vw, 760px" preload />
            </figure>
          )}
          <p className="reading-deck">{deck}</p>
          <div className="reading-meta">
            <p className="reading-byline">By {post.authors.map((name, authorIndex) => (
              <span key={name}><strong>{name}</strong>{authorIndex < post.authors.length - 1 ? (authorIndex === post.authors.length - 2 ? ' and ' : ', ') : ''}</span>
            ))}</p>
            <time dateTime={dateTime}>{post.publishedAt.replace('Oct', 'October')}</time>
            {post.image && <ArticleTools title={post.title} description={post.excerpt} image={post.image} authors={post.authors} />}
          </div>
        </header>

        <section className="reading-summary" id="summary" aria-labelledby="summary-title">
          <h2 id="summary-title">TL;DR</h2>
          <p>{summary}</p>
        </section>

        <nav className="reading-contents" id="contents" aria-label="Contents">
          <h2>In this article</h2>
          <ol>{sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
        </nav>

        <div className="reading-copy" id="article-body">{children}</div>

        <section className="reading-acknowledgements" aria-labelledby="acknowledgements-title">
          <h2 id="acknowledgements-title">Acknowledgements</h2>
          <p>{acknowledgement}</p>
        </section>

        <section className="reading-references" id="references" aria-labelledby="references-title">
          <h2 id="references-title">References</h2>
          <ol>{references.map((reference) => <li key={reference.href}><a href={reference.href}>{reference.label}</a></li>)}</ol>
        </section>

        <RelatedEditorials options={related} topics={post.topics} />

        <nav className="reading-sequence" aria-label="Adjacent articles">
          {previous ? <Link href={previous.href}><span>← Previous article</span><strong>{previous.title}</strong></Link> : <span />}
          {next ? <Link href={next.href}><span>Next article →</span><strong>{next.title}</strong></Link> : <span />}
        </nav>
      </div>
    </article>
  );
}
