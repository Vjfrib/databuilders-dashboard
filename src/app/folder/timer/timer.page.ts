import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  items = [
    '01 - DESPESAS INDIRETAS',
    '02 - AQUISIÇÕES',
    '03 - SERVIÇOS PRELIMINARES / MOVIMENTO DE TERRA',
    '04 - FUNDAÇÕES',
    '05 - PAVIMENTO PILOTIS - 1a Pav.',
    '06 - PAVIMENTO VAZADO - 2º Pav.',
    '07 - PAVIMENTO TIPO - CIVIL',
    '08 - PAVIMENTO COBERTA / CASA DE MÁQUINAS - 19º Pav.',
    '09 - CAIXA D\'ÁGUA - RESERVATÓRIO SUPERIOR',
    '10 - INSTALAÇÕES PROVISÓRIAS',
    '11 - INSTALAÇÕES ELÉTRICAS',
    '12 - INSTALAÇÕES DE ESGOTO',
    '13 - INSTALAÇÃO DE ÁGUA',
    '14 - COMBATE A INCÊNDIO',
    '15 - INSTALAÇÃO EXAUSTÃO',
    '16 - INSTALAÇÃO DE GÁS',
    '17 - INSTALAÇÃO DE TELEFONE / ANTENA',
    '18 - INSTALAÇÃO DE AR CONDICIONADO',
    '19 - INSTALAÇÃO DE SPDA',
    '20 - LOUÇAS E METAIS',
    '21 - ENERGIA SOLAR',
    '22 - MÃO DE OBRA DE INSTALAÇÕES GERAIS',
    '23 - ITENS EXTRA'
  ];

  rows = [
    { label: '09/06', cells: Array(13).fill('') },
    { label: '10/06', cells: Array(13).fill('') },
    { label: '11/06', cells: Array(13).fill('') },
    { label: '12/06', cells: Array(13).fill('') },
    { label: '13/06', cells: Array(13).fill('') },
    { label: '14/06', cells: Array(13).fill('') },
    { label: '15/06', cells: Array(13).fill('') },
    { label: '16/06', cells: Array(13).fill('') },
    { label: '17/06', cells: Array(13).fill('') },
    { label: '18/06', cells: Array(13).fill('') },
    { label: '19/06', cells: Array(13).fill('') },
    { label: '20/06', cells: Array(13).fill('') },
    { label: '21/06', cells: Array(13).fill('') },
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
              this.rows.forEach(row => row.cells.push(''));
              this.changeDetector.detectChanges();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  cellClicked(rowIndex: number, columnIndex: number) {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const cell = this.rows[rowIndex].cells[columnIndex];

    if (cell === '') {
      this.rows[rowIndex].cells[columnIndex] = colors[columnIndex % colors.length];
    } else {
      this.rows[rowIndex].cells[columnIndex] = '';
    }

    this.mergeColors(rowIndex, columnIndex);
    this.changeDetector.detectChanges();
  }

  mergeColors(rowIndex: number, columnIndex: number) {
    const targetColor = this.rows[rowIndex].cells[columnIndex];

    if (targetColor !== '') {
      let startCol = columnIndex;
      let endCol = columnIndex;

      // Find the start and end columns of the same color horizontally
      while (startCol > 0 && this.rows[rowIndex].cells[startCol - 1] === targetColor) {
        startCol--;
      }
      while (endCol < this.rows[rowIndex].cells.length - 1 && this.rows[rowIndex].cells[endCol + 1] === targetColor) {
        endCol++;
      }

      // Set the merged color for the range of columns
      for (let col = startCol; col <= endCol; col++) {
        this.rows[rowIndex].cells[col] = targetColor;
      }
    }
  }

  onDragStart(event: DragEvent, subCardIndex: number) {
    event.dataTransfer?.setData('text/plain', subCardIndex.toString());
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, targetColumnIndex: number) {
    event.preventDefault();
    const subCardIndex = +event.dataTransfer?.getData('text/plain');

    if (!isNaN(subCardIndex)) {
      const subCard = this.items[subCardIndex];
      this.rows.forEach(row => {
        row.cells.splice(subCardIndex, 1);
        row.cells.splice(targetColumnIndex, 0, subCard);
      });
    }
  }

  ngOnInit() {}
}
