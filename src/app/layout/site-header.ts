import { Component, HostListener, signal } from '@angular/core';
import { SITE, NAV } from '../core/content/site';

@Component({
  selector: 'app-site-header',
  standalone: true,
  template: `
    <header class="hd" [class.solid]="scrolled()">
      <a class="brand" href="#top" (click)="close()">
        <span class="mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <circle cx="12" cy="12" r="11" fill="currentColor" opacity=".14" />
            <path d="M7 14c0-2 1.4-3.4 2.6-4.2C9.2 8.6 9 7.8 9 7c0-.6.7-.9 1.1-.5l1 .9h1.8l1-.9c.4-.4 1.1-.1 1.1.5 0 .8-.2 1.6-.6 2.8C16.6 10.6 18 12 18 14c0 .6-.5 1-1 1-.7 0-1-.6-1.2-1.2-.2.7-.5 1.6-.5 2.7 0 .4-.3.7-.7.7h-.8c-.4 0-.7-.3-.7-.7V15h-.6v1.5c0 .4-.3.7-.7.7h-.8c-.4 0-.7-.3-.7-.7 0-1.1-.3-2-.5-2.7C8.3 14.4 8 15 7.3 15c-.5 0-.8-.4-.8-1Z" fill="currentColor"/>
          </svg>
        </span>
        <span class="word">Loc d'<em>Ânes</em></span>
      </a>

      <nav class="nav" [class.open]="open()">
        @for (l of nav; track l.href) {
          <a [href]="l.href" (click)="close()">{{ l.label }}</a>
        }
        <a class="tel-m" [href]="'tel:' + site.telephoneE164" (click)="close()">{{ site.telephone }}</a>
      </nav>

      <a class="tel btn-press" [href]="'tel:' + site.telephoneE164">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        {{ site.telephone }}
      </a>

      <button class="burger" type="button" (click)="toggle()" [attr.aria-expanded]="open()" aria-label="Menu">
        <span [class.x]="open()"></span>
      </button>
    </header>
  `,
  styles: [`
    .hd {
      position: fixed; inset: 0 0 auto 0; z-index: 50;
      display: flex; align-items: center; gap: 16px;
      padding: 18px clamp(16px, 5vw, 56px);
      transition: background-color 300ms var(--ease-out-strong), box-shadow 300ms var(--ease-out-strong), padding 300ms var(--ease-out-strong);
    }
    .hd.solid {
      background: color-mix(in srgb, var(--color-paper) 88%, transparent);
      backdrop-filter: blur(12px);
      box-shadow: 0 1px 0 color-mix(in srgb, var(--color-ink) 8%, transparent);
      padding-top: 12px; padding-bottom: 12px;
    }
    .brand { display: inline-flex; align-items: center; gap: 10px; color: var(--color-forest); }
    .mark { color: var(--color-clay); display: flex; }
    .word { font-family: var(--font-display); font-size: 22px; font-weight: 600; letter-spacing: -.02em; }
    .word em { color: var(--color-clay); font-style: normal; }

    .nav { margin-left: auto; display: flex; align-items: center; gap: 26px; }
    .nav > a { position: relative; font-size: 15px; font-weight: 500; color: var(--color-ink-soft); padding: 4px 0; }
    .nav > a::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -2px; height: 2px;
      background: var(--color-clay); transform: scaleX(0); transform-origin: left;
      transition: transform 220ms var(--ease-out-strong);
    }
    @media (hover: hover) and (pointer: fine) {
      .nav > a:hover { color: var(--color-forest); }
      .nav > a:hover::after { transform: scaleX(1); }
    }
    .tel-m { display: none; }

    .tel {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--color-clay); color: var(--color-paper);
      font-weight: 600; font-size: 14.5px; padding: 9px 16px; border-radius: 999px;
    }
    .tel:hover { background: var(--color-clay-deep); }

    .burger { display: none; }

    @media (max-width: 860px) {
      .tel { display: none; }
      .burger {
        display: inline-flex; margin-left: auto; width: 42px; height: 42px;
        align-items: center; justify-content: center; border: none; background: transparent; cursor: pointer;
      }
      .burger span, .burger span::before, .burger span::after {
        content: ''; display: block; width: 22px; height: 2px; background: var(--color-forest);
        transition: transform 240ms var(--ease-out-strong), opacity 200ms ease;
      }
      .burger span { position: relative; }
      .burger span::before { position: absolute; top: -7px; }
      .burger span::after { position: absolute; top: 7px; }
      .burger span.x { background: transparent; }
      .burger span.x::before { transform: translateY(7px) rotate(45deg); }
      .burger span.x::after { transform: translateY(-7px) rotate(-45deg); }

      .nav {
        position: fixed; inset: 0; flex-direction: column; justify-content: center; gap: 22px;
        background: color-mix(in srgb, var(--color-paper) 97%, transparent);
        backdrop-filter: blur(8px);
        opacity: 0; pointer-events: none; transform: translateY(-8px);
        transition: opacity 260ms var(--ease-out-strong), transform 260ms var(--ease-out-strong);
      }
      .nav.open { opacity: 1; pointer-events: auto; transform: none; }
      .nav > a { font-size: 22px; font-family: var(--font-display); color: var(--color-forest); }
      .tel-m { display: block; color: var(--color-clay); font-weight: 700; }
    }
  `],
})
export class SiteHeader {
  site = SITE;
  nav = NAV;
  scrolled = signal(false);
  open = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set((globalThis.scrollY ?? 0) > 24); }

  toggle() { this.open.update((v) => !v); }
  close() { this.open.set(false); }
}
