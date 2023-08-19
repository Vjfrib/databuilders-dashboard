import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  cards: { title: string; subtitle: string; description: string }[] = [];

  ngOnInit() {
    this.generateCards();
  }

  private generateCards() {
    const count = this.cards.length + 1;
    for (let i = 0; i < 50; i++) {
      this.cards.push({
        title: `Notificação ${count + i}`,
        subtitle: `Data: 09/06/2023  (${count + i})`,
        description: `Precisa de observação na obra.`,
      });
    }
  }

  loadMoreCards(event: any) {
    setTimeout(() => {
      this.generateCards();
      event.target.complete();
    }, 500);
  }
}
