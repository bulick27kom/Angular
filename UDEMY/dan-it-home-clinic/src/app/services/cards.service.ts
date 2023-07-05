import { Injectable } from '@angular/core';
import { Card } from '../share/types';
import { AutorizationService } from './autorization.service';

@Injectable()
export class CardsService {
  cards: Card[] = [
    { id: 1, text: 'Card 1' },
    { id: 2, text: 'Card 2' },
    { id: 3, text: 'Card 3' },
    { id: 4, text: 'Card 4' },
    { id: 5, text: 'Card 5' },
  ];

  constructor(private autorizationServise: AutorizationService) {}

  getCards(): Card[] {
    return this.cards.slice();
  }

  getAllCardsFromServer() {
    const url = 'https://ajax.test-danit.com/api/v2/cards';
    fetch(url, {
      headers: {
        Authorization: `Bearer ${this.autorizationServise.token}`,
      },
    })
      .then((response) => response.json())
      .then((cards) => {
        console.log(cards);
      });
  }
}
