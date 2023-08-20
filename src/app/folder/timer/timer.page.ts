import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  items = ['Fundação', 'Vigas', 'Pilares', 'Lages', 'Alvenaria'];
  rows = [
    { label: '09/06', cells: Array(5).fill('') },
    { label: '10/06', cells: Array(5).fill('') },
    { label: '11/06', cells: Array(5).fill('') },
    { label: '12/06', cells: Array(5).fill('') },
    { label: '13/06', cells: Array(5).fill('') },
  ];

  constructor(
    private alertController: AlertController,
    private changeDetector: ChangeDetectorRef
  ) {}

  async addTask() {
    const alert = await this.alertController.create({
      header: 'Adicionar Tarefa',
      inputs: [
        {
          name: 'taskName',
          type: 'text',
          placeholder: 'Nome da Tarefa',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Adicionar',
          handler: (data) => {
            if (data.taskName) {
              this.items.push(data.taskName);
              this.rows.push({ label: '', cells: Array(5).fill('') });
              this.changeDetector.detectChanges(); // Atualiza a interface do usuário
            }
          },
        },
      ],
    });

    await alert.present();
  }

  cellClicked(rowIndex: number, columnIndex: number) {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const cell = this.rows[rowIndex].cells[columnIndex];

    if (cell === '') {
      this.rows[rowIndex].cells[columnIndex] = colors[columnIndex % colors.length];
    } else {
      this.rows[rowIndex].cells[columnIndex] = ''; // Torna a célula em branco
    }

    this.changeDetector.detectChanges(); // Atualiza a interface do usuário
  }

  ngOnInit() {}
}
