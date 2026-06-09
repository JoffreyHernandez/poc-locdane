import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE, NAV } from '../core/content/site';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="ft" id="contact">
      <div class="grid">
        <div class="col brandcol">
          <img class="ftlogo" src="assets/logo.png" alt="Loc d'Ânes" width="300" height="307" />
          <p class="tag">{{ site.baseline }}.</p>
          <p class="saison">{{ site.saison }}</p>
        </div>

        <div class="col">
          <h4>Nous contacter</h4>
          <a class="big" [href]="'tel:' + site.telephoneE164">{{ site.telephone }}</a>
          <a [href]="'mailto:' + site.email">{{ site.email }}</a>
          <p class="lieu">{{ site.lieu }}</p>
        </div>

        <div class="col">
          <h4>Explorer</h4>
          <nav>
            @for (l of nav; track l.path) { <a [routerLink]="l.path">{{ l.label }}</a> }
          </nav>
        </div>
      </div>

      <div class="bottom">
        <span>© {{ year }} {{ site.nom }} — Pays Cathare</span>
        <a routerLink="/">Retour à l'accueil</a>
      </div>
    </footer>
  `,
  styles: [`
    .ft { background: var(--color-forest); color: color-mix(in srgb, var(--color-paper) 84%, transparent); padding: clamp(48px, 7vw, 88px) clamp(16px, 5vw, 56px) 28px; }
    .grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr; gap: 40px; max-width: 1180px; margin: 0 auto; }
    .ftlogo { height: 92px; width: auto; display: block; }
    .tag { margin: 12px 0 6px; max-width: 30ch; line-height: 1.5; }
    .saison { color: var(--color-gold); font-weight: 600; }
    h4 { font-family: var(--font-sans); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: color-mix(in srgb, var(--color-paper) 60%, transparent); margin-bottom: 16px; }
    .col a { display: block; padding: 3px 0; color: color-mix(in srgb, var(--color-paper) 84%, transparent); transition: color 180ms ease; }
    .col a:hover { color: var(--color-paper); }
    .big { font-family: var(--font-display); font-size: 24px; color: var(--color-paper) !important; margin-bottom: 6px; }
    .lieu { margin-top: 12px; line-height: 1.5; }
    .bottom { max-width: 1180px; margin: 48px auto 0; padding-top: 22px; display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
      border-top: 1px solid color-mix(in srgb, var(--color-paper) 14%, transparent); font-size: 14px; }
    @media (max-width: 760px) { .grid { grid-template-columns: 1fr; gap: 32px; } }
  `],
})
export class SiteFooter {
  site = SITE;
  nav = NAV;
  year = 2026;
}
