import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {


  produtos = [
    { nome: 'Notebook Dell', preco: 3500, estoque: 5 },
    { nome: 'Monitor LG', preco: 1200, estoque: 0 },
    { nome: 'Teclado Mecânico', preco: 800, estoque: 12 },
    { nome: 'Cadeira Gamer', preco: 2500, estoque: 2 }
  ];

  aumentarPrecos() {
    this.produtos = this.produtos.map(p => ({
      ...p,
      preco: p.preco * 1.1
    }));
  }

  diminuirPrecos() {
    this.produtos = this.produtos.map(p => ({
      ...p,
      preco: p.preco * 0.9
    }));
  }

}

