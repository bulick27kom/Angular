import { Card } from "../share/types";

export class CardsService{
    

    cards: Card[] = [
        { id: 1, text: 'Card 1' },
        { id: 2, text: 'Card 2' },
        { id: 3, text: 'Card 3' },
        { id: 4, text: 'Card 4' },
        { id: 5, text: 'Card 5' },
      ];
    
      getCards(): Card[] {
        return this.cards.slice();
      }

      
}