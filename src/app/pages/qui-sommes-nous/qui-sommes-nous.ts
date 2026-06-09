import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE } from '../../core/content/site';

@Component({
  selector: 'app-qui-sommes-nous',
  standalone: true,
  imports: [RevealDirective, RouterLink],
  template: `
    <section class="page-top">
      <p class="kicker">Notre histoire</p>
      <h1>Qui sommes-nous&nbsp;?</h1>
      <p class="lead">Une aventure de 30 ans, une ferme en agriculture régénératrice, et un animal coup de cœur.</p>
    </section>

    <section class="section">
      <div class="container split">
        <div class="prose" appReveal>
          <p>Loc' d'Ânes est née il y a <strong>30 ans</strong>, à Granès, dans un écrin de verdure appelé « Les Buffatières ». Créée par Jean-Marc, rejoint par Béa, elle est devenue ce qu'elle est aujourd'hui. L'heure de la retraite ayant sonné, ils m'ont passé les rênes en <strong>janvier 2024</strong>.</p>
          <p>Aujourd'hui, Loc d'Ânes est basée à la <strong>Ferme de Coume-Sourde</strong>, à Rennes-le-Château. La ferme accueille des poules pondeuses, des vaches et de petits cochons Kune Kune. Les ânes viennent en renfort pour permettre une <strong>agriculture régénératrice</strong> : pâturage tournant dynamique, écosystème animal, traitements réduits au strict nécessaire — de quoi régénérer faune et flore.</p>
          <p>Avec <strong>Matthieu</strong>, mon compagnon, nous adorons cuisiner les produits régionaux, et surtout ceux de la ferme et du potager. Pique-nique pour la rando ou repas à la ferme : nous nous réjouissons de vous concocter un bon menu.</p>
          <p>Pour nous deux, l'âne est un animal coup de cœur : doué pour donner de l'amour et de la tendresse, d'une intelligence rare, courageux et fidèle. J'espère pouvoir vous transmettre tout cela lors de vos randonnées.</p>
          <p class="sign">À très bientôt, <strong>Hannah</strong> 🫏</p>
        </div>
        <figure class="photo" appReveal="120">
          <img src="assets/hebergeurs/ferme.jpg" alt="La Ferme de Coume-Sourde, à Rennes-le-Château" loading="lazy" width="600" height="400" />
          <figcaption>La Ferme de Coume-Sourde, Rennes-le-Château</figcaption>
        </figure>
      </div>
    </section>

    <section class="section alt">
      <div class="container cta-inner" appReveal>
        <h2>Venez nous rencontrer</h2>
        <p class="lead">Tours de ferme sur demande, à la demi-journée ou journée, avec ou sans repas-dégustation.</p>
        <a class="btn btn-primary btn-press" routerLink="/contact">Nous contacter</a>
      </div>
    </section>
  `,
  styles: [`
    .split { display: grid; grid-template-columns: 1.3fr 1fr; gap: clamp(32px, 6vw, 72px); align-items: start; }
    .prose .sign { font-family: var(--font-display); font-size: 22px; color: var(--color-forest); margin-top: 6px; }
    .photo { margin: 0; position: sticky; top: 100px; }
    .photo img { width: 100%; border-radius: 22px; border: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent);
      box-shadow: 0 30px 60px -42px color-mix(in srgb, var(--color-ink) 75%, transparent); }
    .photo figcaption { margin-top: 12px; font-size: 14px; color: var(--color-stone); text-align: center; }
    .cta-inner { text-align: center; max-width: 640px; }
    .cta-inner h2 { font-size: clamp(28px, 4vw, 44px); }
    .cta-inner .lead { margin: 16px 0 28px; font-size: 18px; }
    @media (max-width: 900px) { .split { grid-template-columns: 1fr; } .photo { position: static; } }
  `],
})
export class QuiSommesNous {
  private seo = inject(SeoService);
  site = SITE;
  constructor() {
    this.seo.setPage({
      title: 'Qui sommes-nous — Hannah & la Ferme de Coume-Sourde | Loc d’Ânes',
      description:
        'Loc d’Ânes, 30 ans d’histoire, reprise par Hannah en 2024 à la Ferme de Coume-Sourde (Rennes-le-Château) : agriculture régénératrice, produits de la ferme et passion des ânes.',
      path: '/qui-sommes-nous',
    });
  }
}
