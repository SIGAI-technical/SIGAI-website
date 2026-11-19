'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface RelatedEditorial {
  href: string;
  title: string;
  category: string;
  image?: string;
  excerpt: string;
}

export default function RelatedEditorials({ options, topics }: { options: RelatedEditorial[]; topics: string[] }) {
  const [suggestions, setSuggestions] = useState(options.slice(0, 2));

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const shuffled = [...options];
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
      }
      setSuggestions(shuffled.slice(0, 2));
    });
    return () => cancelAnimationFrame(frame);
  }, [options]);

  return (
    <div className="reading-discover">
      <section className="reading-topics" aria-labelledby="reading-topics-title">
        <h2 id="reading-topics-title">Related topics</h2>
        <div className="reading-topic-list">
          {topics.map((topic) => (
            <Link href={`/editorial?topic=${encodeURIComponent(topic)}#articles`} key={topic}>{topic}</Link>
          ))}
        </div>
      </section>

      <section className="reading-related" aria-labelledby="reading-related-title">
        <p className="reading-related-eyebrow">Also read</p>
        <h2 id="reading-related-title">Related articles</h2>
        <div className="reading-related-list">
          {suggestions.map((post) => (
            <Link href={post.href} key={post.href} className="reading-related-card">
              {post.image && <Image src={post.image} alt="" width={836} height={470} sizes="(max-width: 700px) 100vw, 50vw" />}
              <span className="reading-related-card-copy">
                <span className="reading-related-card-category">{post.category}</span>
                <strong>{post.title}</strong>
                <span className="reading-related-card-excerpt">{post.excerpt}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
