import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE, TARIFS, SERVICES } from '../../core/content/site';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [RevealDirective, RouterLink],
  template: `
    <section class="page-top">
      <p class="kicker">Sur réservation</p>
      <h1>Tarifs</h1>
      <p class="lead">Le tarif de base pour la location d'un âne de randonnée — adapté ensuite à votre projet. N'hésitez pas à demander un devis.</p>
    </section>

    <section class="section">
      <div class="container narrow">
        <div class="grid-prix" appReveal>
          @for (t of tarifs; track t.duree) {
            <div class="prix"><span class="d">{{ t.duree }}</span><span class="p">{{ t.prix }}</span></div>
          }
        </div>
        <p class="pay" appReveal="80">Paiement par virement ou en espèces — nous n'acceptons pas les chèques.</p>
        <div class="devis" appReveal="120">
          <a class="btn btn-primary btn-press" routerLink="/contact">Demander un devis</a>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        <header class="head"><h2 appReveal>Locations particulières & autres services</h2>
          <p class="lead" appReveal="60">Chaque demande est étudiée sur mesure ; un devis spécifique vous est proposé.</p></header>
        <div class="srv-grid">
          @for (s of services; track s.titre; let i = $index) {
            <article class="srv" [appReveal]="i * 70">
              <span class="srv-ic">
                @switch (s.titre) {
                  @case ('La formule « Ânniversaire »') {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3M12 8v3M17 8v3"/><path d="M7 4h.01M12 4h.01M17 4h.01"/></svg>
                  }
                  @case ('Location pour événement') {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.13-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.13a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.13 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z"/><path d="M20 3v4M22 5h-4M4 17v2M5 18H3"/></svg>
                  }
                  @case ('Portage spécifique') {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                  }
                  @case ('Éco-débroussaillage') {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                  }
                }
              </span>
              <h3>{{ s.titre }}</h3>
              <p>{{ s.texte }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .narrow { max-width: 720px; }
    .grid-prix { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; }
    .prix { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 22px 16px;
      background: var(--color-paper-2); border: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent); border-radius: 16px; }
    .prix .d { font-size: 14px; color: var(--color-ink-soft); font-weight: 600; }
    .prix .p { font-family: var(--font-display); font-size: 30px; color: var(--color-clay); line-height: 1; }
    .pay { text-align: center; margin-top: 22px; color: var(--color-ink-soft); font-size: 15px; }
    .devis { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }
    .head { max-width: 720px; margin: 0 auto clamp(28px, 4vw, 44px); text-align: center; }
    .head h2 { font-size: clamp(28px, 4vw, 44px); }
    .head .lead { margin-top: 12px; font-size: 18px; }
    .srv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .srv { background: var(--color-paper); border: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent);
      border-radius: 20px; padding: 30px 26px; position: relative; overflow: hidden;
      transition: transform 320ms var(--ease-out-strong), box-shadow 320ms var(--ease-out-strong); }
    .srv::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 4px;
      background: linear-gradient(90deg, var(--color-clay), var(--color-gold)); transform: scaleX(0); transform-origin: left;
      transition: transform 360ms var(--ease-out-strong); }
    .srv-ic { display: grid; place-items: center; width: 54px; height: 54px; border-radius: 16px; margin-bottom: 18px;
      background: color-mix(in srgb, var(--color-clay) 14%, transparent); color: var(--color-clay); }
    .srv-ic svg { width: 26px; height: 26px; }
    .srv h3 { font-size: 20px; color: var(--color-forest); margin-bottom: 9px; }
    .srv p { color: var(--color-ink-soft); font-size: 15.5px; line-height: 1.6; }
    @media (hover: hover) and (pointer: fine) {
      .srv:hover { transform: translateY(-5px); box-shadow: 0 24px 46px -30px color-mix(in srgb, var(--color-ink) 60%, transparent); }
      .srv:hover::before { transform: scaleX(1); }
      .srv:hover .srv-ic { background: var(--color-clay); color: var(--color-paper); }
    }
    .srv-ic { transition: background 280ms var(--ease-out-strong), color 280ms var(--ease-out-strong); }
  `],
})
export class Tarifs {
  private seo = inject(SeoService);
  site = SITE;
  tarifs = TARIFS;
  services = SERVICES;
  constructor() {
    this.seo.setPage({
      title: 'Tarifs — location d’un âne de randonnée | Loc d’Ânes',
      description:
        'Tarifs de location d’un âne de randonnée en Pays Cathare : de 65 € la journée à 325 € les 6 jours, devis sur mesure. Anniversaire, événements, portage et éco-débroussaillage.',
      path: '/tarifs',
    });
  }
}
