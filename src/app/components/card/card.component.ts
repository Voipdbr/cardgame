import { Component, OnInit } from '@angular/core';
import { Cards, ServiceCard, CardsImage } from 'src/service/service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  headers = ["name", "image"];

  cards: Cards={
    "imagesUrl": "",
    "imageBackCard": "",
    cards: [{
      "name": "",
      "image": ""
    }]
  }

  Showing1: boolean=true;
  Showing2: boolean=false;
  Showing3: boolean=true;
  Showing4: boolean=false;

  constructor(private serviceCard: ServiceCard, private router:Router ) { }

  ngOnInit(): void {
    this.listarCards();
    this.Showing1 = true;
    this.Showing2 = false;
    this.Showing3 = true;
    this.Showing4 = false;
  }

  listarCards(){
    this.serviceCard.getCards().subscribe(response => {
      this.cards=<any>response;
    },
    err => console.log(err)
    );
  }

  public toggleShow1(){
    this.Showing1 = !this.Showing1;
    this.Showing2 = !this.Showing2;
  }

  public toggleShow2(){
    this.Showing3 = !this.Showing3;
    this.Showing4 = !this.Showing4;
  }

}
