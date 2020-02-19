import { Component, OnInit } from '@angular/core';
import { WrService } from 'src/app/services/wr.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  modalType: string = '';
  modalName: string = '';
  modalPhoto: string = '';
  modalImages: any = '';
  modalTypeName: string = '';

  constructor( private _modalData: WrService  ) {
    this.modalImages = this._modalData.getModalImages();
  }

  ngOnInit() {}

  triggerModal( event ) {
    event.preventDefault();
    console.log(event);

    this.modalType = event.srcElement.dataset.type;
    this.modalName = event.srcElement.text;
    this.modalPhoto = this.modalImages[this.modalType].photo;
    this.modalTypeName = `${this.modalType} - ${this.modalName}`;
  }
}
