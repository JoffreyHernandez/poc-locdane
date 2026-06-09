import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE, HEBERGEURS } from '../../core/content/site';

@Component({
  selector: 'app-hebergeurs',
  standalone: true,
  imports: [RevealDirective, RouterLink],
  template: `
    <section class="page-top">
      <p class="kicker">Dormir en chemin</p>
      <h1>Nos hébergeurs partenaires</h1>
      <p class="lead">Chambre, yourte, tente aménagée, dortoir ou bivouac : tous nos hébergeurs sont dans une démarche écoresponsable, avec une cuisine généreuse issue de produits frais. La réservation se fait directement auprès d'eux.</p>
    </section>

    <section class="section">
      <div class="container">
        <div class="cards-grid">
          @for (h of hebergeurs; track h.nom; let i = $index) {
            <article class="heb" [appReveal]="(i % 3) * 60">
              <div class="ph"><img [src]="'assets/hebergeurs/' + h.photo + '.jpg'" [alt]="h.nom + ' — ' + h.lieu" loading="lazy" width="600" height="400" /></div>
              <div class="body">
                <h3>{{ h.nom }}</h3>
                <p class="meta">{{ h.lieu }} · chez {{ h.hote }}</p>
                <p class="txt">{{ h.texte }}</p>
                <p class="accueil">{{ h.accueil }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="container note" appReveal>
        <p class="lead">Avant ou après votre séjour, des hébergeurs vous accueillent aussi à proximité de la ferme. Nous vous orientons vers ceux qui correspondent à votre itinéraire.</p>
        <a class="btn btn-primary btn-press" routerLink="/contact">Demander conseil</a>
      </div>
    </section>
  `,
  styles: [`
    .heb { display: flex; flex-direction: column; background: var(--color-paper); overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent); border-radius: 20px;
      transition: transform 320ms var(--ease-out-strong), box-shadow 320ms var(--ease-out-strong); }
    .ph { aspect-ratio: 3/2; overflow: hidden; }
    .ph img { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms var(--ease-out-strong); }
    .body { padding: 22px 22px 24px; }
    .heb h3 { font-size: 21px; color: var(--color-forest); }
    .meta { margin: 6px 0 10px; font-weight: 600; color: var(--color-clay); font-size: 14px; }
    .txt { color: var(--color-ink-soft); font-size: 15.5px; }
    .accueil { margin-top: 12px; font-size: 13.5px; color: var(--color-olive-deep);
      background: color-mix(in srgb, var(--color-olive) 14%, transparent); display: inline-block;
      padding: 5px 11px; border-radius: 999px; }
    @media (hover: hover) and (pointer: fine) {
      .heb:hover { transform: translateY(-5px); box-shadow: 0 24px 48px -30px color-mix(in srgb, var(--color-ink) 60%, transparent); }
      .heb:hover .ph img { transform: scale(1.05); }
    }
    .note { text-align: center; max-width: 660px; }
    .note .lead { margin-bottom: 24px; font-size: 18px; }
  `],
})
export class Hebergeurs {
  private seo = inject(SeoService);
  site = SITE;
  hebergeurs = HEBERGEURS;
  constructor() {
    this.seo.setPage({
      title: 'Hébergeurs partenaires — randonnée avec un âne dans l’Aude | Loc d’Ânes',
      description:
        'Le Cerf-Volant, La Jouane, le Relais du Cardou, le Périlhou… nos hébergeurs écoresponsables accueillent randonneurs et ânes en chambre, yourte, gîte ou bivouac en Pays Cathare.',
      path: '/hebergeurs',
    });
  }
}
