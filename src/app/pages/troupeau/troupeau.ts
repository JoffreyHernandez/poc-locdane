import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE, TROUPEAU } from '../../core/content/site';

@Component({
  selector: 'app-troupeau',
  standalone: true,
  imports: [RevealDirective, RouterLink],
  template: `
    <section class="page-top">
      <p class="kicker">À grandes oreilles</p>
      <h1>Le troupeau</h1>
      <p class="lead">Près de 40 ânes vivent à la Ferme de Coume-Sourde. La moitié vient de Jean-Marc et Béa, nos prédécesseurs ; l'autre nous a été confiée par des propriétaires ne pouvant plus s'en occuper.</p>
    </section>

    <section class="section">
      <div class="container">
        <div class="groups">
          @for (g of troupeau; track g.titre; let i = $index) {
            <article class="group" [appReveal]="i * 60">
              <h3>{{ g.titre }}</h3>
              <p class="noms">{{ g.noms }}</p>
              <p class="txt">{{ g.texte }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="gallery" aria-label="Photos du troupeau">
      @for (src of photos; track src; let i = $index) {
        <figure [appReveal]="i * 40"><img [src]="src" alt="Un âne de Loc d'Ânes" loading="lazy" width="300" height="300" /></figure>
      }
    </section>

    <section class="section alt">
      <div class="container choose" appReveal>
        <h2>L'âne qui vous correspond</h2>
        <p class="lead">Grand ou petit, doux avec les enfants ou costaud pour les longs séjours, ami des chiens… nous choisissons avec soin votre compagnon de marche.</p>
        <a class="btn btn-primary btn-press" routerLink="/contact">Préparer ma sortie</a>
      </div>
    </section>
  `,
  styles: [`
    .groups { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .group { background: var(--color-paper-2); border: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent);
      border-radius: 18px; padding: 26px 24px; }
    .group h3 { font-size: 22px; color: var(--color-forest); }
    .noms { margin: 10px 0; font-family: var(--font-display); font-size: 18px; color: var(--color-clay); line-height: 1.5; }
    .txt { color: var(--color-ink-soft); font-size: 15.5px; }
    .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 6px; }
    .gallery figure { margin: 0; aspect-ratio: 1/1; overflow: hidden; }
    .gallery img { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms var(--ease-out-strong); }
    @media (hover: hover) and (pointer: fine) { .gallery figure:hover img { transform: scale(1.05); } }
    .choose { text-align: center; max-width: 640px; }
    .choose h2 { font-size: clamp(28px, 4vw, 44px); }
    .choose .lead { margin: 16px 0 28px; font-size: 18px; }
  `],
})
export class Troupeau {
  private seo = inject(SeoService);
  site = SITE;
  troupeau = TROUPEAU;
  photos = [
    'assets/anes/ane-1.jpg',
    'assets/anes/ane-2.jpg',
    'assets/anes/ane-3.jpg',
    'assets/anes/anes-charges.jpg',
    'assets/anes/ane-long-sejour.jpg',
    'assets/ane-contact.jpg',
  ];
  constructor() {
    this.seo.setPage({
      title: 'Le troupeau — près de 40 ânes de randonnée | Loc d’Ânes',
      description:
        'Ferdinand, Casimir, Loukoum, Figaro… Découvrez les ânes de Loc d’Ânes à Rennes-le-Château : les grands tout doux, les sportifs, les stagiaires et la relève.',
      path: '/le-troupeau',
    });
  }
}
