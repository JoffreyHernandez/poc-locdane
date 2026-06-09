import { Directive, ElementRef, afterNextRender, inject, input, numberAttribute } from '@angular/core';

/**
 * Révèle l'élément quand il entre dans le viewport (IntersectionObserver).
 * - La classe `reveal` est posée dès le SSR (opacité 0 dans le HTML prérendu) ;
 *   un <noscript> dans index.html rétablit la visibilité sans JS.
 * - `appReveal` accepte un délai (ms) pour créer des cascades (stagger).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class RevealDirective {
  private el = inject<ElementRef<HTMLElement>>(ElementRef);
  /** Délai de transition en ms (stagger). Accepte un attribut nu, une chaîne ou un nombre. */
  delay = input(0, { alias: 'appReveal', transform: numberAttribute });

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      const d = Number(this.delay()) || 0;
      if (d) node.style.transitionDelay = `${d}ms`;

      if (!('IntersectionObserver' in window)) {
        node.classList.add('is-visible');
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              node.classList.add('is-visible');
              io.disconnect();
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      io.observe(node);
    });
  }
}
