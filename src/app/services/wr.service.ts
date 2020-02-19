import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WrService {

  private modalImages = {
    "ATL": {
      "photo": "assets/images/social-media.jpg"
    },
    "Trademarketing": {
      "photo": "assets/images/social-media.jpg"
    },
    "BTL": {
      "photo": "assets/images/social-media.jpg"
    },
    "POP y Display": {
      "photo": "assets/images/social-media.jpg"
    },
    "Social Media": {
      "photo": "assets/images/social-media.jpg"
    },
    "MKT Campaign": {
      "photo": "assets/images/social-media.jpg"
    },
    "Retail": {
      "photo": "assets/images/social-media.jpg"
    },
    "RRHH Outsorsing": {
      "photo": "assets/images/social-media.jpg"
    },
    "Gráfico, Digital & Video": {
      "photo": "assets/images/social-media.jpg"
    },
    "Business Inteligence": {
      "photo": "assets/images/social-media.jpg"
    }
  };

  constructor () { }

  getModalImages() {

    return this.modalImages;

  }
  
}
