import { Component, OnDestroy, OnInit, signal } from '@angular/core';

declare const require: any;
@Component({
  selector: 'sponsor-component',
  imports: [],
  templateUrl: './sponsor-component.html',
  styleUrl: './sponsor-component.css',
})
export class SponsorComponent implements OnInit, OnDestroy{
  validSponsors = signal<string[]>([]);
  
  // Questo Signal serve come esca per testare un'immagine alla volta nell'HTML
  currentTestingPath = signal<string | null>(null);
  
  currentIndex = signal(0);
  isReady = signal(false);
  
  private testingIndex = 1;
  private intervalId: any;

  ngOnInit() {
    // Avvia la catena di controllo partendo dal primo potenziale sponsor
    this.testNextSponsor();
  }

  // Prepara l'esca nell'HTML per il prossimo file
  private testNextSponsor() {
    this.currentTestingPath.set(`images/sponsors/sponsor${this.testingIndex}.png`);
  }

  // Chiamata dall'HTML quando l'esca corrente si carica con successo (il file esiste!)
  onImageLoadSuccess() {
    const path = this.currentTestingPath();
    if (path) {
      // Aggiunge lo sponsor valido alla lista
      this.validSponsors.update(current => [...current, path]);
      
      // Incrementa l'indice e passa a testare il file successivo
      this.testingIndex++;
      this.testNextSponsor();
    }
  }

  // Chiamata dall'HTML quando l'esca fallisce (le immagini nella cartella sono finite!)
  onImageLoadError() {
    console.log(`[TS] Scansione cartella completata. Sponsor totali trovati: ${this.validSponsors().length}`);
    
    // Rimuove l'esca per pulire l'HTML
    this.currentTestingPath.set(null);
    
    // Attiva la vista del carosello se è stato trovato almeno uno sponsor valido
    if (this.validSponsors().length > 0) {
      this.isReady.set(true);
      
      // Avvia lo scorrimento automatico solo se gli sponsor da alternare sono più di uno
      if (this.validSponsors().length > 1) {
        this.startCarousel();
      }
    }
  }

  startCarousel() {
    if (this.intervalId) clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      this.currentIndex.update(idx => (idx + 1) % this.validSponsors().length);
    }, 1000); // Cambia sponsor ogni 5 secondi
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
