import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE, ITINERAIRES } from '../../core/content/site';

@Component({
  selector: 'app-itineraires',
  standalone: true,
  imports: [RevealDirective, RouterLink],
  template: `
    <section class="page-top">
      <p class="kicker">Marcher avec un âne</p>
      <h1>Les itinéraires</h1>
      <p class="lead">Du tour de ferme d'1 h 30 à la grande boucle de plusieurs jours — chaque parcours s'adapte à votre rythme, à votre niveau et à la saison.</p>
    </section>

    <!-- PARTIE 1 : à la journée (lieux + balades réunis) -->
    <section class="section">
      <div class="container">
        <header class="cat-head">
          <h2 appReveal>{{ journee.titre }}</h2>
          <p class="lead" appReveal="60">{{ journee.intro }}</p>
        </header>

        <p class="sub-h" appReveal>Les lieux que vous traverserez</p>
        <div class="lieux">
          @for (l of lieux; track l.slug; let i = $index) {
            <figure class="lieu" [appReveal]="(i % 3) * 60">
              <img [src]="'assets/lieux/' + l.slug + '.jpg'" [alt]="l.label" loading="lazy" />
              <figcaption>{{ l.label }}</figcaption>
            </figure>
          }
        </div>
        <p class="credit">{{ credit }}</p>

        <p class="sub-h" appReveal>Nos balades</p>
        <div class="cards-grid">
          @for (t of journee.tours; track t.nom; let i = $index) {
            <article class="tour" [appReveal]="i * 40">
              <h3>{{ t.nom }}</h3>
              <p>{{ t.texte }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- PARTIE 2 : partir plusieurs jours — mode versus -->
    <section class="section alt">
      <div class="container">
        <header class="cat-head">
          <h2 appReveal>Partir plusieurs jours</h2>
          <p class="lead" appReveal="60">Deux façons de prolonger l'aventure — à vous de choisir votre camp.</p>
        </header>

        <div class="versus" appReveal="80">
          <article class="vs-side left">
            <span class="vs-tag">2 jours</span>
            <h3>{{ deuxJours.titre }}</h3>
            <p class="vs-intro">{{ deuxJours.intro }}</p>
            <ul class="vs-list">
              @for (t of deuxJours.tours; track t.nom) {
                <li><b>{{ t.nom }}</b><span>{{ t.texte }}</span></li>
              }
            </ul>
          </article>

          <div class="vs-or"><span>OU</span></div>

          <article class="vs-side right">
            <span class="vs-tag">plusieurs jours</span>
            <h3>{{ longsSejours.titre }}</h3>
            <p class="vs-intro">{{ longsSejours.intro }}</p>
            <ul class="vs-list">
              @for (t of longsSejours.tours; track t.nom) {
                <li><b>{{ t.nom }}</b><span>{{ t.texte }}</span></li>
              }
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section cta-band">
      <div class="container cta-inner" appReveal>
        <h2>On compose votre parcours ensemble</h2>
        <p class="lead">Dites-nous vos envies, votre niveau et la durée — Hannah prépare un itinéraire sur mesure.</p>
        <a class="btn btn-primary btn-press" routerLink="/contact">Préparer mon itinéraire</a>
      </div>
    </section>
  `,
  styles: [`
    .cat-head { max-width: 760px; margin: 0 auto clamp(28px, 4vw, 48px); text-align: center; }
    .cat-head h2 { font-size: clamp(28px, 4vw, 44px); }
    .cat-head .lead { margin-top: 12px; font-size: 18px; }
    .sub-h { text-align: center; font-family: var(--font-sans); font-size: 13px; font-weight: 600;
      letter-spacing: .16em; text-transform: uppercase; color: var(--color-clay);
      margin: clamp(28px, 4vw, 44px) 0 18px; }

    /* lieux */
    .lieux { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 400px)); justify-content: center; gap: 14px; }
    .lieu { margin: 0; position: relative; aspect-ratio: 3/2; border-radius: 18px; overflow: hidden; }
    .lieu img { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms var(--ease-out-strong); }
    .lieu figcaption { position: absolute; left: 0; right: 0; bottom: 0; padding: 16px; color: var(--color-paper);
      font-family: var(--font-display); font-size: 18px;
      background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--color-forest) 88%, transparent)); }
    @media (hover: hover) and (pointer: fine) { .lieu:hover img { transform: scale(1.05); } }
    .credit { margin-top: 16px; text-align: center; font-size: 12px; color: var(--color-stone); }

    /* balades (cartes centrées) */
    .cards-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 360px)); justify-content: center; }
    .tour { background: var(--color-paper); border: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent);
      border-radius: 18px; padding: 26px 24px; transition: transform 320ms var(--ease-out-strong), box-shadow 320ms var(--ease-out-strong); }
    .tour h3 { font-size: 21px; color: var(--color-forest); margin-bottom: 9px; }
    .tour p { color: var(--color-ink-soft); font-size: 15.5px; }
    @media (hover: hover) and (pointer: fine) {
      .tour:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -28px color-mix(in srgb, var(--color-ink) 60%, transparent); }
    }

    /* versus */
    .versus { display: grid; grid-template-columns: 1fr auto 1fr; align-items: stretch; gap: 0; max-width: 1080px; margin: 0 auto; }
    .vs-side { padding: clamp(26px, 3.4vw, 40px); border-radius: 24px; color: var(--color-paper); position: relative; }
    .vs-side.left { background: linear-gradient(160deg, var(--color-olive), var(--color-olive-deep)); }
    .vs-side.right { background: linear-gradient(160deg, var(--color-clay), var(--color-clay-deep)); }
    .vs-tag { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
      color: var(--color-gold); margin-bottom: 10px; }
    .vs-side h3 { color: var(--color-paper); font-size: clamp(23px, 2.8vw, 30px); }
    .vs-intro { color: color-mix(in srgb, var(--color-paper) 86%, transparent); margin: 10px 0 20px; font-size: 15.5px; }
    .vs-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
    .vs-list li { padding-left: 16px; border-left: 2px solid color-mix(in srgb, var(--color-gold) 60%, transparent); }
    .vs-list b { display: block; font-family: var(--font-display); font-size: 18px; color: var(--color-paper); }
    .vs-list span { font-size: 14.5px; color: color-mix(in srgb, var(--color-paper) 80%, transparent); }
    .vs-or { display: grid; place-items: center; padding: 0 6px; z-index: 2; }
    .vs-or span { width: 66px; height: 66px; border-radius: 50%; display: grid; place-items: center;
      background: var(--color-forest); color: var(--color-gold); font-family: var(--font-display); font-weight: 700; font-size: 22px;
      border: 4px solid var(--color-paper-2); box-shadow: 0 14px 32px -12px color-mix(in srgb, var(--color-ink) 80%, transparent);
      margin: 0 -22px; }

    .cta-band { background: var(--color-forest); }
    .cta-inner { text-align: center; max-width: 640px; }
    .cta-inner h2 { color: var(--color-paper); font-size: clamp(28px, 4vw, 44px); }
    .cta-inner .lead { color: color-mix(in srgb, var(--color-paper) 80%, transparent); margin: 16px 0 28px; }

    @media (max-width: 900px) {
      .versus { grid-template-columns: 1fr; }
      .vs-or { padding: 14px 0; }
      .vs-or span { margin: 0; }
    }
  `],
})
export class Itineraires {
  private seo = inject(SeoService);
  site = SITE;
  journee = ITINERAIRES.find((c) => c.cle === 'journee')!;
  deuxJours = ITINERAIRES.find((c) => c.cle === 'deux-jours')!;
  longsSejours = ITINERAIRES.find((c) => c.cle === 'longs-sejours')!;
  lieux = [
    { slug: 'rennes-le-chateau', label: 'Rennes-le-Château — la Tour Magdala' },
    { slug: 'bugarach', label: 'Le Pic de Bugarach' },
    { slug: 'galamus', label: 'Les Gorges de Galamus' },
    { slug: 'arques', label: 'Le château d’Arques' },
    { slug: 'coustaussa', label: 'Le château de Coustaussa' },
    { slug: 'rennes-les-bains', label: 'Rennes-les-Bains & sa rivière' },
  ];
  credit = 'Photos des lieux : Wikimedia Commons — K. Golik, Vassil, Pinpin, Tournasol7, CORLIN (CC BY-SA / CC BY / CC0).';
  constructor() {
    this.seo.setPage({
      title: 'Les itinéraires — randonnées avec un âne en Pays Cathare | Loc d’Ânes',
      description:
        'Balades à la journée (Rennes-le-Château, Rennes-les-Bains, le Bézu…), randonnées de 2 jours et longs séjours en itinérance avec un âne, dans l’Aude. Parcours adaptés à chaque niveau.',
      path: '/itineraires',
    });
  }
}
