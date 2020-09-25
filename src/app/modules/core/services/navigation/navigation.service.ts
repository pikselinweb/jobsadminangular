import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  navigateToElement(elementId: string) {
    const nElement = this.document.getElementById(elementId);
    nElement.scrollIntoView({ behavior: 'smooth' });
  }
}
