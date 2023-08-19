import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  cards: { title: string; subtitle: string; description: string }[] = [];

  constructor(private menu: MenuController) {}

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

  openSidemenu() {
    this.menu.enable(true, 'main-menu'); // Certifique-se de usar o mesmo ID do seu sidemenu
    this.menu.open('main-menu'); // Abre o sidemenu com o ID especificado
  }
}
