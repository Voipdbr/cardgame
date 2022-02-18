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

  randomNumber = 0;

  Showing1: boolean=true;
  Showing2: boolean=false;
  Showing3: boolean=true;
  Showing4: boolean=false;
  Showing5: boolean=true;
  Showing6: boolean=false;

  constructor(private serviceCard: ServiceCard, private router:Router ) { }

  ngOnInit(): void {
    this.listarCards();
    this.Showing1 = true;
    this.Showing2 = false;
    this.Showing3 = true;
    this.Showing4 = false;
    this.Showing5 = true;
    this.Showing6 = false;
  }

  random()
  {
    return Math.random()
  }

  listarCards(){
    this.serviceCard.getCards().subscribe(response => {
      this.cards=<any>response;
      this.randomNumber = Math.floor(Math.random() * 10) + 1;
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

  public toggleShow3(){
    this.Showing5 = !this.Showing5;
    this.Showing6 = !this.Showing6;
  }

}
