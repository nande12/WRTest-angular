import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WrService {

  private modalImages = {
    "ATL": {
      "photo": "assets/images/atl.jpg"
    },
    "Trademarketing": {
      "photo": "assets/images/btl.jpg"
    },
    "BTL": {
      "photo": "assets/images/btl.jpg"
    },
    "POP y Display": {
      "photo": "assets/images/atl.jpg"
    },
    "Social Media": {
      "photo": "assets/images/atl.jpg"
    },
    "MKT Campaign": {
      "photo": "assets/images/atl.jpg"
    },
    "Retail": {
      "photo": "assets/images/atl.jpg"
    },
    "RRHH Outsorsing": {
      "photo": "assets/images/atl.jpg"
    },
    "Gráfico, Digital & Video": {
      "photo": "assets/images/atl.jpg"
    },
    "Business Inteligence": {
      "photo": "assets/images/atl.jpg"
    }
  };

  constructor () { }

  getModalImages() {

    return this.modalImages;

  }
  
}
