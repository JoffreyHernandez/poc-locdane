import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE, DISTANCES } from '../../core/content/site';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="page-top">
      <p class="kicker">Nous trouver</p>
      <h1>Contact & accès</h1>
      <p class="lead">Loc d'Ânes est basée à la Ferme de Coume-Sourde, à Rennes-le-Château. {{ site.saison }}.</p>
    </section>

    <!-- Coordonnées & accès : présentation éditoriale, deux colonnes, sans boîte -->
    <section class="section lead-sec">
      <div class="container grid2">
        <div class="info" appReveal>
          <p class="eyebrow">Écrire ou appeler</p>
          <h2>{{ site.hote }}</h2>
          <p class="addr">Ferme de Coume-Sourde<br />11190 Rennes-le-Château · Aude</p>
          <a class="tel" [href]="'tel:' + site.telephoneE164">{{ site.telephone }}</a>
          <a class="mail" [href]="'mailto:' + site.email">{{ site.email }}</a>
          <p class="note">Chaque demande est traitée avec attention : plus votre message est complet, mieux nous préparons un parcours adapté — ou un devis sur mesure.</p>
        </div>

        <div class="access" appReveal="100">
          <p class="eyebrow">Venir jusqu'à nous</p>
          <ul class="dist">
            @for (d of distances; track d.ville) {
              <li><span>{{ d.ville }}</span><b>{{ d.km }} km</b></li>
            }
          </ul>
          <div class="transport">
            <p><strong>En transports</strong> — depuis Carcassonne : train, puis bus ligne 402 (arrêt « Couiza-Sainte-Anne »). Depuis Perpignan : bus ligne 500 jusqu'à Quillan, puis la 402.</p>
            <p>Ensuite, navettes avec votre hébergeur, en covoiturage — ou avec nous selon le planning (15 €/trajet pour 4 pers.).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Carte pleine largeur, bords nets -->
    <section class="mapband" aria-label="Carte de la Ferme de Coume-Sourde">
      <iframe title="Carte — Ferme de Coume-Sourde, Rennes-le-Château" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.openstreetmap.org/export/embed.html?bbox=2.2892%2C42.9012%2C2.3142%2C42.9162&layer=mapnik&marker=42.9087%2C2.3017"></iframe>
      <a class="map-link" href="https://www.openstreetmap.org/?mlat=42.9087&mlon=2.3017#map=15/42.9087/2.3017" target="_blank" rel="noopener">Ouvrir la carte en grand ↗</a>
    </section>
  `,
  styles: [`
    .lead-sec { padding-bottom: clamp(40px, 6vw, 72px); }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 7vw, 88px); align-items: start; }
    .eyebrow { font-size: 12px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase;
      color: var(--color-clay); margin: 0 0 14px; }

    .info h2 { font-size: clamp(30px, 4vw, 44px); }
    .addr { margin: 12px 0 22px; line-height: 1.5; color: var(--color-ink-soft); font-size: 17px; }
    .tel { display: block; font-family: var(--font-display); font-size: clamp(30px, 4vw, 40px); color: var(--color-clay); line-height: 1.1; }
    .mail { display: inline-block; margin-top: 8px; color: var(--color-forest); font-weight: 600;
      border-bottom: 2px solid color-mix(in srgb, var(--color-clay) 45%, transparent); }
    .note { margin-top: 24px; max-width: 42ch; color: var(--color-ink-soft); font-size: 15.5px; line-height: 1.6; }

    /* colonne accès : séparée par un filet, pas de boîte */
    .access { border-left: 1px solid color-mix(in srgb, var(--color-ink) 12%, transparent); padding-left: clamp(0px, 4vw, 56px); }
    .dist { list-style: none; padding: 0; margin: 0 0 26px; display: grid; grid-template-columns: 1fr 1fr; gap: 0 32px; }
    .dist li { display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
      padding: 11px 0; border-bottom: 1px solid color-mix(in srgb, var(--color-ink) 9%, transparent); font-size: 16px; }
    .dist b { font-family: var(--font-display); color: var(--color-clay); font-size: 18px; }
    .transport p { color: var(--color-ink-soft); margin: 0 0 12px; font-size: 15.5px; line-height: 1.6; }
    .transport strong { color: var(--color-forest); }

    /* carte pleine largeur, à bords nets */
    .mapband { position: relative; width: 100%; }
    .mapband iframe { display: block; width: 100%; height: clamp(360px, 50vw, 540px); border: 0;
      border-top: 1px solid color-mix(in srgb, var(--color-ink) 12%, transparent);
      border-bottom: 1px solid color-mix(in srgb, var(--color-ink) 12%, transparent); }
    .map-link { position: absolute; right: 18px; bottom: 18px; background: var(--color-forest); color: var(--color-paper);
      font-weight: 600; font-size: 13.5px; padding: 9px 15px; border-radius: 999px;
      box-shadow: 0 10px 24px -10px color-mix(in srgb, var(--color-ink) 80%, transparent); }

    @media (max-width: 880px) {
      .grid2 { grid-template-columns: 1fr; }
      .access { border-left: 0; padding-left: 0; padding-top: 8px; }
      .dist { grid-template-columns: 1fr; }
    }
  `],
})
export class Contact {
  private seo = inject(SeoService);
  site = SITE;
  distances = DISTANCES;
  constructor() {
    this.seo.setPage({
      title: 'Contact & accès — Loc d’Ânes, Rennes-le-Château (Aude)',
      description:
        'Contactez Loc d’Ânes à la Ferme de Coume-Sourde, Rennes-le-Château : 07 52 06 51 09, infos@locdanes.fr. Carte, distances et accès en transports en commun depuis Carcassonne et Perpignan.',
      path: '/contact',
    });
    this.seo.setJsonLd('contact', {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: SITE.nom,
      telephone: SITE.telephoneE164,
      email: SITE.email,
      url: `${SITE.url}/contact`,
      address: { '@type': 'PostalAddress', streetAddress: 'Coume-Sourde', addressLocality: 'Rennes-le-Château', postalCode: '11190', addressRegion: 'Aude', addressCountry: 'FR' },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    });
  }
}
