import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  items = ['Fundação', 'Vigas', 'Pilares', 'Lages', 'Alvenaria']; // Itens das colunas da tabela
  rows = [
    { label: '09/06', cells: ['', '', '', '', ''] },
    { label: '10/06', cells: ['', '', '', '', ''] },
    { label: '11/06', cells: ['', '', '', '', ''] },
    { label: '12/06', cells: ['', '', '', '', ''] },
    { label: '13/06', cells: ['', '', '', '', ''] }
  ]; // Linhas da tabela com células vazias inicialmente

  private currentItemCount = 5; // Número atual de itens exibidos
  private readonly itemsPerPage = 5; // Número de itens para carregar por página

  constructor() { }

  ngOnInit() {
  }

  cellClicked(rowIndex: number, columnIndex: number) {
  const cell = this.rows[rowIndex].cells[columnIndex];
  if (cell === '') {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    this.rows[rowIndex].cells[columnIndex] = colors[columnIndex % colors.length];
  } else {
    this.rows[rowIndex].cells[columnIndex] = '';
  }
}


  loadMore(event: any) {
    setTimeout(() => {
      this.currentItemCount += this.itemsPerPage;
      event.target.complete();

      // Verifica se todos os itens foram carregados
      if (this.currentItemCount >= this.items.length) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
