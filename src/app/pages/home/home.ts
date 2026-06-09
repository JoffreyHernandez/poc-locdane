import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE, FORMULES, NIVEAUX, SAISONS, AVIS } from '../../core/content/site';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private seo = inject(SeoService);

  site = SITE;
  formules = FORMULES;
  niveaux = NIVEAUX;
  saisons = SAISONS;
  avis = AVIS;

  constructor() {
    this.seo.setPage({
      title: "Loc d'Ânes — Randonnées et balades avec un âne en Pays Cathare",
      description:
        'Partez marcher avec un âne à Rennes-le-Château, en Pays Cathare. Balades à la journée ou randonnées itinérantes de plusieurs jours, accueil personnalisé par Hannah, du 1ᵉʳ avril au 30 septembre.',
      path: '/',
    });

    this.seo.setJsonLd('business', {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: SITE.nom,
      description:
        'Location d’ânes de randonnée et accompagnement de balades en Pays Cathare, à Rennes-le-Château (Aude).',
      url: SITE.url,
      telephone: SITE.telephoneE164,
      email: SITE.email,
      image: `${SITE.url}/og-image.jpg`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rennes-le-Château',
        postalCode: '11190',
        addressRegion: 'Aude',
        addressCountry: 'FR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        validFrom: '2026-04-01',
        validThrough: '2026-09-30',
      },
      areaServed: 'Pays Cathare, Vallée de l’Aude, Pyrénées',
    });
  }
}
