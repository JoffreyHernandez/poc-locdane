import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { SITE, TARIFS, SERVICES } from '../../core/content/site';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="page-top">
      <p class="kicker">Sur réservation</p>
      <h1>Tarifs</h1>
      <p class="lead">Le tarif de base pour la location d'un âne de randonnée — adapté ensuite à votre projet. N'hésitez pas à demander un devis.</p>
    </section>

    <section class="section">
      <div class="container narrow">
        <div class="grid-prix" appReveal>
          @for (t of tarifs; track t.duree) {
            <div class="prix"><span class="d">{{ t.duree }}</span><span class="p">{{ t.prix }}</span></div>
          }
        </div>
        <p class="pay" appReveal="80">Paiement par virement ou en espèces — nous n'acceptons pas les chèques.</p>
        <div class="devis" appReveal="120">
          <a class="btn btn-primary btn-press" [href]="'tel:' + site.telephoneE164">Demander un devis</a>
          <a class="btn btn-ghost btn-press" [href]="'mailto:' + site.email">{{ site.email }}</a>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        <header class="head"><h2 appReveal>Locations particulières & autres services</h2>
          <p class="lead" appReveal="60">Chaque demande est étudiée sur mesure ; un devis spécifique vous est proposé.</p></header>
        <div class="cards-grid">
          @for (s of services; track s.titre; let i = $index) {
            <article class="srv" [appReveal]="i * 60"><h3>{{ s.titre }}</h3><p>{{ s.texte }}</p></article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .narrow { max-width: 720px; }
    .grid-prix { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; }
    .prix { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 22px 16px;
      background: var(--color-paper-2); border: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent); border-radius: 16px; }
    .prix .d { font-size: 14px; color: var(--color-ink-soft); font-weight: 600; }
    .prix .p { font-family: var(--font-display); font-size: 30px; color: var(--color-clay); line-height: 1; }
    .pay { text-align: center; margin-top: 22px; color: var(--color-ink-soft); font-size: 15px; }
    .devis { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }
    .head { max-width: 720px; margin: 0 auto clamp(28px, 4vw, 44px); text-align: center; }
    .head h2 { font-size: clamp(28px, 4vw, 44px); }
    .head .lead { margin-top: 12px; font-size: 18px; }
    .srv { background: var(--color-paper); border: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent);
      border-radius: 18px; padding: 26px 24px; }
    .srv h3 { font-size: 20px; color: var(--color-forest); margin-bottom: 9px; }
    .srv p { color: var(--color-ink-soft); font-size: 15.5px; }
  `],
})
export class Tarifs {
  private seo = inject(SeoService);
  site = SITE;
  tarifs = TARIFS;
  services = SERVICES;
  constructor() {
    this.seo.setPage({
      title: 'Tarifs — location d’un âne de randonnée | Loc d’Ânes',
      description:
        'Tarifs de location d’un âne de randonnée en Pays Cathare : de 65 € la journée à 325 € les 6 jours, devis sur mesure. Anniversaire, événements, portage et éco-débroussaillage.',
      path: '/tarifs',
    });
  }
}
