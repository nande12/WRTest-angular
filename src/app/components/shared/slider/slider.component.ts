import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {

  id: string = '';

  constructor() {}

  ngOnInit() {}

  scrollTo( id ) {
    console.log(id);

    const elmnt = document.getElementById( id );
    elmnt.scrollIntoView({ block: 'start', behavior: 'smooth' });

  }
}
