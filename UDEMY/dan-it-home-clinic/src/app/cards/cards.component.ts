import { Component, OnInit } from '@angular/core';
import { Card } from '../share/types';
import { CardsService } from '../services/cards.service';
import { AutorizationService } from '../services/autorization.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class Cards implements OnInit {
  cards: Card[];
  autorized: boolean;

  constructor(private cardsServise: CardsService, private autorizeServise: AutorizationService) {
    this.autorized = autorizeServise.autorized;
    autorizeServise.autorizationStatusChanged.subscribe(()=>{
      this.autorized = autorizeServise.autorized;
    })
  }

  ngOnInit(): void {
    this.cards = this.cardsServise.getCards();
  }
}
