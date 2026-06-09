import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE, ITINERAIRES } from '../../core/content/site';

@Component({
  selector: 'app-itineraires',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="page-top">
      <p class="kicker">Marcher avec un âne</p>
      <h1>Les itinéraires</h1>
      <p class="lead">Du tour de ferme d'1 h 30 à la grande boucle de plusieurs jours — chaque parcours s'adapte à votre rythme, à votre niveau et à la saison.</p>
    </section>

    <section class="section lieux-sec">
      <div class="container">
        <header class="cat-head">
          <h2 appReveal>Les lieux que vous traverserez</h2>
          <p class="lead" appReveal="60">Châteaux cathares, pics, gorges et rivières — un avant-goût des paysages au fil des chemins.</p>
        </header>
        <div class="lieux">
          @for (l of lieux; track l.slug; let i = $index) {
            <figure class="lieu" [appReveal]="(i % 3) * 60">
              <img [src]="'assets/lieux/' + l.slug + '.jpg'" [alt]="l.label" loading="lazy" />
              <figcaption>{{ l.label }}</figcaption>
            </figure>
          }
        </div>
        <p class="credit">{{ credit }}</p>
      </div>
    </section>

    @for (cat of itineraires; track cat.cle; let odd = $odd) {
      <section class="section" [class.alt]="odd">
        <div class="container">
          <header class="cat-head">
            <h2 appReveal>{{ cat.titre }}</h2>
            <p class="lead" appReveal="60">{{ cat.intro }}</p>
          </header>
          <div class="cards-grid">
            @for (t of cat.tours; track t.nom; let i = $index) {
              <article class="tour" [appReveal]="i * 50">
                <h3>{{ t.nom }}</h3>
                <p>{{ t.texte }}</p>
              </article>
            }
          </div>
        </div>
      </section>
    }

    <section class="section cta-band">
      <div class="container cta-inner" appReveal>
        <h2>On compose votre parcours ensemble</h2>
        <p class="lead">Dites-nous vos envies, votre niveau et la durée — Hannah prépare un itinéraire sur mesure.</p>
        <a class="btn btn-primary btn-press" [href]="'tel:' + site.telephoneE164">Appeler {{ site.telephone }}</a>
      </div>
    </section>
  `,
  styles: [`
    .cat-head { max-width: 760px; margin: 0 auto clamp(28px, 4vw, 48px); text-align: center; }
    .cat-head h2 { font-size: clamp(28px, 4vw, 44px); }
    .cat-head .lead { margin-top: 12px; font-size: 18px; }
    /* grilles centrées : les items de dernière ligne ne s'étirent plus */
    .cards-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 360px)); justify-content: center; }
    .tour { background: var(--color-paper); border: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent);
      border-radius: 18px; padding: 26px 24px; transition: transform 320ms var(--ease-out-strong), box-shadow 320ms var(--ease-out-strong); }
    .section.alt .tour { background: var(--color-paper); }
    .tour h3 { font-size: 21px; color: var(--color-forest); margin-bottom: 9px; }
    .tour p { color: var(--color-ink-soft); font-size: 15.5px; }
    @media (hover: hover) and (pointer: fine) {
      .tour:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -28px color-mix(in srgb, var(--color-ink) 60%, transparent); }
    }
    .lieux-sec .cat-head { margin-bottom: clamp(24px, 3vw, 36px); }
    .lieux { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 400px)); justify-content: center; gap: 14px; }
    .lieu { margin: 0; position: relative; aspect-ratio: 3/2; border-radius: 18px; overflow: hidden; }
    .lieu img { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms var(--ease-out-strong); }
    .lieu figcaption { position: absolute; left: 0; right: 0; bottom: 0; padding: 16px; color: var(--color-paper);
      font-family: var(--font-display); font-size: 18px;
      background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--color-forest) 88%, transparent)); }
    @media (hover: hover) and (pointer: fine) { .lieu:hover img { transform: scale(1.05); } }
    .credit { margin-top: 20px; text-align: center; font-size: 12px; color: var(--color-stone); }
    .cta-band { background: var(--color-forest); }
    .cta-inner { text-align: center; max-width: 640px; }
    .cta-inner h2 { color: var(--color-paper); font-size: clamp(28px, 4vw, 44px); }
    .cta-inner .lead { color: color-mix(in srgb, var(--color-paper) 80%, transparent); margin: 16px 0 28px; }
  `],
})
export class Itineraires {
  private seo = inject(SeoService);
  site = SITE;
  itineraires = ITINERAIRES;
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
