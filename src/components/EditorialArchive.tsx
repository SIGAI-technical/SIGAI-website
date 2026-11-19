'use client';

import { useEffect, useMemo, useRef, useState, type WheelEvent } from 'react';
import { EDITORIALS, EDITORIAL_AUTHORS, EDITORIAL_CATEGORIES } from '@/lib/content';
import Image from 'next/image';
import Link from 'next/link';

export default function EditorialArchive() {
  const [filterBy, setFilterBy] = useState<'categories' | 'authors'>('categories');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(
    () => [...new Set([...EDITORIAL_CATEGORIES, ...EDITORIALS.map((post) => post.category)].filter(Boolean))],
    [],
  );
  const authors = useMemo(
    () => [...new Set([...EDITORIAL_AUTHORS, ...EDITORIALS.flatMap((post) => post.authors)].filter(Boolean))],
    [],
  );
  const choices = filterBy === 'categories' ? categories : authors;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setTopic(new URLSearchParams(window.location.search).get('topic') ?? '');
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (searchRef.current?.contains(event.target as Node)) return;
      searchInputRef.current?.blur();
      setSearchOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, [searchOpen]);

  const posts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return EDITORIALS.filter((post) => {
      const searchable = `${post.title} ${post.excerpt} ${post.authors.join(' ')} ${post.category} ${post.topics.join(' ')} ${post.searchTerms ?? ''}`.toLocaleLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      const matchesTopic = !topic || post.topics.includes(topic);
      const matchesSelection = selectedValues.length === 0 || selectedValues.some((value) =>
        filterBy === 'categories' ? post.category === value : post.authors.includes(value),
      );
      return matchesQuery && matchesTopic && matchesSelection;
    }).sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  }, [query, topic, selectedValues, filterBy]);

  const hasFilters = Boolean(query || topic || selectedValues.length);
  const toggleValue = (value: string) => {
    setSelectedValues((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    );
  };

  const changeFilterBy = (value: 'categories' | 'authors') => {
    setFilterBy(value);
    setSelectedValues([]);
  };

  const clearFilters = () => {
    setQuery('');
    setTopic('');
    setSelectedValues([]);
    const url = new URL(window.location.href);
    url.searchParams.delete('topic');
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const scrollChoices = (event: WheelEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    if (element.scrollWidth <= element.clientWidth) return;
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
    }
  };

  return (
    <section className="section editorial-section" aria-label="Editorial archive">
      <div className="shell">
        <div className="editorial-filterbar" data-search-open={searchOpen} role="group" aria-label="Filter editorials">
          <label className="editorial-filter-mode">
            <span className="editorial-filter-mode__prefix">Filter by</span>
            <span className="editorial-filter-mode__select">
              <select
                value={filterBy}
                onChange={(event) => changeFilterBy(event.target.value as 'categories' | 'authors')}
                aria-label="Filter by"
              >
                <option value="categories">Categories</option>
                <option value="authors">Authors</option>
              </select>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </span>
          </label>

          <div className="editorial-filterbar__choices" role="group" aria-label={filterBy === 'categories' ? 'Categories' : 'Authors'}>
            <div className="editorial-filterbar__choice-scroll" onWheel={scrollChoices}>
              <div className="editorial-filterbar__choice-list" key={filterBy}>
                <button
                  type="button"
                  className="editorial-filter-chip"
                  data-active={selectedValues.length === 0}
                  aria-pressed={selectedValues.length === 0}
                  onClick={() => setSelectedValues([])}
                >
                  All
                </button>
                {choices.length ? (
                  choices.map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      className="editorial-filter-chip"
                      data-active={selectedValues.includes(item)}
                      aria-pressed={selectedValues.includes(item)}
                      style={{ ['--chip-index' as string]: index }}
                      onClick={() => toggleValue(item)}
                    >
                      {item}
                    </button>
                  ))
                ) : (
                  <span className="editorial-filterbar__no-options">
                    {filterBy === 'categories' ? 'Categories appear with posts' : 'Authors appear with posts'}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="editorial-search" data-open={searchOpen} ref={searchRef}>
            <input
              ref={searchInputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setSearchOpen(false);
                  searchButtonRef.current?.focus();
                }
              }}
              placeholder="Search editorials"
              aria-label="Search editorials"
              tabIndex={searchOpen ? 0 : -1}
            />
            <button
              ref={searchButtonRef}
              type="button"
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 5 5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="editorial-results" id="articles" aria-live="polite" aria-relevant="additions text">
          {posts.length > 0 ? (
            <>
              <div className="editorial-results__heading">
                <span className="eyebrow">From the community</span>
                {topic && <span className="editorial-results__topic">Topic: {topic}</span>}
                <span className="editorial-results__count">{posts.length} {posts.length === 1 ? 'article' : 'articles'}</span>
                {hasFilters && (
                  <button type="button" className="editorial-filterbar__clear" onClick={clearFilters}>
                    Clear filters
                  </button>
                )}
              </div>
              <div className="editorial-posts">
                {posts.map((post) => (
                  <article className="editorial-post" key={post.slug}>
                    <Link className="editorial-post__link" href={post.href} aria-label={`Read ${post.title}`}>
                      {post.image && <span className="editorial-post__image"><Image src={post.image} alt="" width={1200} height={630} /></span>}
                      <div className="editorial-post__meta">
                        <span>{post.category}</span>
                        <span>{post.publishedAt}</span>
                      </div>
                      <h2 className="editorial-post__title">{post.title}</h2>
                      <p className="editorial-post__excerpt">{post.excerpt}</p>
                      <div className="editorial-post__byline">
                        <span>By {post.authors.map((author, index) => <span key={author}><strong>{author}</strong>{index < post.authors.length - 1 ? (index === post.authors.length - 2 ? ' and ' : ', ') : ''}</span>)}</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="editorial-empty">
              <span className="editorial-empty__index" aria-hidden="true">01 / ARCHIVE</span>
              <div className="editorial-empty__copy">
                <h2 className="editorial-empty__title">
                  {EDITORIALS.length === 0
                    ? 'No editorials published yet'
                    : 'No editorials match these filters'}
                </h2>
                <p className="editorial-empty__body">
                  {EDITORIALS.length === 0
                    ? 'Editorials will appear here when they are ready to share.'
                    : 'Try another search or clear the filters to see all editorials.'}
                </p>
                {EDITORIALS.length > 0 && hasFilters && (
                  <button type="button" className="editorial-filterbar__clear editorial-empty__clear" onClick={clearFilters}>
                    Clear filters
                  </button>
                )}
              </div>
              <span className="editorial-empty__mark" aria-hidden="true">✳</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
