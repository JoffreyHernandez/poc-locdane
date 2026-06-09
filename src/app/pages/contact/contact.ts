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

    <section class="section">
      <div class="container">
        <div class="panel" appReveal>
          <!-- Coordonnées -->
          <div class="coords">
            <h2>{{ site.hote }}</h2>
            <p class="addr">Ferme de Coume-Sourde<br />11190 Rennes-le-Château · Aude</p>
            <a class="big" [href]="'tel:' + site.telephoneE164">{{ site.telephone }}</a>
            <a class="mail" [href]="'mailto:' + site.email">{{ site.email }}</a>
            <p class="note">Chaque demande est traitée avec attention : plus votre message est complet, mieux nous préparons un parcours adapté à vos envies — ou un devis sur mesure.</p>
          </div>

          <!-- Carte -->
          <div class="map">
            <iframe title="Carte — Ferme de Coume-Sourde, Rennes-le-Château" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.277%2C42.894%2C2.327%2C42.924&layer=mapnik&marker=42.9087%2C2.3017"></iframe>
            <a class="map-link" href="https://www.openstreetmap.org/?mlat=42.9087&mlon=2.3017#map=14/42.9087/2.3017" target="_blank" rel="noopener">Ouvrir la carte en grand ↗</a>
          </div>

          <!-- Accès (bandeau intégré) -->
          <div class="access">
            <div class="acc-col">
              <h3>À quelle distance&nbsp;?</h3>
              <ul class="dist">
                @for (d of distances; track d.ville) {
                  <li><span>{{ d.ville }}</span><b>{{ d.km }} km</b></li>
                }
              </ul>
            </div>
            <div class="acc-col">
              <h3>Sans voiture, c'est possible</h3>
              <p>Depuis <strong>Carcassonne</strong> : train, puis bus ligne 402 (Axat–Quillan–Limoux–Carcassonne), arrêt « Couiza-Sainte-Anne ».</p>
              <p>Depuis <strong>Perpignan</strong> : bus ligne 500 jusqu'à Quillan, puis la ligne 402.</p>
              <p>Ensuite, navettes avec votre hébergeur, en covoiturage — ou avec nous selon le planning (15 €/trajet pour 4 personnes).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .panel {
      display: grid;
      grid-template-columns: 1fr 1.15fr;
      border-radius: 26px; overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--color-ink) 10%, transparent);
      box-shadow: 0 40px 80px -52px color-mix(in srgb, var(--color-ink) 70%, transparent);
    }
    /* Coordonnées */
    .coords { background: var(--color-forest); color: color-mix(in srgb, var(--color-paper) 86%, transparent);
      padding: clamp(28px, 4vw, 44px); display: flex; flex-direction: column; }
    .coords h2 { color: var(--color-paper); font-size: 32px; }
    .addr { margin: 14px 0 22px; line-height: 1.5; }
    .coords .big { display: block; font-family: var(--font-display); font-size: 30px; color: var(--color-gold); }
    .coords .mail { display: inline-block; margin-top: 8px; color: var(--color-paper);
      border-bottom: 1px solid color-mix(in srgb, var(--color-paper) 40%, transparent); align-self: flex-start; }
    .note { margin-top: auto; padding-top: 22px; font-size: 14.5px; line-height: 1.6;
      color: color-mix(in srgb, var(--color-paper) 72%, transparent); }
    /* Carte */
    .map { position: relative; min-height: 380px; }
    .map iframe { display: block; width: 100%; height: 100%; border: 0; }
    .map-link { position: absolute; right: 14px; bottom: 14px; background: var(--color-paper); color: var(--color-clay);
      font-weight: 600; font-size: 13px; padding: 7px 13px; border-radius: 999px;
      box-shadow: 0 6px 18px -8px color-mix(in srgb, var(--color-ink) 70%, transparent); }
    /* Accès */
    .access { grid-column: 1 / -1; background: var(--color-paper-2); padding: clamp(28px, 4vw, 40px);
      display: grid; grid-template-columns: 1fr 1.5fr; gap: clamp(28px, 5vw, 56px);
      border-top: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent); }
    .acc-col h3 { font-size: 19px; color: var(--color-forest); margin: 0 0 14px; }
    .acc-col p { color: var(--color-ink-soft); margin: 0 0 12px; font-size: 15.5px; }
    .dist { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .dist li { display: flex; justify-content: space-between; padding: 9px 13px; background: var(--color-paper);
      border-radius: 11px; border: 1px solid color-mix(in srgb, var(--color-ink) 7%, transparent); font-size: 14.5px; }
    .dist b { color: var(--color-clay); }

    @media (max-width: 920px) {
      .panel { grid-template-columns: 1fr; }
      .map { min-height: 320px; order: -1; }
      .access { grid-template-columns: 1fr; }
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
