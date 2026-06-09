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
      <p class="lead">Loc d'Ânes est basée à la Ferme de Coume-Sourde, à Rennes-le-Château ({{ site.saison.toLowerCase() }}).</p>
    </section>

    <section class="section">
      <div class="container split">
        <div class="card-contact" appReveal>
          <h2>Hannah</h2>
          <p class="addr">Coume-Sourde<br />11190 Rennes-le-Château</p>
          <a class="big" [href]="'tel:' + site.telephoneE164">{{ site.telephone }}</a>
          <a class="mail" [href]="'mailto:' + site.email">{{ site.email }}</a>
          <p class="note">Chaque demande est traitée avec attention : plus votre message est complet, mieux nous préparons un parcours adapté à vos envies — ou un devis sur mesure.</p>
        </div>

        <div class="access" appReveal="100">
          <h3>À quelle distance ?</h3>
          <ul class="dist">
            @for (d of distances; track d.ville) {
              <li><span>{{ d.ville }}</span><b>{{ d.km }} km</b></li>
            }
          </ul>
          <h3>Sans voiture, c'est possible</h3>
          <p>Depuis <strong>Carcassonne</strong> : train jusqu'à Carcassonne, puis bus ligne 402 (Axat–Quillan–Limoux–Carcassonne), arrêt « Couiza-Sainte-Anne ».</p>
          <p>Depuis <strong>Perpignan</strong> : bus ligne 500 jusqu'à Quillan, puis la ligne 402.</p>
          <p>Ensuite, navettes à organiser avec votre hébergeur, en covoiturage — ou avec nous selon le planning (15 €/trajet pour 4 personnes).</p>
        </div>
      </div>
    </section>

    <section class="section alt map-sec">
      <div class="container">
        <header class="map-head"><h2 appReveal>Où nous trouver</h2>
          <p class="lead" appReveal="60">La Ferme de Coume-Sourde, sur les hauteurs de Rennes-le-Château.</p></header>
        <div class="map" appReveal="100">
          <iframe title="Carte — Ferme de Coume-Sourde, Rennes-le-Château" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.233%2C42.909%2C2.293%2C42.949&layer=mapnik&marker=42.9287%2C2.2631"></iframe>
        </div>
        <p class="map-link">
          <a href="https://www.openstreetmap.org/?mlat=42.9287&mlon=2.2631#map=14/42.9287/2.2631" target="_blank" rel="noopener">Ouvrir la carte en grand ↗</a>
        </p>
      </div>
    </section>
  `,
  styles: [`
    .split { display: grid; grid-template-columns: 1fr 1.1fr; gap: clamp(28px, 5vw, 64px); align-items: start; }
    .card-contact { background: var(--color-forest); color: color-mix(in srgb, var(--color-paper) 86%, transparent);
      border-radius: 22px; padding: 34px 32px; }
    .card-contact h2 { color: var(--color-paper); font-size: 30px; }
    .addr { margin: 14px 0 20px; line-height: 1.5; }
    .big { display: block; font-family: var(--font-display); font-size: 30px; color: var(--color-gold); }
    .mail { display: inline-block; margin-top: 8px; color: var(--color-paper); border-bottom: 1px solid color-mix(in srgb, var(--color-paper) 40%, transparent); }
    .note { margin-top: 22px; font-size: 15px; line-height: 1.6; color: color-mix(in srgb, var(--color-paper) 72%, transparent); }
    .access h3 { font-size: 20px; color: var(--color-forest); margin: 0 0 12px; }
    .access h3 + p, .access p { color: var(--color-ink-soft); margin: 0 0 12px; }
    .dist { list-style: none; padding: 0; margin: 0 0 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .dist li { display: flex; justify-content: space-between; padding: 10px 14px; background: var(--color-paper-2);
      border-radius: 12px; border: 1px solid color-mix(in srgb, var(--color-ink) 7%, transparent); }
    .dist b { color: var(--color-clay); }
    @media (max-width: 860px) { .split { grid-template-columns: 1fr; } }
    .map-head { text-align: center; max-width: 640px; margin: 0 auto 28px; }
    .map-head h2 { font-size: clamp(28px, 4vw, 44px); }
    .map-head .lead { margin-top: 10px; }
    .map { border-radius: 22px; overflow: hidden; border: 1px solid color-mix(in srgb, var(--color-ink) 10%, transparent);
      box-shadow: 0 30px 60px -42px color-mix(in srgb, var(--color-ink) 70%, transparent); }
    .map iframe { display: block; width: 100%; height: clamp(320px, 48vw, 480px); border: 0; }
    .map-link { text-align: center; margin-top: 16px; }
    .map-link a { color: var(--color-clay); font-weight: 600; border-bottom: 1px solid color-mix(in srgb, var(--color-clay) 40%, transparent); }
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
        'Contactez Loc d’Ânes à la Ferme de Coume-Sourde, Rennes-le-Château : 07 52 06 51 09, infos@locdanes.fr. Accès depuis Carcassonne, Perpignan et en transports en commun.',
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
