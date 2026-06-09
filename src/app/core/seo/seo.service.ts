import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SITE } from '../content/site';

export interface SeoPage {
  title: string;
  description: string;
  path: string; // ex. '/' ou '/tarifs'
  image?: string; // chemin absolu ou relatif d'une image OG
}

/**
 * Centralise tout le SEO d'une page : <title>, meta description, Open Graph,
 * Twitter Cards, URL canonique et JSON-LD. SSR-safe : exécuté pendant le
 * prerender, le balisage est donc présent dans le HTML statique généré.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private doc = inject(DOCUMENT);
  private title = inject(Title);
  private meta = inject(Meta);

  setPage(p: SeoPage): void {
    const url = SITE.url.replace(/\/$/, '') + p.path;
    const image = p.image ?? `${SITE.url}/og-image.jpg`;

    this.title.setTitle(p.title);
    this.upsert('description', p.description);

    // Open Graph
    this.upsertProp('og:type', 'website');
    this.upsertProp('og:site_name', SITE.nom);
    this.upsertProp('og:locale', 'fr_FR');
    this.upsertProp('og:title', p.title);
    this.upsertProp('og:description', p.description);
    this.upsertProp('og:url', url);
    this.upsertProp('og:image', image);

    // Twitter
    this.upsert('twitter:card', 'summary_large_image');
    this.upsert('twitter:title', p.title);
    this.upsert('twitter:description', p.description);
    this.upsert('twitter:image', image);

    this.setCanonical(url);
  }

  private upsert(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }
  private upsertProp(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property='${property}'`);
  }

  private setCanonical(url: string): void {
    const head = this.doc.head;
    let link = head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** Injecte (ou remplace) un bloc JSON-LD identifié par son `id`. */
  setJsonLd(id: string, data: unknown): void {
    const head = this.doc.head;
    let script = head.querySelector<HTMLScriptElement>(`script[data-ld='${id}']`);
    if (!script) {
      script = this.doc.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-ld', id);
      head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
