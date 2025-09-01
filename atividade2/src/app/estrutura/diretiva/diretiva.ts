import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.html',
  styleUrls: ['./diretiva.css']
})
export class DiretivaComponent {
  exibirLista: boolean = true;
  fontSize: number = 16;

  alunos = [
    { id: 1, nome: 'Maria', ativo: true },
    { id: 2, nome: 'João', ativo: false },
    { id: 3, nome: 'Ana', ativo: true },
    { id: 4, nome: 'Carlos', ativo: false }
  ];

  alternarLista() {
    this.exibirLista = !this.exibirLista;
  }

  aumentarFonte() {
    this.fontSize += 2;
  }

  diminuirFonte() {
    if (this.fontSize > 10) {
      this.fontSize -= 2;
    }
  }
}
