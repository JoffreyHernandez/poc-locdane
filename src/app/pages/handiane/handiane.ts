import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE } from '../../core/content/site';

@Component({
  selector: 'app-handiane',
  standalone: true,
  imports: [RevealDirective, RouterLink],
  template: `
    <section class="page-top">
      <p class="kicker">Accessible à tous</p>
      <h1>Antenne HandiÂne Aude</h1>
      <p class="lead">« Pour que tout soit accessible pour tous ! »</p>
    </section>

    <section class="section">
      <div class="container narrow prose" appReveal>
        <p>La randonnée avec un âne s'ouvre aux enfants en situation de <strong>handicap moteur, mental et visuel</strong> grâce aux selles adaptées HandiÂne.</p>
        <p>En partenariat avec l'association <strong>Handiane France</strong>, nous avons créé une antenne dans l'Aude. Loc d'Ânes est équipé d'une selle HandiÂne depuis <strong>juin 2019</strong> et vous propose un accueil et une activité adaptés.</p>
        <p>Chaque sortie est pensée pour le partage, dans la douceur et au rythme de l'âne — l'un des animaux les plus apaisants qui soient.</p>
      </div>
    </section>

    <section class="section alt">
      <div class="container cta-inner" appReveal>
        <h2>Organisons une sortie adaptée</h2>
        <p class="lead">Parlons de vos besoins pour préparer un accueil sur mesure.</p>
        <a class="btn btn-primary btn-press" routerLink="/contact">Nous contacter</a>
      </div>
    </section>
  `,
  styles: [`
    .narrow { max-width: 720px; }
    .cta-inner { text-align: center; max-width: 640px; }
    .cta-inner h2 { font-size: clamp(28px, 4vw, 44px); }
    .cta-inner .lead { margin: 16px 0 28px; font-size: 18px; }
  `],
})
export class Handiane {
  private seo = inject(SeoService);
  site = SITE;
  constructor() {
    this.seo.setPage({
      title: 'Antenne HandiÂne Aude — randonnée avec un âne accessible | Loc d’Ânes',
      description:
        'Loc d’Ânes, antenne HandiÂne Aude : randonnée avec un âne accessible aux enfants en situation de handicap moteur, mental et visuel grâce à une selle adaptée, en partenariat avec Handiane France.',
      path: '/handiane',
    });
  }
}
