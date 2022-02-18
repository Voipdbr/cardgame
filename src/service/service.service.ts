import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ServiceCard{
  constructor (private http: HttpClient){

  }

  getCards(){
    return this.http.get("https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json");
  }
}

export interface Cards{
  "imagesUrl"?: string,
  "imageBackCard"?: string,
  cards?: [{
    "name"?: string,
    "image"?: string
  }]
}

export interface CardsImage{
  cardsImages?: [{
    image?: string,
  }]
}

