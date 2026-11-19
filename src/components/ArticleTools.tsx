'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ArticleTools({ title, description, image, authors }: {
  title: string;
  description: string;
  image: string;
  authors: string[];
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return <>
    <button className="reading-share" type="button" onClick={() => { setCopied(false); setOpen(true); }}>Share article</button>
    {open && <div className="reading-share-overlay" onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <div className="reading-share-dialog" role="dialog" aria-modal="true" aria-labelledby="reading-share-title">
        <button ref={closeRef} className="reading-share-close" type="button" aria-label="Close share preview" onClick={() => setOpen(false)}>×</button>
        <Image src={image} alt="" width={1672} height={941} className="reading-share-preview-image" />
        <div className="reading-share-preview-copy">
          <span className="reading-share-label">Article preview</span>
          <h2 id="reading-share-title">{title}</h2>
          <p className="reading-share-authors">By {authors.map((author, index) => <span key={author}><strong>{author}</strong>{index < authors.length - 1 ? (index === authors.length - 2 ? ' and ' : ', ') : ''}</span>)}</p>
          <p className="reading-share-description">{description}</p>
          <div className="reading-share-actions">
            <button type="button" onClick={copy}>{copied ? 'Link copied' : 'Copy link'}</button>
            <button type="button" onClick={async () => {
              if (!navigator.share) return copy();
              try { await navigator.share({ title, text: description, url: window.location.href }); } catch { /* Dismissed. */ }
            }}>Share via device</button>
          </div>
        </div>
      </div>
    </div>}
  </>;
}
